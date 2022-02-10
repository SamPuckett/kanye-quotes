import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";

import { Button, Blockquote } from "@mantine/core";
import { useOs } from "@mantine/hooks";

export const getServerSideProps = async () => {
  const res = await fetch(`https://api.kanye.rest`);
  const quote = await res.json();

  return {
    props: {
      quote,
    },
  };
};

export default function Home({ quote }) {
  const [stateQuote, setQuote] = useState("");

  const getNewData = async () => {
    const res = await fetch(`https://api.kanye.rest`);
    setQuote(await res.json());
  };

  console.log(stateQuote);

  return (
    <div className={styles.container}>
      <Head>
        <title>Ye Quotes</title>
        <meta name="description" content="Created By Samuel Ruiz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Blockquote cite="– Ye">{quote.quote}</Blockquote>
        <Button
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan" }}
          size="xs"
          className={styles.button}
          onClick={() => {
            window.location.reload();
          }}
        >
          New Quote
        </Button>
      </main>
    </div>
  );
}

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Router from "next/router";
import { Button } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = Router;
  return (
    <>
      <Head>
        <title>Pickey</title>
        <meta name="description" content="Developed by Atiq Israk" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container flexed-column">
        <h1>Welcome to Pickey!</h1>
        {/* <button
          className="btn"
          onClick={() => {
            router.push("/stage1");
          }}
        >
          Start
        </button> */}
        <Button
        className="btn"
          variant="contained"
          onClick={() => {
            router.push("/stage1");
          }}
        >
          Start
        </Button>
      </main>
    </>
  );
}

import Head from "next/head";
import Content from "../components/Content";
import styles from "modern-normalize";

export default function() {
  return (
    <>
      <Head>
        <title>Chris Lam</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Content />

      <style jsx global>
        {styles}
      </style>
      <style jsx global>{`
        body {
          background-color: #333333;
          color: #ffffff;
          font-size: 16px;
          line-height: 1.333;
        }
      `}</style>
    </>
  );
}

import styles from "@/app/utils.module.css";

import ThanksGif from "./thanks.gif";

import Image from "next/image";

export const metadata = {
  title: "Hip Hip Hooray | Julia & Dan",
  description:
    "Thanks for letting us know if you are able to attend the wedding of Julia & Dan on Sept 7, 2024 in Silverton, CO.",
};

export default function Rsvp() {
  return (
    <main className={styles.main}>
      <h1>{"Merci beaucoup"}</h1>
      <p>
        <em style={{ marginRight: "0.5rem" }}>Hip hip Hooray!</em>Hope to see
        you on our special day.
      </p>
      <div style={{ margin: "2rem auto" }}>
        <Image
          alt="Julia spraying Dan with champagne on the million dollar highway"
          src={ThanksGif}
          width={418}
          height={626}
        />
      </div>
    </main>
  );
}

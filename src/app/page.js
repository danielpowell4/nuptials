import styles from "./page.module.css";
import Countdown from "@/components/Countdown";

export default function Home() {
  return (
    <main className={styles.main}>
      <Countdown
        title="Count down to Sept 7, 2024"
        until={"2024-09-07T23:00:00.000Z"}
      />
      <Countdown
        title="Count up from May 1, 2014"
        until={"2014-05-02T00:00:00.000Z"}
      />
    </main>
  );
}

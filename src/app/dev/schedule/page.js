import styles from "@/app/utils.module.css";

export const metadata = {
  title: "Schedule | Julia & Dan",
  description:
    "Schedule of 'formal' events for the wedding of Julia & Dan on Sept 7, 2024.",
};

export default function Schedule() {
  return (
    <main className={styles.main}>
      <h1>Schedule</h1>
      <section>
        <h2>Thursday</h2>
      </section>
      <section>
        <h2>Friday</h2>
      </section>
      <section>
        <h2>Saturday</h2>
      </section>
      <section>
        <h2>Sunday</h2>
      </section>
    </main>
  );
}

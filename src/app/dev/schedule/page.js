import styles from "@/app/utils.module.css";

export const metadata = {
  title: "Schedule | Julia & Dan",
  description:
    "Schedule of 'formal' events for the wedding of Julia & Dan on Sept 7, 2024.",
};

export default function Schedule() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1>Schedule</h1>
        <p>A note about things</p>
      </section>
      <section className={styles.section}>
        <h2>Thursday | Sept 5, 2024</h2>
        <pre>TODO: figure this out</pre>
      </section>
      <section className={styles.section}>
        <h2>Friday | Sept 6, 2024</h2>
        <p>Welcome drinks and small eats on the Coffee Bear rooftop!</p>
        <time>7:00 PM</time>
      </section>
      <section className={styles.section}>
        <h2>Saturday | Sept 7, 2024</h2>
        <ul>
          <li>
            <h3>Before Ceremony</h3>
            <p>Get out! Have fun.</p>
          </li>
          <li>
            <h3>Get to Ceremony</h3>
            <p>Leave by 3:00PM</p>
          </li>
          <li>
            <h3>Ceremony</h3>
            <time>4:00 PM</time>
          </li>
          <li>
            <h3>Reception + Dinner</h3>
            <time>6:00 PM</time>
          </li>
          <li>
            <h3>Party</h3>
            <time>After dinner</time>
          </li>
          <li>
            <h3>After Party</h3>
            <time>After party</time>
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <h2>Sunday | Sept 8, 2024</h2>
        <pre>TODO: figure this out</pre>
      </section>
    </main>
  );
}

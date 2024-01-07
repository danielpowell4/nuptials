import styles from "@/app/utils.module.css";

export const metadata = {
  title: "Registry | Julia & Dan",
  description:
    "Respond, if you please to the wedding of Julia & Dan on Sept 7, 2024 in Silverton, CO.",
};

export default function Registry() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1>Registry</h1>
      </section>
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

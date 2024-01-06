import styles from "@/app/utils.module.css";

export const metadata = {
  title: "RSVP | Julia & Dan",
  description:
    "Respond, if you please to the wedding of Julia & Dan on Sept 7, 2024 in Silverton, CO.",
};

export default function Rsvp() {
  return (
    <main className={styles.main}>
      <h1>RSVP</h1>
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

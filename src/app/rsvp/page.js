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
      <p>
        Check back soon so we can collect your preferred contact info and
        official response to our grand San Juan soiree.
      </p>
    </main>
  );
}

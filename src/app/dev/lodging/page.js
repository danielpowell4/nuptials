import styles from "@/app/utils.module.css";

export const metadata = {
  title: "Lodging | Julia & Dan",
  description:
    "Where to stay in Silverton, CO for the wedding of Julia & Dan on Sept 7, 2024.",
};

export default function Lodging() {
  return (
    <main className={styles.main}>
      <h1>Lodging</h1>
      <section>
        <h2>The Wyman</h2>
      </section>
      <section>
        <h2>Vacation Rentals</h2>
      </section>
      <section>
        <h2>Other Hotels</h2>
      </section>
      <section>
        <h2>Camping</h2>
      </section>
    </main>
  );
}

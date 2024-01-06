import styles from "@/app/utils.module.css";
import { Link } from "react-aria-components";

export const metadata = {
  title: "Getting Here | Julia & Dan",
  description:
    "How to get to Silverton, CO for the wedding of Julia & Dan on Sept 7, 2024.",
};

export default function GettingHere() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1>Getting here</h1>
        <p>For most, there is no quick way to arrive in Silverton, Colo.</p>
        <p>
          Thankfully one no longer needs to trek from Del Norte over Stony
          Pass--headwaters of the Rio Grande--to arrive. The town is accessible
          by the Durango & Silverton Narrow Gauge Railroad. This is perhaps the
          most scenic way to arrive, but aside from on foot, it is also the
          slowest.
        </p>
        <p>
          Most folks, though, will want to fly into{" "}
          <Link href="#DGO">Durango (DGO)</Link> or{" "}
          <Link href="#MTG">Montrose (MTG)</Link> and then drive in.
        </p>
      </section>
      <section id="DGO" className={styles.section}>
        <h2>
          Durango <span className={styles.headerAccent}>DGO</span>
        </h2>
        <p>
          Durango--airport code DGO--is known to Silvertonians as the 'Big
          City'. It is the closest airport and is about 50 miles from Silverton.
          The drive from the airport is about an hour and a half over two chill
          mountain passes--Coal Bank and Molas.
        </p>
        <p>{`This river town mecca for mountain bikers and folks who like having both a pharmacy and a conventional grocery store has great amenities.`}</p>
        <ul>
          <li>Lola's</li>
          <li>Himalayan Kitchen</li>
          <li>Chang Thai</li>
          <li>James Ranch</li>
        </ul>
      </section>
      <section id="MTJ" className={styles.section}>
        <h2>
          Montrose <span className={styles.headerAccent}>MTJ</span>
        </h2>
        <p>
          {`Montrose--airport code MTJ--is about 75 miles and an hour and a half from Silverton. A
          stone's throw from the impressive Black Canyon of the Gunnison
          National Park and less impressive endless water of Blue Mesa
          Reservoir, Montrose is stop on the journey to the San Juans.`}
        </p>
        <p>
          Fly here if you are getting picked up by someone who lives in the
          front range or if the flights work out better for you.
        </p>
        <p>
          On your journey to Silverton will pass through bustling Ouray and then
          you cash in on the once in a lifetime experience of driving along the
          Million Dollar Highway up and over Red Mountain Pass.
        </p>
      </section>
      <section id="KTEX" className={styles.section}>
        <h2>
          Telluride <span className={styles.headerAccent}>KTEX</span>
        </h2>
        <p>
          {`Telluride--airport code KTEX--a hamlet you might have heard about because of its ski resort, film festivals, or bluegrass, is not a good speedy to get to Silverton.`}
        </p>
        <p>
          {`Reasonable airfare is few and far between and the drive typically takes over 2 hours.`}
        </p>
      </section>
      <section id="DEN" className={styles.section}>
        <h2>
          Denver / Front range <span className={styles.headerAccent}>DEN</span>
        </h2>
        <p>
          {`Denver--airport code DEN--capital city of Colorado is not that close to Silverton. A journey of over 350 miles and typically 7-or-so hours will afford you either the opportunity to see Summit County, Palisade--the home of Palisade Peaches--and a drive through Chipotle in Grand Junction or 285 to the Sand Dunes, Monarch Pass, and Gunnison.`}
        </p>
        <p>
          {`Unless you already live in Denver or the greater Front Range, we don't recommend you come this way as your first course of action.`}
        </p>
      </section>
    </main>
  );
}

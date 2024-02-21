import styles from "@/app/utils.module.css";
import { Link } from "react-aria-components";
import { LinkButton } from "@/components";
import Image from "next/image";

export const metadata = {
  title: "Lodging | Julia & Dan",
  description:
    "Where to stay in Silverton, CO for the wedding of Julia & Dan on Sept 7, 2024.",
};

const OtherLodging = () => (
  <>
    <section id="vacation-rentals" className={styles.section}>
      <h2>Vacation Rentals</h2>
      <p></p>
      <ul className={styles.list}>
        <li style={{ marginBottom: "1.15rem" }}>
          <LinkButton href="https://www.stellarmountainproperties.com/rentals">
            Stellar Direct
          </LinkButton>
        </li>
        <li style={{ marginBottom: "1.15rem" }}>
          <LinkButton href="https://www.airbnb.com/s/Silverton--Colorado--United-States/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-02-01&monthly_length=3&price_filter_input_type=0&channel=EXPLORE&query=Silverton%2C%20CO&place_id=ChIJTT8-1PjnPocRP8t9tS4432g&date_picker_type=calendar&checkin=2024-09-06&checkout=2024-09-08">
            AirBnb
          </LinkButton>
        </li>
        <li style={{ marginBottom: "1.15rem" }}>
          <LinkButton href="https://www.vrbo.com/search?adults=2&d1=2024-09-06&d2=2024-09-08&destination=Silverton%2C%20Colorado%2C%20United%20States%20of%20America&endDate=2024-09-08&latLong=37.811939%2C-107.664505&regionId=158310&semdtl=&sort=RECOMMENDED&startDate=2024-09-06&theme=&userIntent=">
            Vrbo
          </LinkButton>
        </li>
      </ul>
    </section>
    <section id="other-hotels" className={styles.section}>
      <h2>Other Hotels</h2>
    </section>
    <section id="camping" className={styles.section}>
      <h2>Camping</h2>
    </section>
  </>
);

export default function Lodging() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1>Lodging</h1>
        <p>Silverton is a grand town of roughly 700 people.</p>
        <p>
          We are always stoked to host visiting folks at our little house on
          Mineral St. It is an enormous 2-bed, 1-bath with arguably the best
          food in town and an unrivaled rewards program.
        </p>
        <p>
          During our week of nuptials, though, we are unable to comfortably host
          all our friends and family at the same time.
        </p>
        <p>We recommend staying at The Wyman, four blocks from our house.</p>
        <p>We have the whole place--all 15 rooms--blocked off!</p>
      </section>
      <section id="the-wyman" className={styles.section}>
        <h2 style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          The Wyman
          <span>
            <Link href="https://www.instagram.com/thewymanhotel/">
              <Image
                alt="@thewymanhotel"
                src="/assets/Instagram-Icon.svg"
                height={40}
                width={40}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Link>
          </span>
        </h2>
        <p>
          {`We're stoked to be having events at our favorite hang out in town, The Wyman Hotel.`}
        </p>
        <blockquote>
          {`Located on Silverton's main street, the 1902 landmark building has
          been reimagined [by our friends] with the comforts and amenities of an
          urban boutique hotel and is a welcoming, thoughtfully appointed space,
          perfect for artists, creatives, and adventurers.`}
        </blockquote>
        <p>
          On the day of the wedding, we will be feasting and partying here
          following a ceremony out in the mountains. If you stay here with us
          you will not have to worry about wondering around town or knowing
          which way to go.
        </p>
        <p>
          Many rooms are suites and can comfortably fit more than 1 couple.
          There is also a <em>sweet</em> bunk room that you should certainly
          consider while it stays available.
        </p>
        <LinkButton
          href="http://hotels.cloudbeds.com/reservation/ZhecWY?allotment_block_code=b068281#checkin=2024-09-06&checkout=2024-09-08"
          style={{ marginBottom: "1.15rem" }}
        >
          Book a Room with our Block Code
        </LinkButton>
        <p>
          If you are looking to come for longer than the pre-selected window of
          Friday - Sunday, contact their team at 970.799.4952.
        </p>
        <p>
          If you have any questions about other arrangements like food, shoot us
          a text!
        </p>
        <p>We want this week to be as awesome as it can be for all involved.</p>
      </section>
    </main>
  );
}

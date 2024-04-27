import styles from "@/app/utils.module.css";
import { Link } from "react-aria-components";
import { CldImage, Spacer } from "@/components";

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
        <p>
          As we draw close to the celebratory weekend on September 6-8, 2024,
          Dan would like to point out that Labor Day falls on the Monday just
          before our events this year.
        </p>
        <p>
          For those who can swing such a thing, we think it would be a stellar
          idea to take off a few extra days off to link up the two weekends for
          an extended stay in the San Juan Mountains. Text us!
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.stickySectionHeader}>Friday | Sept 6, 2024</h2>

        <CldImage
          width="672"
          height="400"
          src={
            "https://res.cloudinary.com/dano-photos/image/upload/v1705248253/Nuptials/coffee_bear_rooftop_v5jpz9.webp"
          }
          alt={`Stolen photo of Coffee Bear rooftop in the morning`}
          crop="fill"
          sizes="100vw"
          gravity="north_west"
          style={{
            border: "1px solid var(--hr)",
            borderRadius: "4px",
            maxWidth: "100%",
            height: "auto",
          }}
        />

        <h3>Après Welcome Drinks w/ Small Eats</h3>
        <p>
          Kick off our 10-year celebration with us on the scenic{" "}
          <Link href="https://www.instagram.com/coffeebearsilverton/">
            Coffee Bear
          </Link>{" "}
          rooftop for a joyous reunion featuring welcome drinks and small eats.
          All are encouraged to join us!
        </p>
        <ul className={styles.detailList}>
          <li>
            <label>Starts</label>
            <time>5:30 PM</time>
          </li>
          <li>
            <label>Sundown</label>
            <time>7:31 PM</time>
          </li>
          <li>
            <label>Location</label>
            <Link href="https://maps.app.goo.gl/RceECeW6fkU9QcRK7">
              1309 Greene St
            </Link>
            <span>{`(Greene St is the paved road in town)`}</span>
          </li>
          <li>
            <label>Attire</label>
            <span>
              <Link
                href="https://www.google.com/search?q=small+floral+fabric"
                target="_blank"
              >
                Floral
              </Link>{" "}
              <Link
                href="https://www.ruesaintpatrick.com/collections/short-sleeve"
                target="_blank"
              >
                patterns
              </Link>{" "}
              <Link
                href="https://www.gracerosefarm.com/products/juliet"
                target="_blank"
              >
                and
              </Link>{" "}
              <Link href="https://getlemonhead.com/" target="_blank">
                sparkles
              </Link>{" "}
              <Link
                href="https://www.theleathercity.com/product/taylor-swift-1989-world-tour-sequin-jacket/"
                target="_blank"
              >
                are
              </Link>{" "}
              <Link
                href="https://www.google.com/search?q=flower+crown"
                target="_blank"
              >
                encouraged
              </Link>
              <Link
                href="https://hiddenbotanicsweddings.com/products/whimsical-ivy-bridal-crown-with-cream-peonies-gypsohila-babys-breath-wedding-crown"
                target="_blank"
              >
                .
              </Link>
            </span>
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <h2 className={styles.stickySectionHeader}>Saturday | Sept 7, 2024</h2>
        <h3>Nuptials + Jamboree</h3>
        <p>
          We request your assistance committing matrimony.
          <br />
          Please join us for an outdoor ceremony and celebration of our love.
        </p>

        <h4>
          <time>Before</time>: Get out! Have fun.
        </h4>
        <p>
          We have assembled a list of some of{" "}
          <Link href="/play">our favorite spots to play</Link>. Many can be
          accessed right from town. A few others require a short drive or
          earlier start.
        </p>

        <h4>
          Head to Ceremony at <time>3:00 PM</time>
        </h4>
        <p>
          Things always seem to take a bit longer when you are this close to the
          sun.
          <br />
          Plan to be buttoned up in formal attire and heading to the ceremony by
          3:00 PM.
        </p>

        <h4>Nuptials</h4>

        <ul className={styles.detailList}>
          <li>
            <label>Bride</label>
            <span>Julia Richards</span>
          </li>
          <li>
            <label>Groom</label>
            <span>Daniel Powell</span>
          </li>
          <li>
            <label>Officiant</label>
            <span>{`Kaitlyn O'Sullivan`}</span>
          </li>
          <li>
            <label>Tunes</label>
            <span>Six Dollar String Band</span>
          </li>
          <li>
            <label>Starts</label>
            <span>4:00 PM</span>
          </li>
          <li>
            <label>Location</label>
            <span>{`TBA pending approval from federal government (actually)`}</span>
          </li>
          <li>
            <label>Attire</label>
            <span>
              <Link href="https://www.brides.com/cocktail-attire-wedding-4844364">
                Cocktail
              </Link>
            </span>
          </li>
          <li>
            <label>Logistics</label>
            <span>
              Rain or shine, we will be outdoors. Both are considered great
              luck.
              <br />
              We have gotten to the site in a Mazda 3 with ~no clearance but do
              not necessarily recommend. Carpooling is a good idea, especially
              for those who wish to indulge in a pre/post ceremony beverage.
            </span>
          </li>
        </ul>

        <h4>Jamboree</h4>
        <p>
          Following the ceremony the happy couple invites you for an evening
          Jamboree back at the Wyman hotel.
        </p>

        <ul className={styles.detailList}>
          <li>
            <label>
              <time>5:30 PM</time>
            </label>
            <span>Cocktail hour / Mocktail hour</span>
          </li>
          <li>
            <label>
              <time>6:30 PM</time>
            </label>
            <span>Thai food with options for all</span>
          </li>
          <li>
            <label>
              <time>7:30 PM</time>
            </label>
            <span>Toasts and speeches</span>
          </li>
          <li>
            <label>
              <time>8:00 PM</time>
            </label>
            <span>Dancing begins</span>
          </li>
          <li>
            <label>Festivities</label>
            <span>Continue into the night</span>
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <h2 className={styles.stickySectionHeader}>Sunday | Sept 8, 2024</h2>
        <p>
          As the sun rises on the final day of our celebration, we invite you to
          join us for a delightful morning filled with craft coffee and
          reminiscing of the fun we have shared.
        </p>
        <p>
          Precise details to be determined--Dan might make bagels or croissants
          but depends a bit if he is in a fantastic spot to wake up early or
          not--but we should all share some caffeine downstairs at the Wyman
          before we head out back to the real world.
        </p>
      </section>
      <Spacer />
    </main>
  );
}

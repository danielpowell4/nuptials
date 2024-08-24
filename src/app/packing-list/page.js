import styles from "@/app/utils.module.css";
import listStyles from "./packingList.module.css";
import NextLink from "next/link";
import { Link } from "react-aria-components";

export const metadata = {
  title: "Packing List | Julia & Dan",
  description:
    "What to pack and wear for the wedding of Julia & Dan on Sept 7, 2024.",
};

const linkButtonStyles = {
  display: "inline-block",
  padding: "0.5rem 1rem",
  marginBottom: "1.15rem",
  border: "1px solid",
  borderRadius: "4px",
};

export default function PackingList({ params, searchParams }) {
  const isExpanded = searchParams?.details !== "no-thanks";

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1>Packing List</h1>
        <p>
          As long as your bring yourself and have someone watching the critters
          and kiddos and, you {"can't"} go wrong.
        </p>
        <p>
          If we could only pick one word for the weekend we would pick,{" "}
          {`"Celebration"`}. Thankfully though, we {"don't"} live in a world of
          arbitrary one-word limits. So we are leaning into a few like:{" "}
        </p>
        <ul
          className={styles.list}
          style={{ marginTop: "1rem", marginLeft: "2rem" }}
        >
          <li>{`"airy mountain wedding"`}</li>
          <li>{`"happy fancy"`}</li>
          <li>{`"good vibes only", and`}</li>
          <li>{`"fun".`}</li>
        </ul>
      </section>

      <section id="outdoor-clothes" className={styles.section}>
        <h2>Outdoor clothes</h2>
        <h3>Hiking shoes + layers + rain gear</h3>

        {isExpanded ? (
          <NextLink
            style={linkButtonStyles}
            href="?details=no-thanks"
            scroll={false}
            shallow
          >
            Essentials only
          </NextLink>
        ) : (
          <NextLink
            style={linkButtonStyles}
            href="?details=thanks"
            scroll={false}
            shallow
          >
            Expand details
          </NextLink>
        )}

        {isExpanded && (
          <>
            <p>
              You do you! If you want to get out on the early side on Friday,
              Saturday, or Sunday. {"That's"} awesome. If you want to sleep in
              and walk around town, {"that's"} awesome too.
            </p>
            <p>
              Either way, though, September can get chilly and our altitude of
              9,318 ft above sea level can take some getting used to.
            </p>
          </>
        )}
        <h4 className={listStyles.PackItem}>Socks + Undergarments</h4>
        {isExpanded && <p>For under your shoes. Do not forget them.</p>}
        <h4 className={listStyles.PackItem}>Base layer</h4>
        {isExpanded && (
          <p>
            T-shirt and shorts or pants. Check the weather and see what you will
            be comfortable in.
          </p>
        )}
        <h4 className={listStyles.PackItem}>Walking shoes</h4>
        {isExpanded && (
          <p>
            We prefer trail runners / sneakers. If you prefer boots and already
            have them, that will work too.
          </p>
        )}
        <h4 className={listStyles.PackItem}>Extra / mid layer</h4>
        {isExpanded && (
          <p>
            A fleece or flannel or other mid-layer jacket will be a good idea.
            No big puff needed.
          </p>
        )}
        <h4 className={listStyles.PackItem}>Rain jacket / shell</h4>
        {isExpanded && (
          <p>
            We are hoping for sun, but weather can change quickly and you will
            thank yourself for having a rain proof or at least water resistant
            layer to go on top.
          </p>
        )}
      </section>
      <section id="welcome-drinks" className={styles.section}>
        <h2>Sparkles and/or floral patterns</h2>
        <h3>Welcome party fit</h3>
        <p>
          Our <Link href="/schedule#coffee-bear-rooftop">welcome party</Link> is
          all theme is all about the sparkle and the floral.
        </p>
        <p>Glitter will be available if you forget to participate.</p>
        <p>
          The sun will be heading down at 7:31 PM so a light layer is a good
          idea.
        </p>
      </section>
      <section id="cocktail-attire" className={styles.section}>
        <h2>Cocktail attire</h2>
        <h3>Wedding + reception</h3>
        <p>
          It is <em>actually happening.</em>
        </p>
        <p>
          After 10 years, we are saying an official {"'I do'"} and we are
          excited to <strong>celebrate</strong> with you.
        </p>

        <Link href="/schedule#coffee-bear-rooftop">
          View schedule and recommended attire
        </Link>
      </section>

      <section id="cocktail-attire" className={styles.section}>
        <h2>Essential extras</h2>
        <h3>Hydration + sunscreen</h3>
      </section>

      <section id="cocktail-attire" className={styles.section}>
        <h2>Optional extras</h2>
        <h3>swimsuits + books</h3>
      </section>
    </main>
  );
}

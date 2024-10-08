import styles from "@/app/utils.module.css";
import listStyles from "./packingList.module.css";
import NextLink from "next/link";
import { Link } from "react-aria-components";

export const metadata = {
  title: "Packing List",
  description:
    "What to pack and wear for the wedding of Julia & Dan on Sept 7, 2024.",
  openGraph: {
    title: "Packing List",
    description:
      "What to pack and wear for the wedding of Julia & Dan on Sept 7, 2024.",
    images: [
      "https://res.cloudinary.com/dano-photos/image/upload/c_thumb,w_225,h_120,g_face/v1711077535/Screenshot_2024-03-21_at_9.18.37_PM_j93jas.png",
      "https://res.cloudinary.com/dano-photos/image/upload/c_thumb,w_450,h_240,g_face/v1711077535/Screenshot_2024-03-21_at_9.18.37_PM_j93jas.png",
    ],
  },
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
          and kiddos, you {"can't"} go wrong.
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
        <h2>1. Outdoor clothes</h2>
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
            href="?details=yes-please"
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
              and walk around town, {"that's"} stellar too.
            </p>
            <p>
              Either way, though, September can get chilly and our altitude of
              9,318 ft above sea level can take some getting used to.
            </p>
          </>
        )}
        <h4 className={listStyles.PackItem}>Socks + Undergarments</h4>
        {isExpanded && (
          <p>For under your shoes and stuff. Do not forget them.</p>
        )}
        <h4 className={listStyles.PackItem}>Base layer</h4>
        {isExpanded && (
          <p>
            T-shirt and shorts or pants. Check the weather while packing and see
            what you will be comfortable in.
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
        <h2>2. Sparkles and / or floral patterns</h2>
        <h3>Welcome party fit</h3>
        <p>
          Our <Link href="/schedule#coffee-bear-rooftop">welcome party</Link>{" "}
          theme is all about the sparkle and the floral.
        </p>
        {isExpanded ? (
          <>
            <p>
              There will be a spectrum of fancy to casual so do what sounds fun
              for you!
            </p>
            <p>
              Glitter will be available if you forget to participate or need to
              pack light.
            </p>
            <p>
              The sun will be heading down at 7:31 PM so a light layer is a good
              idea.
            </p>
          </>
        ) : (
          <p>See links in schedule for starter inspiration.</p>
        )}
      </section>
      <section id="cocktail-attire" className={styles.section}>
        <h2>3. Cocktail attire</h2>
        <h3>Wedding + reception</h3>

        {isExpanded && (
          <>
            <p>
              It is <em>actually happening.</em>
            </p>
            <p>
              After 10 years, we are saying an official {"'I do'"} and we are
              excited to <strong>celebrate</strong> with you.
            </p>
            <p>
              Our wedding will be on the far fancy side for Silverton. Chacos
              heavily discouraged.{" "}
              <Link
                target="_blank"
                href="https://www.brides.com/cocktail-attire-wedding-4844364"
              >
                A Guide to Cocktail Attire for Men and Women
              </Link>
            </p>
          </>
        )}

        <Link href="/schedule#nuptials">
          View day-of schedule and link for what {"'cocktail'"} means
        </Link>
      </section>

      <section id="cocktail-attire" className={styles.section}>
        <h2>4a. Essential extras</h2>
        <h3>Hydration + sunscreen</h3>
        <h4 className={listStyles.PackItem}>Sunglasses</h4>
        {isExpanded && (
          <p>You will be close to the sun. Squinting is not your best look.</p>
        )}
        <h4 className={listStyles.PackItem}>Electrolytes</h4>
        {isExpanded && (
          <p>
            Some kinds have sugar. Some kinds are most salt. Both are good to
            actually be hydrated.
          </p>
        )}
        <h4 className={listStyles.PackItem}>Tasty snacks</h4>
        {isExpanded && (
          <p>The kind you will actually eat. Ideally with real sustenance.</p>
        )}
      </section>

      <section id="cocktail-attire" className={styles.section}>
        <h2>4b. Optional extras</h2>
        <h3>Stuff you might want but are not required to bring</h3>
        <h4 className={listStyles.PackItem}>Mineral-based sunscreen</h4>
        {isExpanded && (
          <p>
            Most of us should cover up with at least some sun screen. Zinc works
            but does not have to be how you sun block.
          </p>
        )}
        <h4 className={listStyles.PackItem}>Swimsuit</h4>
        {isExpanded && (
          <p>Silverton does not have a hot spring but all our neighbors do.</p>
        )}
        <h4 className={listStyles.PackItem}>Book(s)</h4>
        {isExpanded && (
          <p>
            You can read! Maybe you will want to on the plane or as you wind
            down from a day of festivities?
          </p>
        )}
        <h4 className={listStyles.PackItem}>Toys / belly rubs for Oslo</h4>
        {isExpanded && (
          <p>
            Our dog is spoiled. But he is not yet rotten. A little extra love
            would not hurt before his parents abandon him for their honeymoon.
          </p>
        )}
      </section>
    </main>
  );
}

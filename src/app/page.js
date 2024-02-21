import styles from "@/app/utils.module.css";
import homeStyles from "./page.module.css";

import Countdown from "@/components/Countdown";
import { Link } from "react-aria-components";
import { CldImage, Spacer } from "@/components";

export default function Home() {
  return (
    <main className={styles.main}>
      <div style={{ textAlign: "center", margin: "2rem auto" }}>
        <Countdown
          title="Count down to Sept 7, 2024"
          until={"2024-09-07T23:00:00.000Z"}
        />
        <Countdown
          title="Count up from May 1, 2014"
          until={"2014-05-02T00:00:00.000Z"}
        />
      </div>
      <p>
        Julia Marie and Daniel Micah are giddy to invite you to join us as we
        celebrate our first 10 years together and our next 10,000 years to come.
      </p>
      <section className={homeStyles.section}>
        <h2 className={styles.stickySectionHeader}>{`How it started`}</h2>
        <p>
          Unofficially it started sometime in the spring of 2013 at a Head in
          the Heart concert. Dan asked Julia if she wanted to dance and then
          promptly ran away {`(thinking she'd follow)`}. She says she did but
          Dan was too fast.
        </p>
        <iframe
          style={{ borderRadius: 12, marginBottom: "1.15rem" }}
          src="https://open.spotify.com/embed/track/3z7kvwJVRfA4HCOfm9ngog?utm_source=generator"
          width="100%"
          height="152"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <p>
          Officially it started in the lead up to a sorority formal on May 1,
          2014. Julia was fresh off a breakup and in search of a date. Dan was
          about to graduate and insisted he was going to move to Portland in a
          few weeks. Dan, who did not know her name, said {`"yes"`} across a
          long table of folks he was tutoring in the DU chem center.
        </p>
        <div style={{ display: "flex", gap: "1.15rem", flexFlow: "row wrap" }}>
          <CldImage
            width={254}
            height={341}
            crop="fit"
            sizes="100vw"
            alt={`first-date-1`}
            style={{ border: "2px solid var(--hr)", borderRadius: "1rem" }}
            responsive
            src={`https://res.cloudinary.com/dano-photos/image/upload/v1705262564/F013D4F7-07B1-44B7-A88D-4264CCA26F2C_1_105_c_lwlmwb.jpg`}
          />
          <CldImage
            width={254}
            height={341}
            crop="fit"
            sizes="100vw"
            gravity="auto"
            alt={`first-date-2`}
            style={{ border: "2px solid var(--hr)", borderRadius: "1rem" }}
            src={`https://res.cloudinary.com/dano-photos/image/upload/v1705261123/25082137-6481-404A-AB89-2A6BE9256B2D_1_105_c_ujrzai.jpg`}
          />
        </div>
        <small>
          First date pictures: <date>May 1, 2014</date>
        </small>
      </section>
      <section className={homeStyles.section}>
        <h2 className={styles.stickySectionHeader}>{`How it's going`}</h2>
        <p>Pretty swell!</p>
        <p>
          Shortly after moving in together at DU, we got a dog. Beacon has since
          completed the Colorado Trail, skied off the seven summits and
          collected an ample amount of butter off the counter.
        </p>{" "}
        <CldImage
          width={260}
          height={260}
          crop="fill"
          sizes="100vw"
          gravity="auto"
          alt={`beacon`}
          style={{ border: "2px solid var(--hr)", borderRadius: "1rem" }}
          src={`https://res.cloudinary.com/dano-photos/image/upload/v1705262061/757BD521-54D4-46E5-95C9-2ACF8D09CFBC_1_105_c_wbcg9b.jpg`}
        />
        <p>
          {`We spent a few years in Denver's Cap Hill neighborhood loading up the car with everything we owned and crashing at Tim's place in Summit on many-a-weekend.`}
        </p>
        <p>
          In 2019, Dan wanted to be a tech star and move to SF. Julia had better
          plans and wanted to explore a life in the mountains. We planned to
          rent in Silverton {`"for 6 months"`} having never come here together.
          In 2022, we bought a place.
        </p>
        <p>
          In 2023, we got a second dog and Dan proposed at{" "}
          <Link href="/stuff-to-do/columbine-lake">Columbine Lake.</Link>
        </p>
        <div
          style={{
            display: "flex",
            overflow: "scroll",
            gap: "1.15rem",
            flexFlow: "row wrap",
          }}
        >
          <CldImage
            width={280}
            height={280}
            crop="fill"
            gravity="auto"
            alt={`oslo`}
            style={{ border: "2px solid var(--hr)", borderRadius: "1rem" }}
            src={`https://res.cloudinary.com/dano-photos/image/upload/v1705260338/D326C48C-F195-4618-8113-CD5ACFAA27EA_1_105_c_xcmcc4.jpg`}
          />

          <CldImage
            width={280}
            height={280}
            crop="fill"
            gravity="auto"
            alt={`proposal`}
            quality={100}
            style={{ border: "2px solid var(--hr)", borderRadius: "1rem" }}
            src={`https://res.cloudinary.com/dano-photos/image/upload/v1705260585/4B081961-9074-451A-9818-7BAE33A2A397_1_105_c_aqtnq6.jpg`}
          />
        </div>
      </section>
      <section className={homeStyles.section}>
        <h2 className={styles.stickySectionHeader}>{`What to expect`}</h2>
        <h3>
          <Link href="/getting-here">
            <span role="img" aria-label="Burro + Train + Jet">
              🫏 🚂 🛩️
            </span>{" "}
            Getting Here
          </Link>
        </h3>
        <p>
          Silverton, Colo is far away from everything. Though often inconvenient
          that is sort of the point. We recommend flying into{" "}
          <Link href="/getting-here#DGO">Durango</Link> or{" "}
          <Link href="/getting-here#MTJ">Montrose</Link> or driving in from the
          front range and stopping a few times along the way.
        </p>
        <h3>
          <Link href="/lodging">
            <span role="img" aria-label="Tent + House + Hotel">
              🏕️ 🏡 🏨
            </span>{" "}
            Where to Stay
          </Link>
        </h3>
        <p>
          We are stoked that our friends at the Wyman have created a beautiful
          haven just a few blocks from our place. We recommend grabbing a room
          while they last and checking out the bunk room for an extra good time.
        </p>
        <h3>
          <Link href="/stuff-to-do">
            <span role="img" aria-label="Dogs in Mountains">
              🐕 🏔️ 🐕‍🦺
            </span>{" "}
            Where to Play
          </Link>
        </h3>
        <p>
          The outdoors hold a special place in our heart. You can start and end
          a legendary 100-mile course from town. You can also enjoy a local
          park, river front or mountain drive.
        </p>
        <h3>
          <Link href="/schedule">
            <span role="img" aria-label="Clipboard + Ring + Disco">
              📋 💍 🪩
            </span>{" "}
            Schedule of Events
          </Link>
        </h3>
        <p>
          First official event is on Friday, September 6, 2024 with the nuptials
          and jamboree on September 7, 2024. If you are unsure if you have a +1,
          text us. You probably do.
        </p>
      </section>
      <section className={homeStyles.section}>
        <h2 className={styles.stickySectionHeader}>What We Need from You</h2>
        <h3>RSVP: Your Key to Joining the Celebration</h3>
        <p>
          Your response is essential for ensuring everything goes smoothly. We
          need you to RSVP!
        </p>

        <p>
          <strong>RSVP by [Date]:</strong>
          <br />
          <span>
            Please let us know if you will be able to join us by [specific
            date]. This will help us ensure you have a spot on the dance floor.
            Also please do not wait until the last day. Sooner-is-better!
          </span>
        </p>
        <p>
          <strong>How to RSVP:</strong>
          <br />
          <span>
            We coded up <Link href="/rsvp">this little a form</Link> as Dan was
            feeling extra.
          </span>
        </p>
        <p>
          <strong>Questions?</strong>
          <br />
          <span>
            Call or text us so we can fill you in on any missing details.
          </span>
        </p>
      </section>
      <section className={homeStyles.section}>
        <p>We are looking forward to celebrating with each of you.</p>

        <p>
          To the moon and back,
          <br />
          Dan and Julia
        </p>
      </section>

      <Spacer />
    </main>
  );
}

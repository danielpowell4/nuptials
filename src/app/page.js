import styles from "@/app/utils.module.css";
import homeStyles from "./page.module.css";

import Countdown from "@/components/Countdown";
import { Link } from "react-aria-components";
import { CldImage, LinkButton } from "@/components";

export default function Home() {
  return (
    <>
      <div className={homeStyles.hero}>
        <div className={homeStyles.hero__row1}>
          <div className={homeStyles.hero__copy}>
            <h1>{`You're invited!`}</h1>
            <p>
              Julia Marie and Daniel Micah are giddy to invite you to join us in
              the celebration of our first 10 years together and our next 10,000
              years to come.
            </p>
            <div style={{ margin: "2rem 0" }}>
              <Countdown
                title="Count down to Sept 7, 2024"
                until={"2024-09-07T23:00:00.000Z"}
              />
            </div>
            <div style={{ display: "flex", gap: "2rem", flexFlow: "row wrap" }}>
              <LinkButton href="#how-it-started">{`Story time`}</LinkButton>
              <LinkButton href="#what-we-need-from-you">{`RSVP`}</LinkButton>
            </div>
          </div>
          <CldImage
            src={
              "https://res.cloudinary.com/dano-photos/image/upload/v1711077536/Screenshot_2024-03-21_at_9.18.05_PM_ccl3ym.png"
            }
            width={720}
            height={568}
            crop="fill"
            gravity="auto"
            sizes="80vw"
            quality={100}
            alt={`Serious time in McMillan Meadows`}
            className={homeStyles.heroImg}
            responsive
          />
        </div>

        <div className={homeStyles.hero__row2}>
          <CldImage
            src={
              "https://res.cloudinary.com/dano-photos/image/upload/v1711077444/Screenshot_2024-03-21_at_9.07.17_PM_mg50ek.png"
            }
            width={800}
            height={568}
            crop="fill"
            gravity="auto"
            sizes="50vw"
            alt={`Spin by the lake`}
            className={homeStyles.heroImg}
            responsive
          />

          <CldImage
            src={
              "https://res.cloudinary.com/dano-photos/image/upload/v1711077446/Screenshot_2024-03-21_at_9.06.27_PM_eech00.png"
            }
            width={378}
            height={568}
            crop="fill"
            gravity="auto"
            sizes="50vw"
            alt={`All smiles and laughing`}
            className={homeStyles.heroImg}
            responsive
          />
        </div>

        <div className={homeStyles.hero__row2}>
          <CldImage
            src={
              "https://res.cloudinary.com/dano-photos/image/upload/v1705341146/Nuptials/Screenshot_2024-01-15_at_10.52.20_AM_nl0c5o.png"
            }
            width={378}
            height={568}
            crop="fill"
            gravity="auto"
            sizes="50vw"
            alt={`Smiles over Chattanooga`}
            className={homeStyles.heroImg}
            responsive
          />

          <CldImage
            src={
              "https://res.cloudinary.com/dano-photos/image/upload/v1711077535/Screenshot_2024-03-21_at_9.18.37_PM_j93jas.png"
            }
            width={800}
            height={568}
            crop="fill"
            gravity="auto"
            sizes="50vw"
            alt={`Dancing in McMillan Meadows`}
            className={homeStyles.heroImg}
            responsive
          />
        </div>
      </div>

      <main className={styles.main}>
        <section className={homeStyles.section} id="how-it-started">
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
          <div
            style={{ display: "flex", gap: "1.15rem", flexFlow: "row wrap" }}
          >
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
            First date pictures on <date>May 1, 2014</date>. A whole{" "}
            <Countdown until={"2014-05-02T00:00:00.000Z"} inline />
            ago
          </small>
        </section>
        <section className={homeStyles.section} id="how-its-going">
          <h2 className={styles.stickySectionHeader}>{`How it's going`}</h2>
          <p>Pretty swell!</p>
          <p>
            Shortly after moving in together at DU, we got a dog. Beacon has
            since completed the Colorado Trail, skied off the seven summits and
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
            In 2019, Dan wanted to be a tech star and move to SF. Julia had
            better plans and wanted to explore a life in the mountains. We
            planned to rent in Silverton {`"for 6 months"`} having never come
            here together. In 2022, we bought a place.
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
        <section className={homeStyles.section} id="what-to-expect">
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
            Silverton, Colo is far away from everything. Though often
            inconvenient that is sort of the point. We recommend flying into{" "}
            <Link href="/getting-here#DGO">Durango</Link> or{" "}
            <Link href="/getting-here#MTJ">Montrose</Link> or driving in from
            the front range and stopping a few times along the way.
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
            while they last and checking out the bunk room for an extra good
            time.
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
            The outdoors hold a special place in our heart. You can start and
            end a legendary 100-mile course from town. You can also enjoy a
            local park, river front or mountain drive.
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
            First official event is on Friday, September 6, 2024 with the
            nuptials and jamboree on September 7, 2024. If you are unsure if you
            have a +1, text us. You probably do.
          </p>
        </section>
        <section className={homeStyles.section} id="what-we-need-from-you">
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
              date]. This will help us ensure you have a spot on the dance
              floor. Also please do not wait until the last day.
              Sooner-is-better!
            </span>
          </p>
          <p>
            <strong>How to RSVP:</strong>
            <br />
            <span>
              We coded up <Link href="/rsvp">this little a form</Link> as Dan
              was feeling extra.
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
      </main>
      <section style={{ display: "flex", gap: "1rem", overflow: "scroll" }}>
        {[
          "https://res.cloudinary.com/dano-photos/image/upload/v1711077443/Screenshot_2024-03-21_at_9.07.40_PM_evihbu.png",
          "https://res.cloudinary.com/dano-photos/image/upload/v1711077443/Screenshot_2024-03-21_at_9.07.49_PM_fgpdyz.png",
          "https://res.cloudinary.com/dano-photos/image/upload/v1711077443/Screenshot_2024-03-21_at_9.07.58_PM_djppcq.png",
          "https://res.cloudinary.com/dano-photos/image/upload/v1711077443/Screenshot_2024-03-21_at_9.08.09_PM_dztdss.png",
          "https://res.cloudinary.com/dano-photos/image/upload/v1711077443/Screenshot_2024-03-21_at_9.08.24_PM_qee5ja.png",

          "https://res.cloudinary.com/dano-photos/image/upload/v1711077443/Screenshot_2024-03-21_at_9.07.40_PM_evihbu.png",
          "https://res.cloudinary.com/dano-photos/image/upload/v1711077443/Screenshot_2024-03-21_at_9.07.49_PM_fgpdyz.png",
          "https://res.cloudinary.com/dano-photos/image/upload/v1711077443/Screenshot_2024-03-21_at_9.07.58_PM_djppcq.png",
          "https://res.cloudinary.com/dano-photos/image/upload/v1711077443/Screenshot_2024-03-21_at_9.08.09_PM_dztdss.png",
          "https://res.cloudinary.com/dano-photos/image/upload/v1711077443/Screenshot_2024-03-21_at_9.08.24_PM_qee5ja.png",

          "https://res.cloudinary.com/dano-photos/image/upload/v1711077443/Screenshot_2024-03-21_at_9.07.40_PM_evihbu.png",
          "https://res.cloudinary.com/dano-photos/image/upload/v1711077443/Screenshot_2024-03-21_at_9.07.49_PM_fgpdyz.png",
          "https://res.cloudinary.com/dano-photos/image/upload/v1711077443/Screenshot_2024-03-21_at_9.07.58_PM_djppcq.png",
          "https://res.cloudinary.com/dano-photos/image/upload/v1711077443/Screenshot_2024-03-21_at_9.08.09_PM_dztdss.png",
          "https://res.cloudinary.com/dano-photos/image/upload/v1711077443/Screenshot_2024-03-21_at_9.08.24_PM_qee5ja.png",
        ].map((src, champagneIndex) => (
          <CldImage
            key={champagneIndex}
            src={src}
            width={280}
            height={380}
            crop="fill"
            gravity="auto"
            sizes="20vw"
            alt={`Sequence ${
              champagneIndex + 1
            } of 5 of Julia spraying Dan with champagne`}
            style={{ border: "2px solid var(--hr)", borderRadius: "1rem" }}
          />
        ))}
      </section>
    </>
  );
}

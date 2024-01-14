import styles from "@/app/utils.module.css";
import homeStyles from "./page.module.css";

import Countdown from "@/components/Countdown";
import { Link } from "react-aria-components";
import { CldImage } from "@/components";

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
        Julia Marie and Daniel Micah are overjoyed to invite you to join us as
        we celebrate our first 10 years together and our next 10,000 years to
        come.
      </p>
      <h2>{`How it started`}</h2>
      <p>
        Unofficially it started sometime in the spring of 2013 at a Head in the
        Heart concert. Dan asked Julia if she wanted to dance and then promptly
        ran away {`(thinking she'd follow)`}. She says she did but Dan was too
        fast.
      </p>
      <p>
        Officially it started in the lead up to a sorority formal on May 1,
        2014. Julia was fresh off a breakup and in search of a date. Dan was
        about to graduate and insisted he was going to move to Portland in a few
        weeks. Dan, who did not know her name, said {`"yes"`} across a long
        table of folks he was tutoring in the DU chem center.
      </p>
      <CldImage width={400} height={400} crop="fill"sizes="100vw" gravity="auto" alt={`first-date`} src={`https://res.cloudinary.com/dano-photos/image/upload/v1705262564/F013D4F7-07B1-44B7-A88D-4264CCA26F2C_1_105_c_lwlmwb.jpg`} />
  
      <h2>{`How it's going`}</h2>
      <p>Pretty swell!</p>
      <p>Shortly after moving in together at DU, we got a dog.</p> <CldImage width={400} height={400} crop="fill"sizes="100vw" gravity="auto" alt={`beacon`} src={`https://res.cloudinary.com/dano-photos/image/upload/v1705262061/757BD521-54D4-46E5-95C9-2ACF8D09CFBC_1_105_c_wbcg9b.jpg`} />
      <p>
        {`Then we spent another couple years in Denver's Cap Hill neighborhood loading up the car with everything we owned and crashing at Tim's place in Summit on the weekends.`}
      </p>
      <p>
        In 2019, Dan wanted to be a tech star and move to SF. Julia had better
        plans and wanted to explore a life in the mountains.
      </p>
      <p>
        We planned to rent in Silverton {`"for 6 months"`} having never come
        here together. In 2022, we bought a place.
      </p>
      <p>In 2023, we got another dog.</p> <CldImage width={400} height={400} crop="fill"sizes="100vw" gravity="auto" alt={`oslo`} src={`https://res.cloudinary.com/dano-photos/image/upload/v1705260338/D326C48C-F195-4618-8113-CD5ACFAA27EA_1_105_c_xcmcc4.jpg`} />
      <p>Dan proposed.</p> <CldImage width={400} height={400} crop="fill"sizes="100vw" gravity="auto" alt={`proposal`} src={`https://res.cloudinary.com/dano-photos/image/upload/v1705260585/4B081961-9074-451A-9818-7BAE33A2A397_1_105_c_aqtnq6.jpg`} />

      <h2>{`What to expect`}</h2>
      <h3>
        <Link href="/getting-here">
          <span role="img" aria-label="Train">
            🫏🚂🛩️
          </span>{" "}
          Getting Here
        </Link>
      </h3>
      <p>
        Silverton, Colo is far away from everything. Though often inconvenient
        that is sort of the point.
      </p>
      <h3>
        <Link href="/getting-here">
          <span role="img" aria-label="Tent">
            🏕️🏡🏨
          </span>{" "}
          Where to Stay
        </Link>
      </h3>
      <p>We are stoked that our friends at the Wyman.</p>
      <h3>
        <Link href="/getting-here">
          <span role="img" aria-label="Dogs in Mountains">
            🐕🏔️🐕‍🦺
          </span>{" "}
          Where to Play
        </Link>
      </h3>
      <h3>
        <Link href="/getting-here">📋 Schedule of Events</Link>
      </h3>
      <h2>What we need from you</h2>
      RSVP
    </main>
  );
}

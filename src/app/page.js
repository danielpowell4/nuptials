import styles from "@/app/utils.module.css";
import homeStyles from "./page.module.css";

import Countdown from "@/components/Countdown";
import { Link } from "react-aria-components";

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
      <h2>{`How it's going`}</h2>
      <p>Pretty swell!</p>
      <p>Shortly after moving in together at DU, we got a dog.</p>
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
      <p>In 2023, we got another dog.</p>
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

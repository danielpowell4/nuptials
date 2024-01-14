import { Link } from "react-aria-components";

import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/dev">Home</Link>
        </li>
        <li>
          <Link href="/dev/getting-here">Traveling</Link>
        </li>
        <li>
          <Link href="/dev/lodging">Sleeping</Link>
        </li>
        <li>
          <Link href="/dev/stuff-to-do">Playing</Link>
        </li>
        <li>
          <Link href="/dev/schedule">Schedule</Link>
        </li>
        <li>
          <Link
            href="https://withjoy.com/julia-and-dan-eclr2u0s9o002n01zlaa5t1k0ps/registry"
            target="_blank"
          >
            Registry
          </Link>
        </li>
        <li>
          <Link href="/dev/rsvp">RSVP</Link>
        </li>
      </ul>
    </nav>
  );
}

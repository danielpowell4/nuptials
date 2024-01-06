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
          <Link href="/dev/pizza-and-breweries">Eating</Link>
        </li>
        <li>
          <Link href="/dev/stuff-to-do">Playing</Link>
        </li>
        <li>
          <Link href="/dev/schedule">Schedule</Link>
        </li>
        <li>
          <Link href="/dev/registry">Registry</Link>
        </li>
        <li>
          <Link href="/dev/rsvp">RSVP</Link>
        </li>
      </ul>
    </nav>
  );
}

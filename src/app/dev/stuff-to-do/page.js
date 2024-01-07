import styles from "./Activities.module.css";
import utilStyles from "@/app/utils.module.css";

import NextLink from "next/link";
import { parameterize } from "./utils";
import ActivityCategory from "./ActivityCategory";

const categories = [
  "From Door",
  "Lakes",
  "Peaks",
  "Notable Mentions",
  "Funnel Cakes",
].map((name) => ({ name, id: parameterize(name) }));

export default function Activities() {
  const activeServiceIndex = 0; // TODO: move me to state

  return (
    <div className={styles.pageWrap}>
      <section className={utilStyles.section}>
        <h1>Stuff to do</h1>
      </section>

      <div className={styles.scrollContainer}>
        <aside className={styles.scrollContainer__aside}>
          <nav className={styles.sectionNav}>
            <ul id="categoryLinkList">
              {categories.map(({ id, name }, categoryIndex) => (
                <li key={id} data-section-id={id}>
                  <NextLink
                    href={`#${id}`}
                    scroll={false}
                    className={[
                      styles.sectionNav__link,
                      categoryIndex === activeServiceIndex &&
                        styles.sectionNav__linkActive,
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {name}
                  </NextLink>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className={styles.main}>
          {categories.map((category) => (
            <ActivityCategory category={category} key={category.id} />
          ))}
        </main>
      </div>
    </div>
  );
}

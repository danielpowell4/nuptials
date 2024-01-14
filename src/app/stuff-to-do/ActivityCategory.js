import styles from "./ActivityCategory.module.css";

import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());

import { CldImage } from "@/components";
import { Link } from "react-aria-components";

const ActivityCategory = ({ category }) => {
  const { data, error, isLoading } = useSWR(
    "/api/activities/byCategory?categoryName=" + category.name,
    fetcher
  );

  return (
    <section id={`${category.id}`} ref={category.ref}>
      <h2>{category.name}</h2>

      {isLoading && <p>Loading...</p>}

      {error && <p>Failed to load activities.</p>}

      {data?.activities && (
        <div className={styles.ActivityGrid}>
          {data.activities.map((activity) => (
            <div className={styles.ActivityCard} key={activity.slug}>
              {activity.primary_url ? (
                <CldImage
                  width="360"
                  height="180"
                  src={activity.primary_url}
                  alt={`Sneak peek of ${activity.name}`}
                  crop="fill"
                  sizes="100vw"
                  gravity="auto"
                  style={{
                    border: "1px solid var(--hr)",
                    borderRadius: "4px",
                  }}
                />
              ) : (
                <div
                  style={{
                    backgroundColor: "var(--hr)",
                    width: 360,
                    height: 180,
                  }}
                />
              )}
              <h3>{activity.name}</h3>
              <Link href={`/stuff-to-do/${activity.slug}`}>View details</Link>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ActivityCategory;

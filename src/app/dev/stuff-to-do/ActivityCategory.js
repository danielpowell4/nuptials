import { Suspense } from "react";

import styles from "./ActivityCategory.module.css";

import { getCategoryActivities } from "./utils";

import { CldImage } from "@/components";
import { Link } from "react-aria-components";

const ActivityCategory = async ({ category }) => {
  const activities = await getCategoryActivities(category.name);

  return (
    <section id={`#${category.id}`}>
      <h2>{category.name}</h2>
      <Suspense fallback={"Loading..."}>
        <div className={styles.ActivityGrid}>
          {activities.map((activity) => (
            <div className={styles.ActivityCard} key={activity.slug}>
              {activity.primary_url ? (
                <CldImage
                  width="360"
                  height="180"
                  src={activity.primary_url}
                  alt="Description of my image"
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
              <Link href={`/dev/stuff-to-do/${activity.slug}`}>
                View details
              </Link>
            </div>
          ))}
        </div>
      </Suspense>
    </section>
  );
};

export default ActivityCategory;

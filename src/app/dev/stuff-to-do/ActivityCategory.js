import styles from "./ActivityCategory.module.css";

import { Link } from "react-aria-components";
import { getCategoryActivities } from "./utils";

const { Suspense } = require("react");

const ActivityCard = ({ activity }) => {
  return (
    <div className={styles.ActivityCard}>
      <h3>{activity.name}</h3>
      <Link href={`/dev/stuff-to-do/${activity.slug}`}>View details</Link>
    </div>
  );
};

const ActivityCategory = async ({ category }) => {
  const activities = await getCategoryActivities(category.name);

  return (
    <section id={`#${category.id}`}>
      <h2>{category.name}</h2>
      <Suspense fallback={"Loading..."}>
        <div className={styles.ActivityGrid}>
          {activities.map((activity) => (
            <ActivityCard key={activity.name} activity={activity} />
          ))}
        </div>
      </Suspense>
    </section>
  );
};

export default ActivityCategory;

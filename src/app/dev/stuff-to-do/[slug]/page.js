import styles from "./ActivityPage.module.css";
import utilStyles from "@/app/utils.module.css";

import { Breadcrumb, Link } from "react-aria-components";
import { Breadcrumbs } from "@/components";
import { getActivityData, getAllActivitySlugs, parameterize } from "../utils";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const slug = params.slug;
  const activity = await getActivityData(slug);
  if (!activity) return {};

  return { title: activity.name, description: activity.description };
}

export async function generateStaticParams() {
  const slugs = getAllActivitySlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ActivityPage({ params: { slug } }) {
  const activity = await getActivityData(slug);
  if (!activity) {
    return notFound();
  }

  return (
    <Suspense fallback={"Loading..."}>
      <div className={styles.pageWrap}>
        <Breadcrumbs>
          <Breadcrumb>
            <Link href="/dev/stuff-to-do">Playing</Link>
          </Breadcrumb>
          <Breadcrumb>
            <Link href={`/dev/stuff-to-do#${parameterize(activity.category)}`}>
              {activity.category}
            </Link>
          </Breadcrumb>
          <Breadcrumb>
            <Link>{activity.name}</Link>
          </Breadcrumb>
        </Breadcrumbs>
        <main className={styles.main}>
          <h1>{activity.name}</h1>
          <div dangerouslySetInnerHTML={{ __html: activity.contentHtml }} />
        </main>
      </div>
    </Suspense>
  );
}

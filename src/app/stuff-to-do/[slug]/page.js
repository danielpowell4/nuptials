import styles from "./ActivityPage.module.css";
import utilStyles from "@/app/utils.module.css";

import { Breadcrumb, Link } from "react-aria-components";
import { Breadcrumbs, CldImage } from "@/components";
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
            <Link href="/stuff-to-do">Playing</Link>
          </Breadcrumb>
          <Breadcrumb>
            <Link href={`/stuff-to-do#${parameterize(activity.category)}`}>
              {activity.category}
            </Link>
          </Breadcrumb>
          <Breadcrumb>
            <Link>{activity.name}</Link>
          </Breadcrumb>
        </Breadcrumbs>
        <main className={styles.main}>
          <h1>{activity.name}</h1>

          <div
            style={{
              display: "flex",
              flexFlow: "row wrap",
              gap: "2rem",
              marginBottom: "2rem",
            }}
          >
            {activity.primary_url ? (
              <CldImage
                src={activity.primary_url}
                height={400}
                width={800}
                crop="fill"
                gravity="auto"
              />
            ) : null}

            <pre>TODO: drop in map</pre>
          </div>

          <div dangerouslySetInnerHTML={{ __html: activity.contentHtml }} />
        </main>
      </div>
    </Suspense>
  );
}

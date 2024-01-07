import { Link } from "react-aria-components";
import { getActivityData, getAllActivitySlugs } from "../utils";

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
    <>
      <div className={"breadcrumbs"}>
        <Link href="/gallery">Playing</Link>
        <Link href="/gallery">Playing</Link>
        <Link href={`/gallery/${activity.slug}`}>{activity.name}</Link>
      </div>
      <pre>{JSON.stringify(activity)}</pre>
    </>
  );
}

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import toPlainText from "remark-plain-text";

const activitiesDirectory = path.join(
  process.cwd(),
  "src/app/stuff-to-do/activities"
);

export function getAllActivitySlugs() {
  const fileNames = fs.readdirSync(activitiesDirectory);
  const activityFiles = fileNames.filter((name) => name.endsWith(".md"));
  return activityFiles.map((name) => name.replace(/\.md$/, ""));
}

export async function getActivityData(slug) {
  const fullPath = path.join(activitiesDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  const plainDescription = await remark()
    .use(toPlainText)
    .process(matterResult.content);
  let description = plainDescription.toString();
  if (description.length > 120) {
    description = `${description.slice(0, 117)}...`;
  }

  // Combine the data with the id and contentHtml
  return {
    slug,
    contentHtml,
    description,
    ...matterResult.data,
  };
}

export async function getCategoryActivities(categoryName) {
  const allSlugs = getAllActivitySlugs();
  const allActivities = await Promise.all(
    allSlugs.map((slug) => getActivityData(slug))
  );

  return allActivities
    .filter((activity) => activity.category === categoryName)
    .sort((a, b) => a.position - b.position);
}

export const parameterize = (string) =>
  string.toLowerCase().replace(/\s/g, "-");

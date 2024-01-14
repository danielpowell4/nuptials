import { getCategoryActivities } from "@/app/stuff-to-do/utils";
import { NextResponse } from "next/server";

export async function GET(request) {
  const url = new URL(request.url);
  const searchParams = url.searchParams;

  const categoryName = searchParams?.get("categoryName");
  if (!categoryName) {
    return NextResponse.json(
      { error: "Missing categoryName search param" },
      { status: 400 }
    );
  }

  let activities = await getCategoryActivities(categoryName);

  return NextResponse.json({ activities }, { status: 200 });
}

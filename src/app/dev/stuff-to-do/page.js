"use client";

import * as React from "react";
import useIntersectionObserver from "@react-hook/intersection-observer";

import styles from "./Activities.module.css";
import utilStyles from "@/app/utils.module.css";

import NextLink from "next/link";
import { useSearchParams } from "next/navigation";

import ActivityCategory from "./ActivityCategory";

const intersectionObsOptions = {
  threshold: [0.05, 0.1, 0.2, 0.25, 0.5, 0.75, 0.8, 0.9, 0.95],
};

export default function Activities() {
  // watch navigation
  const searchParams = useSearchParams();
  const navigatingToRef = React.useRef();
  React.useEffect(() => {
    const [, navId] = (window?.location?.hash ?? "").split("#");
    navigatingToRef.current = navId;
  }, [searchParams]);

  // section refs
  const fromDoorRef = React.useRef();
  const lakesRef = React.useRef();
  const peaksRef = React.useRef();
  const mentionsRef = React.useRef();
  const funnelCakesRef = React.useRef();

  // section observers
  const fromDoorObserver = useIntersectionObserver(fromDoorRef, {
    ...intersectionObsOptions,
    initialIsIntersecting: true, // for SSR
  });
  const lakesObserver = useIntersectionObserver(
    lakesRef,
    intersectionObsOptions
  );
  const peaksObserver = useIntersectionObserver(
    peaksRef,
    intersectionObsOptions
  );
  const mentionsObserver = useIntersectionObserver(
    mentionsRef,
    intersectionObsOptions
  );
  const funnelCakesObserver = useIntersectionObserver(
    funnelCakesRef,
    intersectionObsOptions
  );

  const allObservers = [
    fromDoorObserver,
    lakesObserver,
    peaksObserver,
    mentionsObserver,
    funnelCakesObserver,
  ];
  const [activeCategoryIndex] = allObservers.reduce(
    ([maxIndex, maxRatio], observer, index) => {
      if (observer.intersectionRatio > maxRatio) {
        return [index, observer.intersectionRatio];
      }
      return [maxIndex, maxRatio];
    },
    [-1, 0]
  );

  const categories = [
    {
      id: "from-door",
      name: "From Door",
      ref: fromDoorRef,
    },
    {
      id: "lakes",
      name: "Lakes",
      ref: lakesRef,
    },
    {
      id: "peaks",
      name: "Peaks",
      ref: peaksRef,
    },
    {
      id: "notable-mentions",
      name: "Notable Mentions",
      ref: mentionsRef,
    },
    {
      id: "funnel-cakes",
      name: "Funnel Cakes",
      ref: funnelCakesRef,
    },
  ];

  React.useEffect(() => {
    const activeId = [
      "from-door",
      "lakes",
      "peaks",
      "notable-mentions",
      "funnel-cakes",
    ][activeCategoryIndex];
    if (!activeId) return;

    let scrollToTimeoutMs = 0;
    if (navigatingToRef.current) {
      scrollToTimeoutMs = 200;

      if (navigatingToRef.current === activeId) {
        // made it!
        navigatingToRef.current = null;
      } else {
        // skip... on journey to another section
        return;
      }
    }

    const container = document.getElementById("categoryLinkList");
    const containerOffset = container.offsetLeft;
    const sectionLink = container.querySelector(
      `[data-section-id="${activeId}"]`
    );
    let timeout;
    if (sectionLink) {
      timeout = setTimeout(
        () => container.scrollTo(sectionLink.offsetLeft - containerOffset, 0),
        scrollToTimeoutMs // wait for scroll to finish
      );
    }

    return () => timeout && clearTimeout(timeout);
  }, [activeCategoryIndex]);

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
                    scroll
                    className={[
                      styles.sectionNav__link,
                      categoryIndex === activeCategoryIndex &&
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

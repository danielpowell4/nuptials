import styles from "@/app/utils.module.css";

export const metadata = {
  title: "Stuff to Do | Julia & Dan",
  description:
    "Where to stay in Silverton, CO for the wedding of Julia & Dan on Sept 7, 2024.",
};

const activities = [
  {
    name: "Dolores LaChapelle Park",
    description: "From our front door to Silverton, CO",
    category: "From Door",
  },
  {
    name: "Bakers Park Trail",
    description: "From our front door to Silverton, CO",
    category: "From Door",
  },
  {
    name: "Anvil Flagpole",
    description: "From our front door to Silverton, CO",
    category: "From Door",
  },
  {
    name: "Shrine of the Mines",
    description: "From our front door to Silverton, CO",
    category: "From Door",
  },
  {
    name: "Kendall Lift Line",
    description: "From our front door to Silverton, CO",
    category: "From Door",
  },
  {
    name: "Fairy Trail",
    description: "From our front door to Silverton, CO",
    category: "From Door",
  },
  {
    name: "Rabbit Ears to Idaho",
    description: "From our front door to Silverton, CO",
    category: "From Door",
  },
  {
    name: "Rainbow Trail",
    description: "From our front door to Silverton, CO",
    category: "From Door",
  },
  {
    name: "Mushroom Trail",
    description: "From our front door to Silverton, CO",
    category: "From Door",
  },
  {
    name: "Boulder Gulch",
    description: "From our front door to Silverton, CO",
    category: "From Door",
  },
  {
    name: "San Juan Skyway",
    description: "From our front door to Silverton, CO",
    category: "From Door",
  },
  {
    name: "Memorial Park",
    description: "From our front door to Silverton, CO",
    category: "From Door",
  },
  {
    name: "Molas Lake",
    description: "From our front door to Silverton, CO",
    category: "Lakes",
  },
  {
    name: "Little Molas",
    description: "From our front door to Silverton, CO",
    category: "Lakes",
  },
  {
    name: "Ice Lakes Basin",
    description: "From our front door to Silverton, CO",
    category: "Lakes",
  },
  {
    name: "Columbine Lake",
    description: "From our front door to Silverton, CO",
    category: "Lakes",
  },
  {
    name: "Ptarmigan Lake",
    description: "From our front door to Silverton, CO",
    category: "Lakes",
  },
  {
    name: "Highland Mary",
    description: "From our front door to Silverton, CO",
    category: "Lakes",
  },
  {
    name: "Hematite",
    description: "From our front door to Silverton, CO",
    category: "Lakes",
  },
  {
    name: "Silver Lake",
    description: "From our front door to Silverton, CO",
    category: "Lakes",
  },
  {
    name: "Porphyry basin",
    description: "From our front door to Silverton, CO",
    category: "Lakes",
  },
  {
    name: "Woodchuck basin",
    description: "From our front door to Silverton, CO",
    category: "Lakes",
  },
  {
    name: "Velocity basin",
    description: "From our front door to Silverton, CO",
    category: "Lakes",
  },
  {
    name: "Crystal lake",
    description: "From our front door to Silverton, CO",
    category: "Lakes",
  },
  {
    name: "Lake Emma",
    description: "From our front door to Silverton, CO",
    category: "Lakes",
  },
  {
    name: "Kendall",
    description: "From our front door to Silverton, CO",
    category: "Peaks",
  },
  {
    name: "Turk / Sultan",
    description: "From our front door to Silverton, CO",
    category: "Peaks",
  },
  {
    name: "Anvil",
    description: "From our front door to Silverton, CO",
    category: "Peaks",
  },
  {
    name: "Ohio",
    description: "From our front door to Silverton, CO",
    category: "Peaks",
  },
  {
    name: "Red Mountain 3, 2, 1",
    description: "From our front door to Silverton, CO",
    category: "Peaks",
  },
  {
    name: "Tower",
    description: "From our front door to Silverton, CO",
    category: "Peaks",
  },
  {
    name: "Handies",
    description: "From our front door to Silverton, CO",
    category: "Peaks",
  },
  {
    name: "King Solomon / Little Giant",
    description: "From our front door to Silverton, CO",
    category: "Peaks",
  },
  {
    name: "Round Mountain",
    description: "From our front door to Silverton, CO",
    category: "Peaks",
  },
  {
    name: "Galena",
    description: "From our front door to Silverton, CO",
    category: "Peaks",
  },
  {
    name: "Treasure Mountain",
    description: "From our front door to Silverton, CO",
    category: "Peaks",
  },
  {
    name: "Colorado Trail",
    description: "From our front door to Silverton, CO",
    category: "Notable Mentions",
  },
  {
    name: "Richmond Trail ➡️ Camp Bird ➡️ Hayden",
    description: "From our front door to Silverton, CO",
    category: "Notable Mentions",
  },
  {
    name: "Hardrock 100",
    description: "From our front door to Silverton, CO",
    category: "Notable Mentions",
  },
  {
    name: "Animas Forks",
    description: "From our front door to Silverton, CO",
    category: "Notable Mentions",
  },
  {
    name: "Outdoor Planetarium",
    description: "",
    category: "Notable Mentions",
  },
  {
    name: "Greene St",
    description: "From our front door to Silverton, CO",
    category: "Funnel Cakes",
  },
  {
    name: "Blair St",
    description: "From our front door to Silverton, CO",
    category: "Funnel Cakes",
  },
  {
    name: "Train Arrival",
    description: "From our front door to Silverton, CO",
    category: "Funnel Cakes",
  },
  {
    name: "Durango",
    description: "From our front door to Silverton, CO",
    category: "Funnel Cakes",
  },
];

export default function Activities() {
  const categories = activities.reduce((acc, activity) => {
    if (!acc[activity.category]) {
      acc[activity.category] = [];
    }

    acc[activity.category].push(activity);

    return acc;
  }, []);

  return (
    <main className={styles.main}>
      <h1>Stuff to do</h1>
      <section>
        <h2>From Door</h2>
        <div>
          <h3>Dolores LaChapelle Park</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
        <div>
          <h3>Bakers Park Trail</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
        <div>
          <h3>Anvil Flagpole</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
        <div>
          <h3>Shrine of the Mines</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
        <div>
          <h3>Kendall Lift Line</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
        <div>
          <h3>Fairy Trail</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
        <div>
          <h3>Rabbit Ears to Idaho</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
        <div>
          <h3>Rainbow Trail</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
        <div>
          <h3>Mushroom Trail</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
        <div>
          <h3>Boulder Gulch</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
        <div>
          <h3>San Juan Skyway</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
        <div>
          <h3>Memorial Park</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
      </section>
      <section>
        <h2>Lakes</h2>
        <div>
          <h3>Molas Lake</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
        <div>
          <h3>Little Molas</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
        <div>
          <h3>Ice Lakes Basin</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
        <div>
          <h3>Columbine Lake</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
        <div>
          <h3>Ptarmigan Lake</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
        <div>
          <h3>Highland Mary</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
        <div>
          <h3>Hematite</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
        <div>
          <h3>Silver Lake</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
        <div>
          <h3>Porphyry basin</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
        <div>
          <h3>Woodchuck basin</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
        <div>
          <h3>Velocity basin</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
        <div>
          <h3>Crystal lake</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
        <div>
          <h3>Lake Emma</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
      </section>
      <section>
        <h2>Peaks</h2>
        <div>
          <h3>Kendall</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
        <div>
          <h3>Turk / Sultan</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
        <div>
          <h3>Anvil</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
        <div>
          <h3>Ohio</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
        <div>
          <h3>Red Mountain 3, 2, 1</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
        <div>
          <h3>Tower</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
        <div>
          <h3>Handies</h3>
          <p>From our front door to Silverton, CO</p>
          <div>
            <h3>King Solomon / Little Giant</h3>
            <p>From our front door to Silverton, CO</p>
          </div>
          <div>
            <h3>Round Mountain</h3>
            <p>From our front door to Silverton, CO</p>
          </div>
        </div>
        <div>
          <h3>Galena</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
        <div>
          <h3>Treasure Mountain</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
      </section>
      <section>
        <h2>Notable Mentions</h2>
        <div>
          <h3>Colorado Trail</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
        <div>
          <h3>Richmond Trail ➡️ Camp Bird ➡️ Hayden</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
        <div>
          <h3>Hardrock 100</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
        <div>
          <h3>Animas Forks</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
        <div>
          <h3>Outdoor Planetarium</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
      </section>
      <section>
        <h2>Funnel Cakes</h2>
        <div>
          <h3>Greene St</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
        <div>
          <h3>Blair St</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
        <div>
          <h3>Train Arrival</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
        <div>
          <h3>Durango</h3>
          <p>From our front door to Silverton, CO</p>
        </div>
      </section>
    </main>
  );
}

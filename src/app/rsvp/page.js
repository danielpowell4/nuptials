import styles from "@/app/utils.module.css";

import RsvpForm from "./RsvpForm";

export const metadata = {
  title: "RSVP | Julia & Dan",
  description:
    "Respond, if you please to the wedding of Julia & Dan on Sept 7, 2024 in Silverton, CO.",
};

export default function Rsvp() {
  return (
    <main className={styles.main}>
      <h1>{`Répondez s'il vous plaît`}</h1>
      <p>
        Respond, if you please to your invitation to our grand San Juan soiree.
      </p>
      <RsvpForm />
    </main>
  );
}

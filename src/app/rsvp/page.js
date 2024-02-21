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
      <div
        style={{
          padding: "1.15rem",
          backgroundColor: "#ff9b88",
          border: "2px solid #930000",
          borderRadius: "0.25rem",
          margin: "1.15rem auto",
          fontFamily: "futura-pt",
          fontSize: "1.15rem",
        }}
      >
        THIS IS UNDER CONSTRUCTION AND WILL NOT BE RECORDED.
        <br />
        DO NOT COMPLETE!
      </div>
      <RsvpForm />
    </main>
  );
}

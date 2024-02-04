"use client";

import { Button, Form, TextField, TextArea, RadioGroup } from "@/components";
import { Radio, Text } from "react-aria-components";
import { Formik, FieldArray } from "formik";

import formStyles from "./RsvpForm.module.css";

const emptyGuest = {
  firstName: "",
  lastName: "",
  contact: "",
  friday: "yes",
  saturday: "yes",
  dietaryNote: "",
  message: "",
};

const initialValues = {
  guests: [emptyGuest],
};

export default function RsvpForm() {
  return (
    <Formik initialValues={initialValues}>
      {({ values, setFieldValue, setFieldTouched, ...formikBag }) => {
        const namesByGuestIndex = new Map();
        values.guests.forEach((guest, index) => {
          namesByGuestIndex.set(
            index,
            guest.firstName ? guest.firstName : `Guest ${index + 1}`
          );
        });

        return (
          <Form onInvalid={() => {}} onReset={() => {}} onSubmit={() => {}}>
            <FieldArray
              name="guests"
              render={(arrayHelpers) => (
                <div>
                  <div style={{ display: "flex", gap: "1rem" }}>
                    <h2 style={{ margin: 0 }}>
                      {values.guests && values.guests.length > 1
                        ? "Guests"
                        : "Guest"}
                    </h2>
                    <Button
                      type="button"
                      onClick={() => arrayHelpers.push({ ...emptyGuest })}
                      title="Add a guest"
                    >
                      Add +
                    </Button>
                    {values.guests.length > 1 && (
                      <Text
                        slot="description"
                        style={{ fontSize: "small", alignSelf: "baseline" }}
                      >
                        If you are unsure who should come, please get in touch!
                      </Text>
                    )}
                  </div>
                  {values.guests && values.guests.length > 0 ? (
                    <>
                      <div className={formStyles.formSection}>
                        <ul className={formStyles.unstyledList}>
                          {values.guests.map((guest, index) => (
                            <li key={index} className={formStyles.GuestItem}>
                              <TextField
                                label="First name"
                                name={`guests.${index}.firstName`}
                                value={guest.firstName}
                                style={{ flex: "1 0 5rem" }}
                                onChange={(val) =>
                                  setFieldValue(
                                    `guests.${index}.firstName`,
                                    val
                                  )
                                }
                                onBlur={() =>
                                  setFieldTouched(`guests.${index}.lastName`)
                                }
                              />
                              <TextField
                                label="Family Name"
                                name={`guests.${index}.lastName`}
                                style={{ flex: "1 0 5rem" }}
                                onChange={(val) =>
                                  setFieldValue(`guests.${index}.lastName`, val)
                                }
                                onBlur={() =>
                                  setFieldTouched(`guests.${index}.lastName`)
                                }
                              />
                              <TextField
                                isRequired
                                label="Phone or Email"
                                name={`guests.${index}.contact`}
                                description={"Preferred (or both if you fancy)"}
                                style={{ flex: "1 0 8rem" }}
                                onChange={(val) =>
                                  setFieldValue(`guests.${index}.contact`, val)
                                }
                                onBlur={() =>
                                  setFieldTouched(`guests.${index}.contact`)
                                }
                              />
                              {values.guests.length > 1 && (
                                <Button
                                  style={{ alignSelf: "center" }}
                                  type="button"
                                  onClick={() => arrayHelpers.remove(index)} // remove a guest from the list
                                  aria-label="Remove this guest"
                                >
                                  -
                                </Button>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className={formStyles.formSection}>
                        <h2>Friday | Sept 6, 2024</h2>
                        <ul className={formStyles.unstyledList}>
                          {values.guests.map((guest, index) => {
                            return (
                              <li key={index}>
                                <h3>{namesByGuestIndex.get(index)}</h3>
                                <RadioGroup
                                  label={"Attending"}
                                  name={`guests.${index}.friday`}
                                  orientation="horizontal"
                                  onChange={(val) => {
                                    setFieldValue(
                                      `guests.${index}.friday`,
                                      val
                                    );
                                    setFieldTouched(`guests.${index}.friday`);
                                  }}
                                  value={guest.friday}
                                >
                                  <Radio value="yes">Yes</Radio>
                                  <Radio value="no">No</Radio>
                                </RadioGroup>
                              </li>
                            );
                          })}
                        </ul>
                      </div>

                      <div className={formStyles.formSection}>
                        <h2>Saturday | Sept 7, 2024</h2>
                        <ul className={formStyles.unstyledList}>
                          {values.guests.map((guest, index) => {
                            return (
                              <li key={index}>
                                <h3>{namesByGuestIndex.get(index)}</h3>
                                <RadioGroup
                                  label={"Attending"}
                                  name={`guests.${index}.saturday`}
                                  orientation="horizontal"
                                  onChange={(val) => {
                                    setFieldValue(
                                      `guests.${index}.saturday`,
                                      val
                                    );
                                    setFieldTouched(`guests.${index}.saturday`);
                                  }}
                                  value={guest.saturday}
                                >
                                  <Radio value="yes">Yes</Radio>
                                  <Radio value="no">No</Radio>
                                </RadioGroup>
                                <TextArea
                                  label="Dietary note"
                                  name={`guests.${index}.dietaryNote`}
                                  placeholder="vegan, carnivore, paleo, gluten-free, croissants, cake-only, champagne, etc."
                                  description={
                                    "To be sure we will have something for you at the feast."
                                  }
                                  value={guest.dietaryNote}
                                  style={{ maxWidth: "26rem", width: "100%" }}
                                  onChange={(val) =>
                                    setFieldValue(
                                      `guests.${index}.dietaryNote`,
                                      val
                                    )
                                  }
                                  onBlur={() =>
                                    setFieldTouched(
                                      `guests.${index}.dietaryNote`
                                    )
                                  }
                                />
                                <TextArea
                                  label="Message for the Happy Couple"
                                  name={`guests.${index}.message`}
                                  placeholder="HAGS see you in September."
                                  description={
                                    "Any other information you'd like to share or ask about!"
                                  }
                                  value={guest.message}
                                  style={{ maxWidth: "26rem", width: "100%" }}
                                  onChange={(val) =>
                                    setFieldValue(
                                      `guests.${index}.message`,
                                      val
                                    )
                                  }
                                  onBlur={() =>
                                    setFieldTouched(`guests.${index}.message`)
                                  }
                                />
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Button type="button" onClick={() => arrayHelpers.push("")}>
                      {/* show this when user has removed all guests from the list */}
                      Add a guest
                    </Button>
                  )}
                </div>
              )}
            />

            <Button type="submit">Submit</Button>
          </Form>
        );
      }}
    </Formik>
  );
}

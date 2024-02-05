import {
  FieldError,
  Label,
  RadioGroup as AriaRadioGroup,
  Text,
} from "react-aria-components";

import "./RadioGroup.css";

// export interface RadioGroupProps extends Omit<AriaRadioGroupProps, "children"> {
//   children?: React.ReactNode;
//   label?: string;
//   description?: string;
//   errorMessage?: string | ((validation: ValidationResult) => string);
// }

export default function RadioGroup({
  label,
  description,
  errorMessage,
  children,
  ...props
}) {
  return (
    <AriaRadioGroup {...props}>
      <Label>{label}</Label>
      {children}
      {description && (
        <Text slot="description" style={{ whiteSpace: "pre" }}>
          {description}
        </Text>
      )}
      <FieldError>{errorMessage}</FieldError>
    </AriaRadioGroup>
  );
}

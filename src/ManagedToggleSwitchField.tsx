import * as React from "react";
import styled from "styled-components";
import { useField } from "formik";
import { BaseLabel } from "./BaseLabel";
import { Label } from "./Label";
import { ErrorLabel } from "./ErrorLabel";
import { ToggleSwitch } from "./ToggleSwitch";
import { Box } from "./Box";
import { Col } from "./Col";
import { StructuralProps } from "./systemHelpers";

type ManagedToggleSwitchFieldProps = StructuralProps & {
  caption?: string;
  label: string;
  id: string;
  disabled?: boolean;
};

// Hide this input completely
const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  margin: 0px;
`;

export const ManagedToggleSwitchField = ({
  label,
  caption,
  id,
  disabled,
  ...props
}: ManagedToggleSwitchFieldProps) => {
  const [field, meta] = useField({ name: id, type: "checkbox" });
  return (
    <Box {...props}>
      <BaseLabel
        htmlFor={id}
        display="flex"
        flexDirection="row"
        cursor="pointer"
      >
        <ToggleSwitch
          mr="2"
          hasError={meta.touched && meta.error !== undefined}
          selected={field.checked}
          disabled={disabled}
        />
        <Col>
          <Label>{label}</Label>
          {caption ? (
            <Label gray mt="2">
              {caption}
            </Label>
          ) : null}
          <HiddenInput
            {...field}
            value={id}
            name={id}
            id={id}
            disabled={disabled}
            type="checkbox"
          />
          <ErrorLabel mt="2" hasError={!!(meta.touched && meta.error)}>
            {meta.error}
          </ErrorLabel>
        </Col>
      </BaseLabel>
    </Box>
  );
};

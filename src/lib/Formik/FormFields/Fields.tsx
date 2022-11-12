import { Box, Text } from "@chakra-ui/react";
import { ErrorMessage, Field } from "formik";
import React from "react";

// formik form text field
export const FormikTextFieldS: React.FC<ITextFieldS> = ({
  form_label,
  type,
  name,
  icon,
}) => {
  const style = {
    padding: "8px",
    outline: "none",
    width: "100%",
    margin: "4px 0px",
    fontSize: "15px",
    color: "#A4A4A4",
    textDecoration: "none",
    fontWeight: 400,
  };

  return (
    <Box
      w={{ base: "100%", md: "200px", lg: "295px" }}
      h={{ base: "50px", md: "78px" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRight="1px solid #F1F1F1"
      px={2}
    >
      {icon}
      &nbsp;
      <Field
        type={type}
        name={name}
        id={name}
        style={style}
        placeholder={form_label}
      />
      <br />
      <Text color="red.300" fontSize={12}>
        <ErrorMessage name={name} />
      </Text>
    </Box>
  );
};

// formik form select field
export const FormikSelectFieldS: React.FC<ISelectFieldFieldS> = ({
  form_label,
  name,
  options,
  icon,
}) => {
  const style = {
    padding: "8px",
    outline: "none",
    width: "100%",
    margin: "4px 0px",
    fontSize: "15px",
    color: "#A4A4A4",
    textDecoration: "none",
    fontWeight: 400,
  };

  return (
    <Box
      w={{ base: "100%", md: "200px", lg: "295px" }}
      h={{ base: "50px", md: "78px" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRight="1px solid #F1F1F1"
      px={2}
    >
      {icon}
      &nbsp;
      <Field
        as="select"
        // type={type}
        name={name}
        id={name}
        style={style}
        placeholder={form_label}
      >
        {options.map((opt: { optName: string; value: string }, idx: number) => (
          <option key={idx} value={opt.value}>
            {opt.optName}
          </option>
        ))}
      </Field>
      <br />
      <Text color="red.300" fontSize={12}>
        <ErrorMessage name={name} />
      </Text>
    </Box>
  );
};

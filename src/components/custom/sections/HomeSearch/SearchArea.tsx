import { Box, Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { AiOutlineFieldTime } from "react-icons/ai";
import { MdOutlineShareLocation } from "react-icons/md";
import * as Yup from "yup";
import {
  FormikSelectFieldS,
  FormikTextFieldS,
} from "../../../../lib/Formik/FormFields/Fields";

const SearchArea: React.FC<{}> = () => {
  const [processing, setProcessing] = useState<boolean>(false);
  // initial vlaue of form
  const initialValues = {
    tour_type: "",
    month: "",
    destination: "",
  };

  // validation schema using formik yup
  const validationSchema = Yup.object({
    tour_type: Yup.string(),
    month: Yup.string(),
    destination: Yup.string(),
  });

  // on submit function here
  const onSubmit = async (
    values: any,
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log(values);
    setProcessing(true);
  };
  return (
    <Box
      position="relative"
      bottom="40px"
      w="85%"
      h={{ base: "218px", md: "78px" }}
      mx="auto"
      bg="white"
      shadow="xl"
      p={{ base: 0, md: 2 }}
      display={{ base: "block", md: "flex" }}
      justifyContent="space-between"
      alignItems="center"
      zIndex={9999}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <Box
            display={{ base: "block", md: "flex" }}
            justifyContent="space-between"
            alignItems="center"
          >
            <FormikSelectFieldS
              form_label="Tour type"
              name="tour_type"
              options={[
                { optName: "High", value: "high" },
                { optName: "Mid", value: "mid" },
                { optName: "Low", value: "low" },
                { optName: "Budget", value: "budget" },
              ]}
              icon={<AiOutlineFieldTime size={25} color="#A4A4A4" />}
            />

            <FormikSelectFieldS
              form_label="Month"
              name="month"
              options={[
                { optName: "Jan", value: "january" },
                { optName: "Feb", value: "februaru" },
                { optName: "Mar", value: "march" },
                { optName: "Apr", value: "april" },
                { optName: "May", value: "may" },
                { optName: "Jun", value: "june" },
                { optName: "Jul", value: "july" },
                { optName: "Aug", value: "august" },
                { optName: "Sep", value: "september" },
                { optName: "Oct", value: "october" },
                { optName: "Nov", value: "november" },
                { optName: "Dec", value: "december" },
              ]}
              icon={<AiOutlineFieldTime size={25} color="#A4A4A4" />}
            />
            <FormikTextFieldS
              form_label="Where to ?"
              name="destination"
              type="text"
              icon={<MdOutlineShareLocation size={25} color="#A4A4A4" />}
            />

            <Button
              w={{ base: "100%", md: "180px" }}
              h={{ base: "60px", md: "78px" }}
              fontWeight="semibold"
              fontSize={15}
              type="submit"
              my={{ base: 2, md: 0 }}
              isLoading={processing}
            >
              Find Now
            </Button>
          </Box>
        </Form>
      </Formik>
    </Box>
  );
};

export default SearchArea;

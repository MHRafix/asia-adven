import { darken, mode, whiten } from "@chakra-ui/theme-tools";

export const ButtonStyle = {
  // base style for btn
  baseStyle: {},

  // sizes for btn
  sizes: {
    square1: {
      h: "35px",
      w: "35px",
      fontSize: "md",
      px: "17px",
      borderRadius: 100,
    },

    normal: {
      h: "35px",
      fontSize: "md",
      px: "17px",
    },
    sm: {
      h: "30px",
      fontSize: "md",
      px: "14px",
    },
    md: {
      h: "46px",
      fontSize: "sm",
      fontWeight: 400,
      px: "20px",
    },
    lg: {
      h: "45px",
      fontSize: "lg",
      px: "25px",
    },
    xl: {
      h: "56px",
      fontSize: "lg",
      px: "30px",
    },
  },

  // variant of btn
  variants: {
    primary: (props: any) => ({
      borderRadius: 0,
      bg: "primary",
      color: "white",
      _hover: {
        bg: mode(darken("primary", 20), whiten("primary", 20))(props),
        boxShadow: "md",
      },
    }),
  },

  // default values for size and variant
  defaultProps: {
    size: "md", // default is md
    variant: "primary", // default is solid
    // colorScheme: 'primary', // default is gray
  },
};

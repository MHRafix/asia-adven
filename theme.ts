import { extendTheme } from "@chakra-ui/react";
import { ButtonStyle as Button } from "./src/customElements/CustomStyle";

export const customTheme = extendTheme({
  colors: {
    primary: "#3FD0D4",
    hoverPrimary: "#23A9AF",
    whiteSmoke: "#848484",
    danger: "#ff0000",
    warning: "#ffd800",
    success: "#00ff3b",
    dark: "#212121",
    white: "#FEFEFE",
  },

  components: {
    Button,
  },
});

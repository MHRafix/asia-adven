import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { slideDown } from "../../../hooks/animation";

const NavItem: React.FC<{ nav: any }> = ({ nav }) => {
  const [focus, setFocus] = useState<boolean>(false);
  const { menuName, mainHref, dropDownList, top, left } = nav;

  return (
    <Box>
      <Link
        href={mainHref}
        passHref
        onMouseOver={() => setFocus((state: boolean) => false)}
      >
        <Text
          mx={10}
          cursor="pointer"
          fontWeight="semibold"
          fontSize={15}
          _hover={{
            color: "primary",
            transition: ".3s",
          }}
        >
          {menuName}
        </Text>
      </Link>
      {focus && (
        <Box
        // onMouseOut={() => setFocus((state: boolean) => false)}
        >
          {dropDownList?.length &&
            dropDownList.map((dropDown: ISubmenu, idx: number) => (
              <motion.div
                key={idx}
                initial="offscreen"
                whileInView="onscreen"
                exit={slideDown.exit}
                variants={slideDown}
                style={{
                  // width: '116.10px',
                  position: "absolute",
                  top: top,
                  left: left,
                  background: "#fff",
                  // 	color: 'white',
                  // 	padding: '2px',
                  zIndex: 99,
                }}
              >
                <Box>Hello</Box>
              </motion.div>
            ))}
        </Box>
      )}
    </Box>
  );
};

export default NavItem;

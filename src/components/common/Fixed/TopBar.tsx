import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsEnvelope } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook, FiYoutube } from "react-icons/fi";
import {
  MdKeyboardArrowDown,
  MdOutlineLocationOn,
  MdPhone,
} from "react-icons/md";
import { slideDown } from "../../../hooks/animation";

const TopBar: React.FC<{}> = () => {
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <Box bg="#1C1C1C">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        pl="1%"
        mx="auto"
        color="white"
      >
        <Flex>
          <a href="mailto:setsail@qode.com" target="_self">
            <Flex alignItems="center" mx={3}>
              <BsEnvelope color="#3FD0D4" size={16} /> &nbsp;&nbsp;
              <Text
                fontSize={13}
                _hover={{
                  color: "primary",
                  transition: "0.3s",
                }}
              >
                setsail@qode.com
              </Text>
            </Flex>
          </a>
          <a href="tel:+880 1611 859 722" target="_self">
            <Flex alignItems="center" mx={3}>
              {" "}
              <MdPhone color="#3FD0D4" size={18} /> &nbsp;&nbsp;
              <Text
                fontSize={13}
                _hover={{
                  color: "primary",
                  transition: "0.3s",
                }}
              >
                +880 1611 859 722
              </Text>
            </Flex>
          </a>
          <a href="tel:+880 1611 859 722" target="_self">
            <Flex
              alignItems="center"
              mx={3}
              _hover={{
                color: "primary",
                transition: "0.3s",
              }}
            >
              <MdOutlineLocationOn color="#3FD0D4" size={18} /> &nbsp;&nbsp;
              <Text fontSize={13}>Jamuna Future Park, Dhaka</Text>
            </Flex>
          </a>
        </Flex>
        <Flex alignItems="center">
          <Flex>
            <Text
              mx={2}
              _hover={{
                color: "primary",
                transition: "0.3s",
              }}
              cursor="pointer"
            >
              <a href="https://facebook.com">
                <AiOutlineLinkedin size={17} />
              </a>
            </Text>
            <Text
              mx={2}
              _hover={{
                color: "primary",
                transition: "0.3s",
              }}
              cursor="pointer"
            >
              <a href="https://facebook.com">
                <FaInstagram size={17} />
              </a>
            </Text>
            <Text
              mx={2}
              _hover={{
                color: "primary",
                transition: "0.3s",
              }}
              cursor="pointer"
            >
              <a href="https://facebook.com">
                <FiFacebook size={17} />
              </a>
            </Text>
            <Text
              mx={2}
              _hover={{
                color: "primary",
                transition: "0.3s",
              }}
              cursor="pointer"
            >
              <a href="https://facebook.com">
                <FiYoutube size={17} />
              </a>
            </Text>
          </Flex>
          <Box w="20px"></Box>
          <Box
            position="relative"
            onMouseLeave={() =>
              setTimeout(() => {
                setFocus((state: boolean) => false);
              }, 200)
            }
          >
            <Button
              onMouseOver={() => setFocus((state: boolean) => true)}
              zIndex={100}
            >
              English &nbsp; <MdKeyboardArrowDown size={20} />
            </Button>
            {focus && (
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                exit={slideDown.exit}
                variants={slideDown}
                style={{
                  width: "116.10px",
                  position: "absolute",
                  top: "46px",
                  left: "0px",
                  background: "#3FD0D4",
                  color: "white",
                  padding: "2px",
                }}
              >
                <Box w="78%">
                  <Text
                    fontSize={14}
                    p={1}
                    textAlign="center"
                    cursor="pointer"
                    _hover={{
                      color: "dark",
                      transition: ".3s",
                    }}
                  >
                    English
                    {/* {focus && (
											<span
												style={{
													margin: 'auto',
													display: 'block',
													marginTop: '2px',
													width: '49px',
													height: '2px',
													background: 'white',
												}}
											></span>
										)} */}
                  </Text>
                  <Text
                    fontSize={14}
                    p={1}
                    textAlign="center"
                    cursor="pointer"
                    _hover={{
                      color: "dark",
                      transition: "0.3s",
                    }}
                  >
                    Bangla
                    {/* {focus && (
											<span
												style={{
													margin: 'auto',
													display: 'block',
													marginTop: '2px',
													width: '49px',
													height: '2px',
													background: 'white',
												}}
											></span>
										)} */}
                  </Text>
                </Box>
              </motion.div>
            )}
          </Box>

          <Link href="/acc" passHref>
            <Button>
              <BiUserCircle size={25} />
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default TopBar;

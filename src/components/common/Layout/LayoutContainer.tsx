import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import ScrollToTop from "react-scroll-to-top";
import HeaderMain from "../Fixed/HeaderMain";
const LayoutContainer: React.FC<{
  title: string;
  description: string;
  children: JSX.Element;
}> = ({ title, description, children }) => {
  return (
    <motion.div
      className="page_main_wrapper"
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.7 }}
    >
      <Head>
        <title>{title ? `Asia Adventure - ${title}` : "Asia Adventure"}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* app header is here */}
      <Box>
        <HeaderMain />
      </Box>
      {/* app body is here */}
      <main>
        <Box w="100%" mx="auto">
          {children}
        </Box>

        {/* messenger chat icon here */}
        {/* <MessengerCustomerChat
          pageId="110944118380097"
          appId="588889365150764"
        /> */}

        {/* scroll to top btn */}
        <div>
          <ScrollToTop
            smooth={true}
            top={300}
            component={<IoIosArrowUp />}
            id="gotop_client_btn"
          />
        </div>
      </main>

      {/* app footer is here */}
      <footer className="bg-slate-100 mt-20">
        {/* <FooterFeaturesCard />
				<FooterMain />
				<FooterCopyrightArea /> */}
        This is footer
      </footer>
    </motion.div>
  );
};

export default LayoutContainer;

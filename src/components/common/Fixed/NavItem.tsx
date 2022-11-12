import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";

const NavItem: React.FC<{ nav: any }> = ({ nav }) => {
  const [focus, setFocus] = useState<boolean>(false);
  const { menuName, mainHref, dropDownList, top, left } = nav;

  return (
    <Box
      position="relative"
      onMouseLeave={
        () =>
          // setTimeout(() => {
          setFocus((state: boolean) => false)
        // }, 200)
      }
    >
      <Link href={mainHref} passHref>
        <Text
          onMouseOver={() => setFocus((state: boolean) => true)}
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
      {/* {focus && (
				<>
					{dropDownList?.length && (
						<Box>
							<motion.div
								initial='offscreen'
								whileInView='onscreen'
								exit={megaMenuDown.exit}
								variants={megaMenuDown}
								style={{
									position: 'absolute',
									padding: '10px',
									top: top,
									left: left,
									background: 'white',
									boxShadow:
										' 0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05)',
								}}
							>
								{/* {dropDownList.map((dropDown: ISubmenu, idx: number) => (
									<Box key={idx}>{dropDown.subMenu}</Box>
								))} 
							</motion.div>
						</Box>
					)}
				</>
			)} */}
    </Box>
  );
};

export default NavItem;

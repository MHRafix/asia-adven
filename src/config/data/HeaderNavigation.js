export const headerNavigation = [
  {
    menuName: "Home",
    mainHref: "/",
    isDropDown: false,
  },
  {
    menuName: "Destinations",
    mainHref: "/destination_packages",
    isDropDown: true,
    dropDownList: [
      {
        subMenu: "Maldives",
        subHref: "maldives_tour123",
      },
      {
        subMenu: "Malaysiya",
        subHref: "malaysia_tour123",
      },
      {
        subMenu: "Kashmir",
        subHref: "kashmir_tour123",
      },
    ],
  },
  {
    menuName: "Information & FAQ",
    mainHref: "/information_faq",
    isDropDown: true,
    dropDownList: [
      {
        subMenu: "Tourist Visa",
        subHref: "tourist_visa",
      },
      {
        subMenu: "Medical Visa",
        subHref: "medical_visa",
      },
      {
        subMenu: "Business Visa",
        subHref: "business_visa",
      },
      {
        subMenu: "Work Visa",
        subHref: "work_visa",
      },
    ],
  },
  {
    menuName: "Blog",
    mainHref: "/blog",
    isDropDown: true,
    dropDownList: [
      {
        subMenu: "Visa Processing",
        subHref: "visa_processing",
      },
      {
        subMenu: "Tour Packages",
        subHref: "tour_packages",
      },
      {
        subMenu: "New Update",
        subHref: "new_update",
      },
      {
        subMenu: "Tour Instruction",
        subHref: "tour-instructions",
      },
    ],
  },
  {
    menuName: "All Events",
    mainHref: "/",
    isDropDown: true,
    dropDownList: [
      {
        subMenu: "Destinations",
        subHref: "/destination_packages",
      },
      {
        subMenu: "Information & FAQ",
        subHref: "/information_faq",
      },
      {
        subMenu: "Blog",
        subHref: "/blog",
      },
      // {
      // 	subMenu: 'Tour Instruction',
      // 	subHref: 'tour-instructions',
      // },
    ],
  },
];

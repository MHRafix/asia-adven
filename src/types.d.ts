// submenu interface
interface ISubmenu {
  subMenu: string;
  subHref: string;
}
// navigation
interface INavigationData {
  menuName: string;
  mainHref: string;
  isDropDown: boolean;
  top?: string;
  left?: string;
  dropDownList?: ISubmenu[];
}

// fields interface
interface ITextFieldS {
  form_label: string;
  type: string;
  name: string;
  icon: JSX.Element;
}

interface ISelectFieldFieldS {
  form_label: string;
  name: string;
  options: { optName: string; value: string }[];
  icon: JSX.Element;
}

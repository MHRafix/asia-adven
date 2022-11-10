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

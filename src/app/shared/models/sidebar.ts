import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface ISideBar {
  display?: string;
  id?: string;
  link?: string;
  icon?: string | IconDefinition | any;
  childrens?: ISideBar[];
}

import images from "../../../todo-list/src/utils/images";

export default class NavItem {
   constructor(name, icon = images.calenderTextIcon) {
      this.name = name;
      this.icon = icon;
   }
} 
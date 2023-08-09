import images from "../../../todo-list/src/utils/images";

export default class Task {
    constructor(id,name, icon = images.calenderTextIcon, category, duedate, description,priority, isDone = false) {
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.category = category;
        this.description = description;
        this.duedate = duedate;
        this.priority = priority;
        this.isDone = isDone;
    }

}
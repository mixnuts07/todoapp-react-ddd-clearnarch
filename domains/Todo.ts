import Id from "./Id";
import Title from "./Title";
import Description from "./Description";

export default class Todo {
  constructor(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
  }

  id: Id;
  title: Title;
  description: Description;
}

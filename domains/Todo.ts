import Id from "./Id";
import Title from "./Title";
import Description from "./Description";

export default class Todo {
  constructor(id: Id, title: Title, description: Description) {
    if (!title) throw new Error("TITLE IS REQUIRED");
    this.id = new Id(id.value);
    this.title = new Title(title.value);
    this.description = new Description(description.value);
  }

  id: Id;
  title: Title;
  description: Description;
}

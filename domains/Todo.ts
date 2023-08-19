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

  // Factory Method
  static create(title: string, description: string): Todo {
    return new Todo(
      new Id(Date.now()),
      new Title(title),
      new Description(description)
    );
  }
}

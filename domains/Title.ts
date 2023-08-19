export default class Title {
  constructor(value: string) {
    if (!value) throw new Error("TITLE IS REQUIRED");
    if (value.length > 256)
      throw new Error("TITLE LENGTH MUST BE UNDER 256 CHARACTERS.");
    this.value = value;
  }
  value: string;
}

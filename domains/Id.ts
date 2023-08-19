export default class Id {
  constructor(value: number) {
    if (!value) throw new Error("ID IS REQUIRED");
    this.value = value;
  }
  value: number;
}

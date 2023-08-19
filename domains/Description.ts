export default class Description {
  constructor(value: string) {
    if (value.length > 256)
      throw new Error("DESCRIPTION LENGTH IS UNDER 256 CHARACTERS.");
    this.value = value;
  }
  value: string;
}

class StudentNou {
  public studCode: number;
  private studName: string;
  constructor(code: number, name: string) {
    this.studCode = code;
    this.studName = name;
  }
  public display() {
    return `My unique code: ${this.studCode}, my name: ${this.studName}.`;
  }
}

let studentnou: StudentNou = new StudentNou(1, "JoeRoot");
console.log(studentnou.display());

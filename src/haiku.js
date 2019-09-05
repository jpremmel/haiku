
export class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  checkValidity() {
    let haiku = false;
    let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    for (let i = 0; i < digits.length; i++) {
      if (this.line1.includes(digits[i]) || this.line2.includes(digits[i]) || this.line3.includes(digits[i])) {
        console.log("Please turn your numbers into words.");
        return false;
      }
    }
    if (countSyllables(this.line1) === 5 &&
               countSyllables(this.line2) === 7 &&
               countSyllables(this.line3) === 5) {
                 haiku = true;
    }
    return haiku;
  }
}

export function countSyllables(phrase) {
  let sylCount = 0;
  //count the syllables in the input phrase
  return sylCount;
}

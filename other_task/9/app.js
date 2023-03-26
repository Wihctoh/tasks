class Conversion {
  doOctalNumber(num) {
    try {
      if (isNaN(num)) throw new Error("not a number");

      let arr = [];
      let rem = [0, 1, 2, 3, 4, 5, 6, 7];

      while (num >= rem.length) {
        let currentRem = num % rem.length;

        arr.push(rem[currentRem]);
        num = (num - currentRem) / rem.length;
      }

      arr.push(rem[num]);

      console.log(arr.reverse().join(""));
    } catch (error) {
      console.log(error.message);
    }
  }
}

const num = 375;
const conversion = new Conversion();
conversion.doOctalNumber(num);

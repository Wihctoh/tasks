import {
  isPalindrome,
  calculateFactorial,
  capitalizeString,
  StringArray,
  NumberArray,
  flattenArray,
} from "./app";

describe("", () => {
  test("", () => {
    const result = isPalindrome("anna");
    expect(result).toBe(true);
  });

  test("", () => {
    const result = isPalindrome("");
    expect(result).toBe("word is empty");
  });

  test("", () => {
    const result = isPalindrome(2);
    expect(result).toBe("word cant be a number!");
  });
});

describe("", () => {
  test("", () => {
    const result = calculateFactorial(5);
    expect(result).toBe(120);
  });

  test("", () => {
    const result = calculateFactorial("5");
    expect(result).toBe("arguments cant be a string");
  });

  test("", () => {
    const result = calculateFactorial(0);
    expect(result).toBe("empty value!");
  });
});

describe("", () => {
  test("", () => {
    const result = capitalizeString("qwe asd zxc");
    expect(result).toBe("Qwe Asd Zxc");
  });

  test("", () => {
    const result = capitalizeString("");
    expect(result).toBe("empty value!");
  });

  test("", () => {
    const result = capitalizeString(123);
    expect(result).toBe("values cant be a number!");
  });
});

describe("", () => {
  test("", () => {
    const stringArray = new StringArray();
    const result = stringArray.getUniqueWords();

    expect(result).toEqual(["qwe", "qweqweqwe"]);
  });

  test("", () => {
    const stringArray = new StringArray();
    const result = stringArray.getLongestWord();

    expect(result).toEqual("qweqweqwe");
  });
});

describe("", () => {
  test("", () => {
    const numberArray = new NumberArray();
    const result = numberArray.getSum();

    expect(result).toEqual(10);
  });

  test("", () => {
    const numberArray = new NumberArray();
    const result = numberArray.getEvenNumbers();

    expect(result).toEqual([2, 4]);
  });
});

describe("", () => {
  test("", () => {
    const res = flattenArray([1, 2, 3, [6, 5], ["qwe", "asd"]]);
    expect(res).toEqual([1, 2, 3, 6, 5, "qwe", "asd"]);
  });
});

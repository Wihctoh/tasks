const {
  doDegree,
  multiply,
  doSum,
  doArrObj,
  removeDouble,
  doubleValuesInObj,
  newObjValues,
  keyValues,
  doArray,
} = require("./app");

describe("do degree:", () => {
  test("", () => {
    const result = doDegree(2, 3);
    expect(result).toBe(8);
  });

  test("", () => {
    const result = doDegree("2", "3");
    expect(result).toBe("arguments not a number!");
  });

  test("", () => {
    const result = doDegree(2, "3");
    expect(result).toBe("arguments not a number!");
  });

  test("", () => {
    const result = doDegree("2", 3);
    expect(result).toBe("arguments not a number!");
  });
});

describe("do degree:", () => {
  test("", () => {
    const result = multiply([1, 2, 3]);
    expect(result).toBe(6);
  });

  test("", () => {
    const result = multiply(["1", 2, 3]);
    expect(result).toBe("arg not a number!");
  });

  test("", () => {
    const result = multiply([]);
    expect(result).toBe("arr is empty!");
  });
});

describe("", () => {
  test("", () => {
    const res = doSum([1, 2, 3]);
    expect(res).toBe(6);
  });
});

describe("do degree:", () => {
  const arrObj = [
    { id: 1, title: "Часы", count: 10, price: 500, producer: "Германия" },
    { id: 2, title: "Смартфон", count: 33, price: 1500, producer: "Германия" },
    { id: 3, title: "Моноблок", count: 6, price: 2200, producer: "Германия" },
    { id: 4, title: "Ноутбук", count: 13, price: 3000, producer: "Китай" },
    { id: 5, title: "Планшет", count: 22, price: 2100, producer: "Китай" },
    { id: 6, title: "Телевизор", count: 4, price: 4100, producer: "Германия" },
    {
      id: 7,
      title: "Холодильник",
      count: 11,
      price: 2400,
      producer: "Германия",
    },
  ];

  test("", () => {
    const result = doArrObj(arrObj);
    expect(result).toEqual([
      {
        count: 33,
        id: 2,
        price: 1500,
        producer: "Германия",
        title: "Смартфон",
      },
      {
        id: 7,
        title: "Холодильник",
        count: 11,
        price: 2400,
        producer: "Германия",
      },
    ]);
  });

  test("", () => {
    const item = arrObj;
    item[0].count = "10";

    const result = doArrObj(item);
    expect(result).toBe("elements not a number!");
  });
});

describe("", () => {
  test("", () => {
    const result = removeDouble([
      "+375298888888",
      "+375298888888",
      "+375298888889",
      "+375298888899",
    ]);
    expect(result).toEqual(["+375298888888", "+375298888889", "+375298888899"]);
  });

  test("", () => {
    const result = removeDouble([]);
    expect(result).toEqual("empry values!");
  });

  test("", () => {
    const result = removeDouble(["+375298888888", 2131]);
    expect(result).toBe("value cant be a number type!");
  });
});

describe("", () => {
  test("", () => {
    const result = doubleValuesInObj({ one: 1, two: 2, three: 3 });
    expect(result).toEqual({ one: 2, two: 4, three: 6 });
  });

  test("", () => {
    const result = doubleValuesInObj({});
    expect(result).toBe("empty values!");
  });

  test("", () => {
    const result = doubleValuesInObj({ one: 1, two: "qwer", three: 3 });
    expect(result).toBe("values in not a number!");
  });
});

describe("", () => {
  test("", () => {
    const result = newObjValues({ one: 1, two: 2, three: 3, four: 4 });
    expect(result).toEqual([2, 4]);
  });

  test("", () => {
    const result = newObjValues({});
    expect(result).toBe("Empty values!");
  });
});

describe("", () => {
  test("", () => {
    const result = keyValues({ one: 1, two: 2, three: 3, four: "q" });
    expect(result).toEqual(3);
  });

  test("", () => {
    const result = keyValues({});
    expect(result).toBe("empty values!");
  });
});

describe("", () => {
  test("", () => {
    const result = doArray([1, 2, 3, 4, 5, 6]);
    expect(result).toEqual([[1], [2], [3], [4], [5], [6]]);
  });

  test("", () => {
    const result = doArray([]);
    expect(result).toBe("empty values!");
  });
});

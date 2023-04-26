// Посчитать количество гласных и согласных в строке

const vowel = "aeuio";

document.querySelector("button").addEventListener("click", () => {
  let count = 0;
  const inp = document.querySelector("input");
  const div = document.querySelector("div");
  const div2 = document.querySelector(".na");
  try {
    for (let i = 0; i < inp.value.length; i++) {
      if (vowel.includes(inp.value[i])) count++;
    }

    const countCins = inp.value.length - count;
    div.innerHTML = `количество гласных = ${count}`;
    div2.innerHTML = `количество согласных = ${countCins}`;
  } catch (error) {
    return error.message;
  }
});

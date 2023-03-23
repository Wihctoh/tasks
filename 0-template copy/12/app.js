// Реализуйте класс Sort, сдержащий метод sortData, сортирующий все числа
// статичного массива сортировкой пузырьком

class Sort {
  sortData(arr) {
    try {
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
          if (arr[j] > arr[j + 1]) {
            let tmp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tmp;
          }
        }
      }
      return arr;
    } catch (error) {
      return error.message;
    }
  }
}

let arr = [4, 8, 7, 1, 5, 6, 3, 2, 9];

const sort = new Sort();

console.log(sort.sortData(arr));

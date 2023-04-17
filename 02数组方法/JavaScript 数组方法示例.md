# JavaScript 数组方法示例

**Human:**
给出JavaScript数组方法的示例代码, 要求数组尽可能复杂, 使用的方法足够多

***

**Assistant:**

以下是一个复杂的 JavaScript 数组示例，它使用了多个数组方法：

```
const originalArray = [1, 2, 3, 4, 5];

// 使用 map() 方法创建一个新数组，其中每个元素是原数组对应元素的平方
const squaredArray = originalArray.map((num) => num ** 2);

// 使用 reduce() 方法计算原数组的总和
const sum = originalArray.reduce((total, num) => total + num, 0);

// 使用 filter() 方法创建一个新数组，其中只包含原数组中的偶数
const evenArray = originalArray.filter((num) => num % 2 === 0);

// 使用 find() 方法查找原数组中第一个大于 3 的元素
const greaterThanThree = originalArray.find((num) => num > 3);

// 使用 sort() 方法按升序排序原数组
const sortedArray = originalArray.sort((a, b) => a - b);

// 使用 slice() 方法复制原数组
const copiedArray = originalArray.slice();

// 使用 concat() 方法将两个数组合并为一个新数组
const otherArray = [6, 7, 8];
const combinedArray = originalArray.concat(otherArray);

// 使用 indexOf() 方法查找原数组中某个元素的位置
const index = originalArray.indexOf(3);

// 使用 splice() 方法删除原数组中的第一个元素
const deletedElement = originalArray.splice(0, 1);

console.log(originalArray); // [2, 3, 4, 5]
console.log(squaredArray); // [1, 4, 9, 16, 25]
console.log(sum); // 15
console.log(evenArray); // [2, 4]
console.log(greaterThanThree); // 4
console.log(sortedArray); // [1, 2, 3, 4, 5]
console.log(copiedArray); // [1, 2, 3, 4, 5]
console.log(combinedArray); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(index); // 2
console.log(deletedElement); // [1]

```


***

**Human:**
使用数组元素要复杂

***

**Assistant:**

好的，以下是一个使用复杂数组元素的 JavaScript 数组示例代码：

```
const books = [
  {
    title: 'The Hitchhiker\'s Guide to the Galaxy',
    author: 'Douglas Adams',
    year: 1979,
    genres: ['Science Fiction', 'Comedy'],
    rating: 4.5,
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    genres: ['Classics', 'Fiction'],
    rating: 4.8,
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    year: 1954,
    genres: ['Fantasy', 'Adventure'],
    rating: 4.7,
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    genres: ['Classics', 'Romance'],
    rating: 4.2,
  },
];

// 使用 map() 方法创建一个新数组，其中每个元素是原数组对应元素的标题和年份
const bookSummaries = books.map((book) => `${book.title} (${book.year})`);

// 使用 reduce() 方法计算原数组中的所有书的平均评分
const averageRating = books.reduce((total, book, index, array) => {
  total += book.rating;
  if (index === array.length - 1) {
    return total / array.length;
  } else {
    return total;
  }
}, 0);

// 使用 filter() 方法创建一个新数组，其中只包含原数组中的年份在 1900 年之后的书
const modernBooks = books.filter((book) => book.year > 1900);

// 使用 find() 方法查找原数组中第一本以 'The' 开头的书
const bookStartingWithThe = books.find((book) => book.title.startsWith('The'));

// 使用 sort() 方法按评分从高到低排序原数组
const topRatedBooks = books.sort((a, b) => b.rating - a.rating);

// 使用 slice() 方法复制原数组
const copiedBooks = books.slice();

// 使用 concat() 方法将两个数组合并为一个新数组
const moreBooks = [
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    year: 1951,
    genres: ['Classics', 'Fiction'],
    rating: 4.0,
  },
  {
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    genres: ['Science Fiction', 'Dystopian'],
    rating: 4.3,
  },
];
const allBooks = books.concat(moreBooks);

// 使用 indexOf() 方法查找原数组中某本书的位置
const index = books.findIndex((book) => book.title === 'Pride and Prejudice');

// 使用 splice() 方法删除原数组中的第一本书
const deletedBook = books.splice(0, 1);

console.log(books); // [{...}, {...}, {...}, {...}]
console.log(bookSummaries); // ["The Hitchhiker's Guide to the Galaxy (1979)", "To Kill a Mockingbird (1960)", "The Lord of the Rings (1954)", "Pride and Prejudice (1813)"]
console.log(averageRating); // 4.55

```


***

Exported on 2023年4月17日 下午10:44.
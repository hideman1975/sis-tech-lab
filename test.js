import { serialize, deserialize } from "./index.js";

console.log("test start");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function test01() {
  const name = "Short numbers";
  const arr = [
    5, 3, 7, 1, 9, 5, 3, 8, 3, 1, 9, 0, 4, 1, 3, 4, 6, 1, 5, 6, 3, 7,
  ];
  const JsonStringify = JSON.stringify(arr);
  const shortStringify = serialize(arr);
  const deStringify = deserialize(shortStringify);
  const effect = (shortStringify.length * 100) / JsonStringify.length;
  console.log("Test:", name, "Result:", effect, "%");
  console.log("JSON:", JsonStringify, "Length:", JsonStringify.length);
  console.log("Short:", shortStringify, "Length:", shortStringify.length);
  console.log("Origin:", arr, "Deserialized:", deStringify);
  console.log(
    "Arrays are equal?",
    arr.length === deStringify.length &&
      arr.every((value, index) => value === deStringify[index])
  );
}

function test02() {
  const name = "50 random numbers";
  const arr = [];
  for (let i = 0; i < 50; i++) {
    arr.push(getRandomInt(0, 300));
  }
  const JsonStringify = JSON.stringify(arr);
  const shortStringify = serialize(arr);
  const deStringify = deserialize(shortStringify);
  const effect = (shortStringify.length * 100) / JsonStringify.length;
  console.log("Test:", name, "Result:", effect, "%");
  console.log("JSON:", JsonStringify, "Length:", JsonStringify.length);
  console.log("Short:", shortStringify, "Length:", shortStringify.length);
  console.log("Origin:", arr, "Deserialized:", deStringify);
  console.log(
    "Arrays are equal?",
    arr.length === deStringify.length &&
      arr.every((value, index) => value === deStringify[index])
  );
}

function test03() {
  const name = "100 random numbers";
  const arr = [];
  for (let i = 0; i < 100; i++) {
    arr.push(getRandomInt(0, 300));
  }
  const JsonStringify = JSON.stringify(arr);
  const shortStringify = serialize(arr);
  const deStringify = deserialize(shortStringify);
  const effect = (shortStringify.length * 100) / JsonStringify.length;
  console.log("Test:", name, "Result:", effect, "%");
  console.log("JSON:", JsonStringify, "Length:", JsonStringify.length);
  console.log("Short:", shortStringify, "Length:", shortStringify.length);
  console.log("Origin:", arr, "Deserialized:", deStringify);
  console.log(
    "Arrays are equal?",
    arr.length === deStringify.length &&
      arr.every((value, index) => value === deStringify[index])
  );
}

function test04() {
  const name = "500 random numbers";
  const arr = [];
  for (let i = 0; i < 500; i++) {
    arr.push(getRandomInt(0, 300));
  }
  const JsonStringify = JSON.stringify(arr);
  const shortStringify = serialize(arr);
  const deStringify = deserialize(shortStringify);
  const effect = (shortStringify.length * 100) / JsonStringify.length;
  console.log("Test:", name, "Result:", effect, "%");
  console.log("JSON:", JsonStringify, "Length:", JsonStringify.length);
  console.log("Short:", shortStringify, "Length:", shortStringify.length);
  console.log("Origin:", arr, "Deserialized:", deStringify);
  console.log(
    "Arrays are equal?",
    arr.length === deStringify.length &&
      arr.every((value, index) => value === deStringify[index])
  );
}

function test05() {
  const name = "1000 random numbers";
  const arr = [];
  for (let i = 0; i < 1000; i++) {
    arr.push(getRandomInt(0, 300));
  }
  setTimeout(() => {
    const JsonStringify = JSON.stringify(arr);
    const shortStringify = serialize(arr);
    const deStringify = deserialize(shortStringify);
    const effect = (shortStringify.length * 100) / JsonStringify.length;
    console.log("Test:", name, "Result:", effect, "%");
    console.log("JSON:", JsonStringify, "Length:", JsonStringify.length);
    console.log("Short:", shortStringify, "Length:", shortStringify.length);
    console.log("Origin:", arr, "Deserialized:", deStringify);
    console.log(
      "Arrays are equal?",
      arr.length === deStringify.length &&
        arr.every((value, index) => value === deStringify[index])
    );
  }, 0);
}

function test06() {
  const name = "All numbers one digital";
  const arr = [];
  for (let i = 0; i < 1000; i++) {
    arr.push(getRandomInt(0, 9));
  }
  setTimeout(() => {
    const JsonStringify = JSON.stringify(arr);
    const shortStringify = serialize(arr);
    const deStringify = deserialize(shortStringify);
    const effect = (shortStringify.length * 100) / JsonStringify.length;
    console.log("Test:", name, "Result:", effect, "%");
    console.log("JSON:", JsonStringify, "Length:", JsonStringify.length);
    console.log("Short:", shortStringify, "Length:", shortStringify.length);
    console.log("Origin:", arr, "Deserialized:", deStringify);
    console.log(
      "Arrays are equal?",
      arr.length === deStringify.length &&
        arr.every((value, index) => value === deStringify[index])
    );
  }, 0);
}

function test07() {
  const name = "All numbers two digital";
  const arr = [];
  for (let i = 0; i < 1000; i++) {
    arr.push(getRandomInt(10, 99));
  }
  setTimeout(() => {
    const JsonStringify = JSON.stringify(arr);
    const shortStringify = serialize(arr);
    const deStringify = deserialize(shortStringify);
    const effect = (shortStringify.length * 100) / JsonStringify.length;
    console.log("Test:", name, "Result:", effect, "%");
    console.log("JSON:", JsonStringify, "Length:", JsonStringify.length);
    console.log("Short:", shortStringify, "Length:", shortStringify.length);
    console.log("Origin:", arr, "Deserialized:", deStringify);
    console.log(
      "Arrays are equal?",
      arr.length === deStringify.length &&
        arr.every((value, index) => value === deStringify[index])
    );
  }, 0);
}

function test08() {
  const name = "All numbers three digital";
  const arr = [];
  for (let i = 0; i < 1000; i++) {
    arr.push(getRandomInt(100, 300));
  }
  setTimeout(() => {
    const JsonStringify = JSON.stringify(arr);
    const shortStringify = serialize(arr);
    const deStringify = deserialize(shortStringify);
    const effect = (shortStringify.length * 100) / JsonStringify.length;
    console.log("Test:", name, "Result:", effect, "%");
    console.log("JSON:", JsonStringify, "Length:", JsonStringify.length);
    console.log("Short:", shortStringify, "Length:", shortStringify.length);
    console.log("Origin:", arr, "Deserialized:", deStringify);
    console.log(
      "Arrays are equal?",
      arr.length === deStringify.length &&
        arr.every((value, index) => value === deStringify[index])
    );
  }, 0);
}

function test09() {
  const name = "All numbers three times";
  const arr = [];
  for (let i = 0; i < 301; i++) {
    arr.push(i);
    arr.push(i);
    arr.push(i);
  }
  setTimeout(() => {
    const JsonStringify = JSON.stringify(arr);
    const shortStringify = serialize(arr);
    const deStringify = deserialize(shortStringify);
    const effect = (shortStringify.length * 100) / JsonStringify.length;
    console.log("Test:", name, "Result:", effect, "%");
    console.log("JSON:", JsonStringify, "Length:", JsonStringify.length);
    console.log("Short:", shortStringify, "Length:", shortStringify.length);
    console.log("Origin:", arr, "Deserialized:", deStringify);
    console.log(
      "Arrays are equal?",
      arr.length === deStringify.length &&
        arr.every((value, index) => value === deStringify[index])
    );
  }, 0);
}

test01();
test02();
test03();
test04();
test05();
test06();
test07();
test08();
test09();

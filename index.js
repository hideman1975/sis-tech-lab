import { asciiMap } from "./ascii.js";

//Ascii map for serialization
const reverseAsciiMap = new Map();
asciiMap.forEach((value, key) => {
  reverseAsciiMap.set(value, key);
});

// Serialization function
export function serialize(arr) {
  let desArr = "";
  arr.forEach((item) => {
    if (item < 151) {
      desArr = desArr + reverseAsciiMap.get(item);
    } else {
      let ost = item - 150;
      desArr = desArr + ",";
      desArr = desArr + reverseAsciiMap.get(150);
      desArr = desArr + reverseAsciiMap.get(ost);
    }
  });
  return desArr;
}

// Deserialization function
export function deserialize(str) {
  let ar = [...str];
  let desAr = [];
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] === ",") {
      i++;
      let item = asciiMap.get(ar[i]);
      i++;
      item = item + asciiMap.get(ar[i]);
      desAr.push(item);
    } else {
      let item = asciiMap.get(ar[i]);
      desAr.push(item);
    }
  }
  return desAr;
}

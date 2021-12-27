// 비구조화 할당
// 객체, 배열 안의 값을 추출해서 변수, 상수 안에 바로 선언하는 문법

// 1. 객체
const object = { a: 1, b: 2 };

// const a = object.a;
// const b = object.b;

// object 내의 키값과 동일한 상수를 만든다.
const { a, b } = object;

console.log(a, b);

// 2. 배열
const array = [1, 2];
const [one, two] = array;
console.log(one, two);

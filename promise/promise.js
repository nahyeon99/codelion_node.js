function sayHello() {
  return new Promise((resolve, reject) => {
    resolve("hello!!!");
    reject(new error());
  });
}

sayHello()
  .then((resolvedData) => {
    console.log(resolvedData);
    return resolvedData;
  })
  .then((resolvedData) => {
    console.log(resolvedData);
    return resolvedData;
  })
  .then((resolvedData) => {
    console.log(resolvedData);
  })
  .catch((error) => {
    console.log(error);
  });

async function test() {
  const hello1 = await sayHello();
  console.log(hello1);
}

test();

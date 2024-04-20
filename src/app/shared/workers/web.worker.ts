import { printNumbers } from "../common";


// addEventListener('message', ({ event }) => {
//   console.log("data in worker", data)
//   const startNumber = data;
//   printNumbers(startNumber);
// });

// another way
self.onmessage = function (data) {
  console.log("data in worker", data)
  const startNumber = data.data;
  printNumbers(startNumber);
  // // for checking error handling uncomment below line
  // throw new Error("number is 10")
};

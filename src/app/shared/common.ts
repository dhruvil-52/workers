export function printNumbers(data) {
    console.log("7 worker", data)
    let currentNumber = data.startingNumber;
    while (currentNumber < 100) {
        self.postMessage(currentNumber);
        currentNumber++;
    }
}

var numbers = [];

function addNumber() {
    var numberInput = document.getElementById('numberInput');
    var number = parseInt(numberInput.value);
    if (!isNaN(number)) {
        numbers.push(number);
        numberInput.value = '';
    }
}
//1. Tổng các số dương trong mảng
function calculateSumPositive() {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            sum += numbers[i];
        }
    }
    displayResult("Tổng số dương: " + sum);
}

function displayResult(result) {
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = result;
}
//2. Đếm có bao nhiêu số dương trong mảng.
function countPositiveNumbers() {
    var count = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            count++;
        }
    }
    displayResult("Số lượng số dương trong mảng: " + count);
}
//3. Tìm số nhỏ nhất trong mảng.
function findMinNumber() {
    if (numbers.length === 0) {
        displayResult("Mảng rỗng.");
        return;
    }
    var min = Math.min.apply(null, numbers);
    displayResult("Số nhỏ nhất trong mảng: " + min);
}
//4. Tìm số dương nhỏ nhất trong mảng.
function findMinPositiveNumber() {
    var positiveNumbers = numbers.filter(function(number) {
        return number > 0;
    });
    if (positiveNumbers.length === 0) {
        displayResult("Không có số dương trong mảng.");
        return;
    }
    var minPositive = Math.min.apply(null, positiveNumbers);
    displayResult("Số dương nhỏ nhất trong mảng: " + minPositive);
}
//5. Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1
function findLastEvenNumber() {
    var lastEvenIndex = -1;
    for (var i = numbers.length - 1; i >= 0; i--) {
        if (numbers[i] % 2 === 0) {
            lastEvenIndex = i;
            break;
        }
    }
    if (lastEvenIndex === -1) {
        displayResult("Mảng không có số chẵn.");
    } else {
        displayResult("Số chẵn cuối cùng trong mảng: " + numbers[lastEvenIndex]);
    }
}
//6. Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị).
function swapValues() {
    var position1 = parseInt(prompt("Nhập vị trí thứ nhất:"));
    var position2 = parseInt(prompt("Nhập vị trí thứ hai:"));
    
    if (!isNaN(position1) && !isNaN(position2) && position1 >= 0 && position1 < numbers.length && position2 >= 0 && position2 < numbers.length) {
        var temp = numbers[position1];
        numbers[position1] = numbers[position2];
        numbers[position2] = temp;
        displayResult("Đã đổi chỗ giá trị tại vị trí " + position1 + " và " + position2);
    } else {
        displayResult("Vị trí không hợp lệ.");
    }
}
//7. Sắp xếp mảng theo thứ tự tăng dần
function sortArrayAscending() {
    numbers.sort(function(a, b) {
        return a - b;
    });
    displayResult("Mảng sau khi sắp xếp theo thứ tự tăng dần: " + numbers);
}
//8. Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1
function findFirstPrimeNumber() {
    var firstPrime = -1;

    for (var i = 0; i < numbers.length; i++) {
        if (isPrime(numbers[i])) {
            firstPrime = numbers[i];
            break;
        }
    }

    if (firstPrime === -1) {
        displayResult("Mảng không có số nguyên tố.");
    } else {
        displayResult("Số nguyên tố đầu tiên trong mảng: " + firstPrime);
    }
}

function isPrime(number) {
    if (number <= 1) return false;
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
//9. Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
var realNumbers = []; // Mảng số thực

function addRealNumber() {
    var realNumberInput = parseFloat(prompt("Nhập số thực:"));
    if (!isNaN(realNumberInput)) {
        realNumbers.push(realNumberInput);
    }
}

function countIntegersInRealArray() {
    var integerCount = 0;

    for (var i = 0; i < realNumbers.length; i++) {
        if (Number.isInteger(realNumbers[i]) || realNumbers[i] % 1 == 0) {
            integerCount++;
        }
    }

    displayResult("Trong mảng số thực, có " + integerCount + " số nguyên.");
}
//10. So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn

function comparePositiveAndNegativeCount() {
    var positiveCount = 0;
    var negativeCount = 0;

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            positiveCount++;
        } else if (numbers[i] < 0) {
            negativeCount++;
        }
    }

    if (positiveCount > negativeCount) {
        displayResult("Số lượng số dương nhiều hơn số lượng số âm.");
    } else if (positiveCount < negativeCount) {
        displayResult("Số lượng số âm nhiều hơn số lượng số dương.");
    } else {
        displayResult("Số lượng số dương và số âm bằng nhau.");
    }
}



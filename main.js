let arr = [];
let floatArr = [];

function updateArrayDisplay() {
  document.getElementById('arrayDisplay').textContent = JSON.stringify(arr);
}

function addNumber() {
  const input = document.getElementById('numberInput');
  const number = parseInt(input.value);
  if (!isNaN(number)) {
    arr.push(number);
    updateArrayDisplay();
  }
  input.value = '';
}

function sumPositive() {
  let sum = 0 ; 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) sum += arr[i];
  }
  document.getElementById('result1').textContent = `Tổng số dương: ${sum}`;
}

function countPositive() {
  let count = 0 ; 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) count++;
  }
  document.getElementById('result2').textContent = `Số lượng số dương: ${count}`;
}

function findMin() {
  arr.sort((a, b) => a - b);
  const min = arr[0];
  document.getElementById('result3').textContent = `Số nhỏ nhất: ${min}`;
}

function findMinPositive() {
  arr.sort((a, b) => a - b);
  let min = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      min = arr[i];
      break;
    }
  }
  document.getElementById('result4').textContent = `Số dương nhỏ nhất: ${min}`;
}

function findLastEven() {
  let result = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      result = arr[i];
    }
  }
  document.getElementById('result5').textContent = `Số chẵn cuối cùng: ${result}`;
}

function swapPositions() {
  const index1 = parseInt(document.getElementById('swapIndex1').value);
  const index2 = parseInt(document.getElementById('swapIndex2').value);
  if (
    !isNaN(index1) &&
    !isNaN(index2) &&
    index1 >= 0 && index1 < arr.length &&
    index2 >= 0 && index2 < arr.length
  ) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    updateArrayDisplay();
    document.getElementById('result6').textContent = `Mảng sau khi đổi: ${arr}`;
  } else {
    document.getElementById('result6').textContent = 'Vị trí không hợp lệ.';
  }
}

function sortArray() {
  arr.sort((a, b) => a - b);
  updateArrayDisplay();
  document.getElementById('result7').textContent = `Mảng sau khi sắp xếp: ${arr}`;
}

function isPrime(n) {
  if (n < 2 || !Number.isInteger(n)) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function findFirstPrime() {
  let result = -1;
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      result = arr[i];
      break;
    }
  }
  document.getElementById('result8').textContent = `Số nguyên tố đầu tiên: ${result}`;
}


function addFloat() {
  const input = document.getElementById('floatInput');
  const num = parseFloat(input.value);
  if (!isNaN(num)) {
    floatArr.push(num);
    document.getElementById('arry9').textContent = `Mảng hiện tại: ${floatArr}`;
  }
  input.value = '';
}

function countIntegersInFloatArr() {
  let count = 0;
  for (let i = 0; i < floatArr.length; i++) {
    if (Number.isInteger(floatArr[i])) {
      count++;
    }
  }
  document.getElementById('result9').textContent = `Có ${count} số nguyên trong mảng số thực.`;
}


function comparePosNeg() {
  let posCount = 0;
  let negCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      posCount++;
    } else if (arr[i] < 0) {
      negCount++;
    }
  }

  let result = '';
  if (posCount > negCount) {
    result = 'Số dương nhiều hơn.';
  } else if (negCount > posCount) {
    result = 'Số âm nhiều hơn.';
  } else {
    result = 'Số dương và số âm bằng nhau.';
  }

  document.getElementById('result10').textContent = result;
}


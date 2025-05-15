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
  const sum = arr.filter(n => n > 0).reduce((a, b) => a + b, 0);
  document.getElementById('result1').textContent = `Tổng số dương: ${sum}`;
}

function countPositive() {
  const count = arr.filter(n => n > 0).length;
  document.getElementById('result2').textContent = `Số lượng số dương: ${count}`;
}

function findMin() {
  if (arr.length === 0) {
    document.getElementById('result3').textContent = 'Mảng rỗng.';
    return;
  }
  const min = Math.min(...arr);
  document.getElementById('result3').textContent = `Số nhỏ nhất: ${min}`;
}

function findMinPositive() {
  const positives = arr.filter(n => n > 0);
  if (positives.length === 0) {
    document.getElementById('result4').textContent = 'Không có số dương nào.';
    return;
  }
  const min = Math.min(...positives);
  document.getElementById('result4').textContent = `Số dương nhỏ nhất: ${min}`;
}

function findLastEven() {
  const even = [...arr].reverse().find(n => n % 2 === 0);
  const result = even !== undefined ? even : -1;
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
  const prime = arr.find(isPrime);
  const result = prime !== undefined ? prime : -1;
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
  const count = floatArr.filter(Number.isInteger).length;
  document.getElementById('result9').textContent = `Có ${count} số nguyên trong mảng số thực.`;
}

function comparePosNeg() {
  const posCount = arr.filter(n => n > 0).length;
  const negCount = arr.filter(n => n < 0).length;
  let result = '';

  if (posCount > negCount) result = 'Số dương nhiều hơn.';
  else if (negCount > posCount) result = 'Số âm nhiều hơn.';
  else result = 'Số dương và số âm bằng nhau.';

  document.getElementById('result10').textContent = result;
}

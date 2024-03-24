var arrNumber = [];
document.querySelector("#array").innerHTML = arrNumber;
function hanldeAdd() {
  var number = +document.querySelector("#themSo").value;

  arrNumber.push(number);

  document.querySelector("#array").innerHTML = arrNumber;
}

document.querySelector("#hanldeAdd").onclick = function () {
  hanldeAdd();
};
// Bài 1
function handleSumEven() {
  var sum = 0;

  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] >= 0) {
      sum += arrNumber[i];
    }
  }

  document.querySelector("#resultSum").innerHTML = `Tổng số dương là: ${sum}`;
}

document.querySelector("#handleSumEven").onclick = function () {
  handleSumEven();
};
// Bài 2

function countEvenNumber() {
  var totalNumber = 0;
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] >= 0) {
      totalNumber += 1;
    }
  }
  document.querySelector(
    "#result2"
  ).innerHTML = `Có: ${totalNumber} số dương trong mảng`;
}
document.querySelector("#countEvenNumber").onclick = function () {
  countEvenNumber();
};

// Bài 3
function minNumber() {
  var min = arrNumber[0];
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] < min) {
      min = arrNumber[i];
    }
  }
  document.querySelector(
    "#result3"
  ).innerHTML = `Số nhỏ nhất trong mảng là: ${min}`;
}
document.querySelector("#minNumber").onclick = function () {
  minNumber();
};

// Bài 4
function minPositiveNumber() {
  var minPositive = arrNumber[0];
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] >= 0) {
      if (arrNumber[i] < minPositive) {
        minPositive = arrNumber[i];
      }
    }
  }
  document.querySelector(
    "#result4"
  ).innerHTML = `Số dương nhỏ nhất trong mảng là: ${minPositive}`;
}
document.querySelector("#minPositiveNumber").onclick = function () {
  minPositiveNumber();
};

// Bài 5

function lastEvenNumber() {
  var lastNumber = -1;
  for (var i = arrNumber.length - 1; i >= 0; i--) {
    if (arrNumber[i] % 2 === 0) {
      lastNumber = arrNumber[i];
      break;
    }
  }
  document.querySelector(
    "#result5"
  ).innerHTML = `Số chẵn cuối cùng trong mảng là: ${lastNumber}`;
}
document.querySelector("#lastEvenNumber").onclick = function () {
  lastEvenNumber();
};

// Bài 6
function changeIndex() {
  var viTri1 = +document.querySelector("#viTri1").value;
  var viTri2 = +document.querySelector("#viTri2").value;
  var viTriTrungGian, note;

  if (
    viTri1 >= arrNumber.length ||
    viTri2 >= arrNumber.length ||
    viTri1 < 0 ||
    viTri2 < 0
  ) {
    note = "Hãy nhập lại giá trị vị trí";
  } else {
    viTriTrungGian = arrNumber[viTri1];
    arrNumber[viTri1] = arrNumber[viTri2];
    arrNumber[viTri2] = viTriTrungGian;
    note = `Mảng sau khi đổi chỗ là: ${arrNumber}`;
  }
  document.querySelector("#result6").innerHTML = note;
}
document.querySelector("#changeIndex").onclick = function () {
  changeIndex();
};

// Bài 7
function sortNumber() {
  var increasingArr = arrNumber.sort(function (a, b) {
    return a - b;
  });
  document.querySelector("#result7").innerHTML = increasingArr;
}
document.querySelector("#sort").onclick = function () {
  sortNumber();
};

// Bài 8

function isPrime(num) {
  // Số nguyên tố phải lớn hơn 1
  if (num <= 1) return false;
  // Kiểm tra các ước từ 2 đến căn bậc hai của num
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // Nếu có ước nào thì không phải là số nguyên tố
    }
  }
  return true; // Nếu không có ước nào thì là số nguyên tố
}

function firstPrime() {
  var firstPrime = -1;
  for (i = 0; i < arrNumber.length; i++) {
    if (isPrime(arrNumber[i])) {
      firstPrime = arrNumber[i];
      break;
    }
  }
  document.querySelector("#result8").innerHTML = firstPrime;
}
document.querySelector("#firstPrime").onclick = function () {
  firstPrime();
};

// Bài 10:

function soSanh() {
  var negativeNumber = 0;
  var positiveNumber = 0;
  var ketQua;
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] >= 0) {
      positiveNumber += 1;
    } else {
      negativeNumber += 1;
    }
  }
  if (positiveNumber > negativeNumber) {
    ketQua = "Số dương nhiều hơn số âm";
  } else if (positiveNumber < negativeNumber) {
    ketQua = "Số âm nhiều hơn số dương";
  } else {
    ketQua = "Số lượng số dương bằng số âm";
  }
  document.querySelector("#result10").innerHTML = ketQua;
}
document.querySelector("#soSanh").onclick = function () {
  soSanh();
};

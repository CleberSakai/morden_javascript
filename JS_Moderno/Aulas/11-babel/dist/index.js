"use strict";

var average = function average() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  var sum = numbers.reduce(function (accum, numbers) {
    return accum + numbers;
  }, 0);
  return sum / numbers.length;
};
console.log(average(10, 20, 20, 30));
var weightedAverage = function weightedAverage() {
  for (var _len2 = arguments.length, entries = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    entries[_key2] = arguments[_key2];
  }
  var sum = entries.reduce(function (accum, _ref) {
    var number = _ref.number,
      weight = _ref.weight;
    return accum + number * (weight !== null && weight !== void 0 ? weight : 1);
  }, 0);
  var weightSum = entries.reduce(function (accum, entry) {
    var _entry$weight;
    return accum + ((_entry$weight = entry.weight) !== null && _entry$weight !== void 0 ? _entry$weight : 1);
  }, 0);
  return sum / weightSum;
};
console.log("M\xE9dia Ponderada: ".concat(weightedAverage({
  number: 9,
  weight: 3
}, {
  number: 7
}, {
  number: 10,
  weight: 1
})));
var median = function median() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  var orderedNumberns = [].concat(numbers).sort(function (a, b) {
    return a - b;
  }); // ordenando os numeros em sequencia
  var middle = Math.floor(orderedNumberns.length / 2); // pegando exatamente a metade do array

  if (orderedNumberns.length % 2 !== 0) {
    return orderedNumberns[middle];
  }
  var firstMedian = orderedNumberns[middle - 1]; // pega o meio -1 
  var secondMedian = orderedNumberns[middle]; // pega o elemento do meio
  return average(firstMedian, secondMedian);
};
console.log("Mediana: ".concat(median(2, 5, 99, 4, 42, 7)));
console.log("Mediana: ".concat(median(15, 14, 8, 7, 3)));
var mode = function mode() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  // [ [n, qtd], [n, qtd] ]
  var qnt = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return num === n;
    }).length // usando o formato n => num === n / retorno diretamente, sem precisar do return
    ];
  });
  qnt.sort(function (a, b) {
    return b[1] - a[1];
  });
  return qnt[0][0];
};
console.log("Moda: ".concat(mode(1, 1, 99, 99, 99, 99, 99, 99, 99, 99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)));
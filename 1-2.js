'use strict'
var n = prompt('Enter the number')
n = Math.round(n * 100) / 100;
n = String(n);
var arr = n.split('.');
if (arr[0].length > 3) {
  arr[0] = arr[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ');
}
n = String(arr[0]) + ',' + String(arr[1]);
alert(n);
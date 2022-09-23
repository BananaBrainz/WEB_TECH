alert("Массив с рандомной длиной, заполненный произвольными значениями от -100 до 100 и найденые в нём Макс. и Мин. значения при помощью функции");
function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
let arr = [];
let minEl = 100;
let maxEl = -100;
for (let i = 0; i <= randomInteger(10, 50); i++) {
	arr[i] = randomInteger(-100, 100);
	if (arr[i] < minEl) {
	    minEl=arr[i];
	    }
    else if (arr[i] > maxEl) {
        maxEl=arr[i];
    }
}
$(document).ready(function(){
		let str = 'Массив на '+arr.length+' элементов<br>';
        for (let i = 0; i< arr.length; i++  ) {
            str +='<table style="border: 1px solid black;float: left;"><tr><td>';
            if (arr[i]!==undefined) str +=(i+1)+':</td></tr><tr><td> '+arr[i]+'</td></tr></table>';
        }
        
        str1 = '<table style="border: 1px solid black;float: left;"><tr><td>Макс. элемент = </td><td>'+maxEl+'</td></tr><tr><td> Мин. элемент = </td><td>'+minEl+'</td></tr></table>';
        out_arr.innerHTML = str;
        out_max_min.innerHTML = str1;
});
console.log(arr);
console.log(minEl);
console.log(maxEl);


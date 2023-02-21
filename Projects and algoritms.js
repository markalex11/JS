
//PROJECTS FROM FREECODECUMP

function palindrome(str) {
  const newStr = str.toLowerCase();
  const myRegex = /[A-Za-z0-9]/g;
  const filtered = newStr.match(myRegex);
  const copy = [...filtered];
  const myReverse = copy.reverse();

  return filtered.join("") === myReverse.join("")
}



function convertToRoman(num) {
  const arabic = { M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1
    };

  let result = "";
  for (let key in arabic)
    while ( num >= arabic[key] ) {
      result += key;
      num -= arabic[key];
    }

  return result;
}



function rot13(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const result = [];

  const cesar = function(char) {
    const position = alphabet.indexOf(char);
    const myRow = alphabet.slice(position) + alphabet.slice(0,position);
    return myRow[13];
  }

  for(let i = 0;i < str.length; i++){
    if(/[A-Z]/.test(str[i])){
      result.push(cesar(str[i]))
    } else {
      result.push(str[i]);
    }
  }

  return result.join("");
}



function telephoneCheck(str) {
  const myRegex = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/;
  return myRegex.test(str);
}



function checkCashRegister(price, cash, cid) {
  const money = [["ONE HUNDRED", 10000],["TWENTY", 2000],["TEN", 1000],["FIVE", 500],["ONE", 100],["QUARTER", 25],["DIME", 10],["NICKEL", 5],["PENNY", 1]]
  ;
  let change = cash * 100 - price * 100;
  let cidSum = 0;
  for(let i = 0; i < cid.length; i++){
    cidSum += cid[i][1]*100;
  }
  if(change > cidSum){
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }else if (change === cidSum){
    return {status: "CLOSED", change: cid};
  }else{
    const result = [];
    cid.reverse();
    for(let i = 0; i < cid.length; i++){
      let curr = [cid[i][0],0];
      cid[i][1] = cid[i][1]*100;
       
      while(change >= money[i][1] && cid[i][1] > 0){
        change -= money[i][1];
        cid[i][1] -= money[i][1];        
        curr[1] += money[i][1]/100;
        
      }
      if(curr[1] > 0){
        result.push(curr);       
      }     
    }
      if(change > 0) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
      }
      return {status: "OPEN", change: result}
  }
  

  
  return ;
}

// USEFUL ALGORITMS

// чтобы в массиве каждый элемент повторялся максимум энное количество раз
function deleteNth(arr,x){                                                               
  var obj = {}
  return arr.filter(function(number){
    obj[number] = obj[number] ? obj[number] + 1 : 1
    return obj[number] <= x
  })
}

// если в обьекте есть разработчик на языке Пайтон вывести его : иначе 
function getFirstPython(list) {
  var res = list.find(x => x.language=='Python');
  return res ? res.firstName+', '+res.country : 'There will be no Python developers';
}


function alphabetWar(fight){
  const value = {
    'w': 4,
    'p': 3,
    'b': 2,
    's': 1,
    'm': 4,
    'q': 3,
    'd': 2,
    'z': 1
  }
  let left = fight.split('').reduce((acc,el)=>
                                (el == 'w'||el == 'p'|| el == 'b'|| el == 's')
                                ? acc + value[el] : acc
                               ,0)
  let right = fight.split('').reduce((acc,el)=>
                                (el == 'm'||el == 'q'|| el == 'd'|| el == 'z')
                                ? acc + value[el] : acc
                               ,0)
}


// дано обьект : вернуть количество разработчиков которые из Европы и работают на JavaScript
function countDevelopers(list) {
  return list.reduce((count, dev) => 
    (dev.continent === 'Europe' && dev.language === 'JavaScript')
      ? count + 1 : count
    , 0);
}

// рассчитать на сколько дней хватит дэйзика
function evaporator(content, evap_per_day, threshold){ 
  let result = 0;
  let percentage = 100;
  while(percentage > threshold){
    percentage -= percentage * (evap_per_day / 100);
    result += 1
  }
  return result
}


//проверить если с углимы которые нам даны можно сделать треугольник
function isTriangle(a,b,c)
{
  [a, b, c] = [a, b, c].sort((x, y) => x-y);
  
  return a+b > c;
}



//дается цыфра , нужно вернуть ее как строку 
function switchItUp(number){
  switch (number) {
      case 0:
        return "Zero";
      case 1:
        return "One";
      case 2:
        return "Two";
      case 3:
        return "Three";
      case 4:
        return "Four";
      case 5:
        return "Five";
      case 6: 
        return "Six";
      case 7:
        return "Seven";
      case 8: 
        return "Eight";
      case 9: 
        return "Nine";
    }
}


// задача с картой города и туристом , долго писать , вспоминай!
function isValidWalk(walk) {
  function count(val) {
    return walk.filter(function(a){return a==val;}).length;
  }
  return walk.length==10 && count('n')==count('s') && count('w')==count('e');
}

// функция с скобками
function validBraces(braces){
  for(let i = 0; i <= braces.length*2;i++){
    braces = braces.split('()').join('').split('[]').join('').split('{}').join('')
   
  }
  return braces == ''
}


//ограничивает количество повторений в массиве
function deleteNth(arr,n){
  const a = {}
  const result = [];
  for(let i = 0; i < arr.length; i++){
    if(!a[arr[i]]){
      a[arr[i]] = 1
    }else{
      a[arr[i]] += 1
    }
    if(a[arr[i]]<=n){
      result.push(arr[i])
    }
  }
  return result
}

//найти самое повторяющееся значение 
function mostFrequentItemCount(collection) {
  if(!collection.length){
    return 0
  }
  const count =  collection.reduce((acc,el)=>{
                    acc[el]? acc[el] += 1: acc[el] = 1;
                    return acc
  },{})
  return Math.max(...Object.values(count))
}
// сколько людей лайкнуло пост
function likes(names) {
  if(!names.length){
    return "no one likes this"
  }else if(names.length === 1){
    return  names[0] + ' likes this'
  }else if(names.length === 2){
    return names[0] + ' and ' + names[1] + ' like this'
  }else if(names.length === 3){
    return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'
  }else {
    return names[0] + ', ' + names[1] + ' and ' + (names.length-2) +' others like this'
  }
  
}

//сколько разных языков программирования будут на конференции
function countLanguages(list) {
  return list.map(el => el.language).reduce((acc,el)=>{
                                    acc[el]? acc[el] += 1: acc[el] = 1;
                                    return acc
  },{})
}


//первый разработчик в обьекте который работает на пайтоне
function getFirstPython(list) {
  if(!list.some(el => el.language == 'Python')){
    return 'There will be no Python developers'
  }
  return list.map(el => el.language == 'Python'?el.firstName + ', '+ el.country : 0).filter(el => el != 0)[0]
}


//цепочка палиндром
var palindromeChainLength = function(n) {
  n = n.toString();
  const r = n.toString().split('').reverse().join('');
  if (n == r){
    return 0
  } else {
    return 1 + palindromeChainLength(Number(r)+Number(n))
  }
    
};

//сумма чисел от нуля до н
var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
     if(count == 0){
       return '0=0'
     }else if(count < 0){
       return (count+'')+'<0'
     } else {
       return Array.from({length: count+1}, (_, i)=> i).join('+') + ' = ' + Array.from({length: count+1}, (_, i)=> i)
         .reduce((acc,el)=> acc+el)
     }
  };

  return SequenceSum;

})();

//сумма чисел массива в кубе
function sumCubes(n){
  return Array.from({length: n}, (_, i)=> i+1).reduce((acc,el)=> acc + Math.pow(el,3),0)
}


//тут и так все понятно
function reverseNumber(n) {
  if(n < 0){
    const a = (Math.abs(n)+'').split('').reverse();
    return  Number(a.join('')) * (-1)
  }else{
    const a = (n+'').split('').reverse();
    return Number(a.join(''))
    }
  
}

//задача с делением на 3 и 5
function fizzbuzz(n){
  return Array.from({length: n}, (_, i)=> i+1).reduce((acc,el)=>{ 
         acc.push((el%3==0 && el%5==0)?"FizzBuzz":
                   el%3==0?'Fizz':
                   el%5==0?'Buzz':
                   el);
                                               
                   return acc
    
  },[])
}



function wordsToMarks(string){
  const alph = [0,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  string = string.split('');
  return string.map(el => alph.indexOf(el)).reduce((acc,el)=>acc+el,0)
}


//моя любимая рекурсия:)
function factorial(n){
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
  
}


// задача с длинной строк
function mxdiflg(a1, a2) {
  if(a1.length * a2.length === 0){
    return -1
  }
   const hA1 = Math.max(...a1.map(el => el.length));
   const hA2 = Math.max(...a2.map(el => el.length));
  
   const lA1 = Math.min(...a1.map(el => el.length));
   const lA2 = Math.min(...a2.map(el => el.length));
  
   const first = hA1 - lA2;
   const second = hA2 - lA1;
  
   if(first > second){
     return first
   } else {
     return second
   }
}


//проверка скидочного купона на дату и валидность
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  
  return  enteredCode === correctCode && new Date(currentDate) <= new Date(expirationDate)
}


function sumDigits(number) {
  return (number+'').match(/\d/g).reduce((acc,el)=> acc + Number(el),0)
}

//
function maxMultiple(divisor, bound){
  
  for(let i = bound; i > 1; i--){
    if(i%divisor == 0){
      return i
    }
  }
}


function smallEnough(a, limit){
  return !a.some(el => el > limit)
}

function nbDig(n, d) {
  const myR = new RegExp(d,'g');
  let count = 0;
  for(let i = 0; i <= n; i++){
    if(myR.test(Math.pow(i,2)+'')){      
      count += (Math.pow(i,2)+'').match(myR).length;
    }
  }
return count
}


//задача с депозитом
function calculateYears(principal, interest, tax, desired) {
  let years = 0;
  while(principal < desired){
    let first = principal * interest;
    principal += first - (first*tax)
    years++
  }
    return years
}
//


function stray(numbers) {
  
  return numbers.find(n => numbers.indexOf(n) === numbers.lastIndexOf(n))
}

function titleCase(title, minorWords) {
  if(title == ''){
    return ''
  }
  if(!minorWords){
    return title.split(' ').map(el => el[0].toUpperCase()+el.slice(1).toLowerCase()).join(' ')
  }
  
  title = title.toLowerCase();
  minorWords = minorWords.toLowerCase();
  let result = title.split(' ').map(el=> minorWords.split(' ').some(v => v == el)?el.toLowerCase(): el[0].toUpperCase()+el.slice(1).toLowerCase()).join(' ')
  return result[0].toUpperCase()+result.slice(1)
}

function automorphic(n){
  return Math.pow(n,2).toString().endsWith(n.toString())?"Automorphic":"Not!!"
}

function parse( data ){
  const result = [];
  [...data].reduce((acc, el) => {
    el === 'i'? acc++:
    el === 'd'? acc--:
    el === 's'? acc = Math.pow(acc, 2):
    el === 'o'? result.push(acc): acc
    
    return acc;
  }, 0);
  
  return result;
}


function triangle(row) {
  let result = ''
 if(row.length == 1){
   return row
 }
   
   for(let i = 0; i < row.length-1; i++){
     if(row[i]==row[i+1]){
       result += row[i];
     }else{
       result += 'RGB'.replace(row[i],'').replace(row[i+1],'')
     }
   }
   if(result.length > 1){
     return triangle(result)
   }else{
     return result
   }
 
 }

 function stockList(listOfArt, listOfCat){
  if(!listOfArt.length || !listOfCat.length){
    return ''
  }
  const obj = {};
  const result = [];
  listOfCat.map(el=>obj[el]=0);
  listOfArt.forEach(el => obj.hasOwnProperty(el[0])? obj[el[0]] += Number(el.match(/\d/g).join('')):el);
  for(let key in obj){
    result.push('('+key+' : '+obj[key]+')')
  }
  
  return result.join(' - ')
}

function solve(arr) {
  const result = [];
  arr = arr.reverse();
  for(let i = 0; i < arr.length; i++){
    if(result.indexOf(arr[i])==-1){
      result.push(arr[i])
    }
  }
  
  return result.reverse()
  
}

function convertCtoF(celsius) {
  let fahrenheit = celsius * (9/5) + 32;
  return fahrenheit;
}

convertCtoF(30);


function reverseString(str) {                                                                         
  let resultStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    resultStr = resultStr + str[i];
  }

  return resultStr;
}


function factorialize(num) {
  if (num < 0) {
    return ;
  } else if (num == 0) {
    return 1 ;
  } else {
    return num * factorialize(num - 1);
  }

}

function findLongestWordLength(str) {
  let words = str.split(' ')
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  return maxLength;

}

function largestOfFour(arr) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;
  }

  return results;
}

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

function repeatStringNumTimes(str, num) {
  let resultStr = '';
  if (num <= 0) {
    return '';
  } else {
    for (let i = num; i > 0; i--)
    resultStr += str;
  }
  return resultStr;
}

function truncateString(str, num) {
  if (str.length > num ) {
    return str.slice(0,num) + '...';
  } else {
    return str;
  }
}


function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return num = arr[i];
    } else {
      num = undefined;
    }
  }
  return num;
}

function booWho(bool) {
  if (typeof bool === 'boolean') {
    return true;
  } else {
    return false;
  }
  
}

function titleCase(str) {
  const newTitle = str.split(" ");   
  const updatedTitle = [];            
  for (let st in newTitle) {              
    updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();  
                                                                                                                                                         
  }
  return updatedTitle.join(" ");  
}

function bouncer(arr) {
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {                                        
      resultArr.push(arr[i]);
    }
  }
  return resultArr;
}


function getIndexToIns(arr, num) {
  arr.sort((a,b) => a - b);                             
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) { 
      return i;  
    }
  }
  return arr.length;                                   
} 

function mutation(arr) {
  const test = arr[1].toLowerCase();           
  const target = arr[0].toLowerCase();
   for (let i = 0; i < test.length; i++) {         
     if (target.indexOf(test[i]) < 0)               
      return false 
   }
   return true;
 }

 function chunkArrayInGroups(arr, size) {                                                 
  if (arr.length <= size) {
    return [arr];
  } else {
    return [arr.slice(0, size)].concat(
      chunkArrayInGroups(arr.slice(size), size)
    );
  }
}

Array.prototype.remove_ = function(integer_list, values_list){
  return integer_list.filter(el => values_list.indexOf(el)<0)
}


function isSameLanguage(list) {
  return new Set(list.map(el => el.language)).size === 1
}

function countLanguages(list) {
  return list.map(el => el.language).reduce((acc,el)=>{
                                    acc[el]? acc[el] += 1: acc[el] = 1;
                                    return acc
  },{})
}


function countRedBeads(n) {
  if(n<2){
    return 0
  }
  return (n-1)*2
}


function overTheRoad(address, n){
  return ((n*2)-address)+1
}

function isRubyComing(list) {
  return list.some(el => el.language == "Ruby")
}

function sortGiftCode(code){
  return [...code].sort().join('')
}

function isPowerOfTwo(n){
  return Number.isInteger(Math.log2(n))
  
}

function toNumberArray(stringarray){
  return stringarray.map(el => Number(el))
}

function hasUniqueChars(str){
  return str == [...new Set(str)].join('')
}

function switcheroo(x){
  return [...x].map(el=> el=='a'?'b':el=='b'?'a':'c').join('')
}
var greet = function(name) {
  return "Hello "+ name.slice(0,1).toUpperCase()+name.slice(1).toLowerCase()+'!'
};

function digits(n) {
  return n.toString().length
}

function findLongest(array){
  const a = array.map(el => el+'').sort((a,b)=>b.length-a.length)
  return Number(a[0])
}

function bump(x){
  return x.split('').reduce((acc,el)=> (el == 'n')? acc + 1: acc,0) <= 15
    ?"Woohoo!":
    "Car Dead"
 }

 function noOdds( values ){
  return values.filter(el => el%2==0)
}

function evenNumbers(array, number) {
  return array.filter(el=>el%2==0).slice(-number)
}

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  return Math.floor(Math.sqrt([...arguments].map(el=>el*el).reduce((acc,el)=>acc + el))/2)
}

function angle(n) {
  return (n-2)*180
}

function largestPairSum (numbers) {
  numbers = numbers.sort((a,b)=> b-a);
  return numbers[0]+numbers[1]
}

function getEvenNumbers(array){
  return array.filter(el => el%2 == 0)
}

function removeDuplicateWords (s) {
  return [...new Set(s.split(' '))].join(' ')
}

function sumOfMinimums(arr) {
  return arr.map(el => el.sort((a,b)=> a-b)).map(el => el[0]).reduce((acc,el)=> acc+el)
}

function balancedNum(number){
  if(number.toString().length < 3){
    return 'Balanced';
  }else if(number.toString().length%2==0){
    const a = number.toString()
                    .split('')
                    .slice(0,(number.toString().length/2)-1)
                    .reduce((acc,el)=> acc + Number(el),0);
    const b =  number.toString()
                    .split('')
                    .slice(-((number.toString().length/2)-1))
                    .reduce((acc,el)=> acc + Number(el),0);
    return b==a?"Balanced":"Not Balanced";
  }else{
    const a = number.toString()
                    .split('')
                    .slice(0,number.toString().length/2)
                    .reduce((acc,el)=> acc + Number(el),0);
    const b =  number.toString()
                    .split('')
                    .slice(-(number.toString().length/2))
                    .reduce((acc,el)=> acc + Number(el),0);
    
    return  b==a?"Balanced":"Not Balanced";
  }
 

}

function goodVsEvil(good, evil){
  const pos = [1,2,3,3,4,10];
  const neg = [1,2,2,2,3,5,10];
  let a =  good.split(' ').reduce((acc,el,i)=> acc + (Number(el)*pos[i]),0 );
  let b = evil.split(' ').reduce((acc,el,i)=> acc + (Number(el)*neg[i]),0 );
  return b>a?'Battle Result: Evil eradicates all trace of Good':
         a>b?'Battle Result: Good triumphs over Evil': 'Battle Result: No victor on this battle field'
   
}

function solve(arr) {
  const result = [];
  arr = arr.reverse();
  for(let i = 0; i < arr.length; i++){
    if(result.indexOf(arr[i])==-1){
      result.push(arr[i])
    }
  }
  
  return result.reverse()
  
}

function stockList(listOfArt, listOfCat){
  if(!listOfArt.length || !listOfCat.length){
    return ''
  }
  const obj = {};
  const result = [];
  listOfCat.map(el=>obj[el]=0);
  listOfArt.forEach(el => obj.hasOwnProperty(el[0])? obj[el[0]] += Number(el.match(/\d/g).join('')):el);
  for(let key in obj){
    result.push('('+key+' : '+obj[key]+')')
  }
  
  return result.join(' - ')
}

function triangle(row) {
  let result = ''
 if(row.length == 1){
   return row
 }
   
   for(let i = 0; i < row.length-1; i++){
     if(row[i]==row[i+1]){
       result += row[i];
     }else{
       result += 'RGB'.replace(row[i],'').replace(row[i+1],'')
     }
   }
   if(result.length > 1){
     return triangle(result)
   }else{
     return result
   }
 
 }

 function parse( data ){
  const result = [];
  [...data].reduce((acc, el) => {
    el === 'i'? acc++:
    el === 'd'? acc--:
    el === 's'? acc = Math.pow(acc, 2):
    el === 'o'? result.push(acc): acc
    
    return acc;
  }, 0);
  
  return result;
}


function titleCase(title, minorWords) {
  if(title == ''){
    return ''
  }
  if(!minorWords){
    return title.split(' ').map(el => el[0].toUpperCase()+el.slice(1).toLowerCase()).join(' ')
  }
  
  title = title.toLowerCase();
  minorWords = minorWords.toLowerCase();
  let result = title.split(' ').map(el=> minorWords.split(' ').some(v => v == el)?el.toLowerCase(): el[0].toUpperCase()+el.slice(1).toLowerCase()).join(' ')
  return result[0].toUpperCase()+result.slice(1)
}

function sqInRect(lng, wdth){
  const  result = [];
  if(lng == wdth) {
    return null
  }
  while(lng > 0 && wdth > 0){
    result.push(lng > wdth ? wdth : lng);
    lng > wdth ? lng -= wdth : wdth -= lng;
  }
  return result
}

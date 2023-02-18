
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

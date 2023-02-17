
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


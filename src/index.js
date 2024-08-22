module.exports = function check(str, bracketsConfig) {
  let firstElAr = [];
  let secondElAr = [];
  let buff = [];
  let buffCount = 0;
  for (let i = 0; i < bracketsConfig.length; i++) {
      firstElAr.push(bracketsConfig[i][0]);
      secondElAr.push(bracketsConfig[i][1]);
  }
  //console.log(firstElAr);
  //console.log(secondElAr);
  for (let i = 0; i < str.length; i++) {
      //console.log(str[i],"before", buff);
      for (let j = 0; j < firstElAr.length; j++) {
          if (str[i] === firstElAr[j]) {
              if (i !== 0 && buff[buffCount - 1] === str[i] && firstElAr[j] === secondElAr[j]) {
                  
              }
              else {
                buff.push(str[i]);
                buffCount++;
                continue;
              }
              
          }
          if (str[i] === secondElAr[j]) {
              //console.log("mid", buff);
              if (i === 0 && buffCount === 0) {
                  return false;
              }
              else if (buff[buffCount-1] === firstElAr[j]) {
                  buff.pop();
                  buffCount--;
              }
              else {
                  return false;
              }
          }
      }
      //console.log(buffCount, "after", buff);
      
  }
  if (buff.length !== 0) return false;
  return true;
}

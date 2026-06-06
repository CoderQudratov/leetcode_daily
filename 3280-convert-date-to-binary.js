//https://leetcode.com/problems/convert-date-to-binary/
var convertDateToBinary = function(date) {
    let arr = date.split("-");
    for(let i=0;i<arr.length;i++){
        arr[i]=parseInt(arr[i]).toString(2);
    }
    
    return arr.join("-");
};
let result=convertDateToBinary("2080-02-09");
console.log(result);

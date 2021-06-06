

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const userInput=[];

inp.on("line", (data) => {
  userInput.push(data);
});
inp.on("close",()=>{
    data1=userInput[0];
    data2=userInput[1].split(" ");
    const arr=[];
    const arr1=[];
    const arr2=[]
    var count;
    for(var i=0;i<data2.length;i++){
        count=0;
        for(var j=0;j<data2.length;j++){
            if (data2[i]==data2[j]){
                count+=1;
            }
        }
        arr.push(count);
    }
   var minimum=(Math.min(...arr));
   for(var k=0;k<arr.length;k++){
       if(minimum==arr[k]){
           arr1.push(k);
       }
   }
   if(arr1.length>1){
       for(var g=0;g<arr1.length;g++){
           arr2.push(data2[arr1[g]]);
       }
       //bubble Sort
   for(var t=0;t<arr2.length;t++){
       for (var e=0;e<(arr2.length-t-1);e++){
           if(arr2[e]<arr2[e+1]){
               var mini=arr2[e];
               arr2[e]=arr2[e+1];
               arr2[e+1]=mini;
           }
       }
   }
   console.log(...arr2);
   }
   else{
       console.log(...arr1);
   }
    
});
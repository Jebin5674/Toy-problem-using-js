let arr=[1,0,3,4,5,9,0,7,0];
let n=arr.length;
let c=0;
let count=0;
function countZero(arr,n){
    for(let i=0;i<n;i++){
        if(arr[i]!=0){
           arr[c]=arr[i];
           c++;
        }
        else{
            count++;
        }
    }
    while(c < n){
        arr[c]=0;
        c++;
    }
    console.log("count",count);
    return arr;
}
console.log(countZero(arr,n));
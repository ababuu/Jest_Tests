
export function analyze(array){
    const object={};
}

function getAverage(array){
    const sum=array.reduce((a,b)=> a+b);
    const arrayLength=array.length+1;
    const average=sum/arrayLength;
    return average;
}
function getMax(array){
    return Math.max(...array);
}
function getMin(array){
    return Math.min(...array);
}
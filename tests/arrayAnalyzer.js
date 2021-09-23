
export function analyze(array){
    const object={};
    object['average']=getAverage(array);
    object['min']=getMin(array);
    object['max']=getMax(array);
    object['length']=getLength(array);
    return object;
}

function getAverage(array){
    const sum=array.reduce((a,b)=> a+b);
    const arrayLength=array.length;
    const average=sum/arrayLength;
    return average;
}
function getMax(array){
    return Math.max(...array);
}
function getMin(array){
    return Math.min(...array);
}
function getLength(array){
    return array.length;
}
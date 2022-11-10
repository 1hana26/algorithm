function solution(array) {
    array.sort((x,y)=>{return x-y})
    return array[Math.floor(array.length/2)];
}
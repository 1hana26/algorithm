function solution(num, k) {
    const strNum = String(num)
    for(let i =0;i<strNum.length;i++){
        if(strNum[i]===String(k)) return i+1
    }
    return -1
}
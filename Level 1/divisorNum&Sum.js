function solution(left, right) {
    var answer = 0;
    for(let i = 0;i+left<=right;i++){
        const num = left+i
        let count = 0
        for(let j=0;j<=num;j++){
            if(num%j===0) count++
        }
        if(count%2===0)answer+=num
        else answer-=num
    }
    return answer;
}
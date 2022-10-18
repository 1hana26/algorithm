//연속한 자연수들로 표현 하는 방법이 여러개
function solution(n) {
    var answer = 0;
     for(let i=1; i<=n; i++){
        let sum = 0
        for(let j=i; j<=n;j++){
            sum += j
            if(sum >= n){
                if(sum === n) answer++
                break
            }
        }
    }
    return answer;
}
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

//수정한 부분
function solution2(n) {
    let count = 0;
    for ( let i = 1 ; i < n/2 + 1 ; i++ ){
        // 1부터 i항까지의 합 sum
        const sum = i * (i + 1) / 2;
        // n에서 sum을 뺀 수는 다시 i의 배수가 되어야 한다.
        const sub = n - sum;
        if(sub < 0) break;
        if(sub % i === 0){
            count++;
        }
    }
    return count;
}
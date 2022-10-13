function solution(A,B){
    var answer = 0;
    let newA = A.sort((x,y)=>{return x-y})
    let newB = B.sort((x,y)=>{return y-x})
    for(let i = 0;i<A.length;i++){
        answer += newA[i]*newB[i]
    }

    return answer;
}
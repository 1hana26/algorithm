function solution(n) {
    let answer = n;
    const nCountOne = n.toString(2).match(/1/g).length
    while(true){
        answer++
        if(nCountOne === (answer).toString(2).match(/1/g).length) break
    }
    return answer;
}
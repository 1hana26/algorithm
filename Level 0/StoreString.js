//초기 코드
function solution(my_string) {
    var answer = [];
    for(let i = 0;i<my_string.length;i++){
        if(Number(my_string[i])){
            answer.push(Number(my_string[i]))
        }else if(my_string[i]==='0'){
            answer.push(0)
        }
    }
    return answer.sort((x,y)=>{return x-y});
}
//코드 수정
function solution2(my_string) {
    let str = my_string.split('');
    const answer = [];
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            answer.push(Number(str[i]))
        }
    }
    return answer.sort((a, b) => a - b);
}
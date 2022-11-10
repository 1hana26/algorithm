function solution(my_string) {
    var answer = my_string;
    const vowels=["a","e","i","o","u"]
    for(let i = 0;i<vowels.length;i++){
        const temp = answer.split(vowels[i])
        answer=temp.join("")
    }
    return answer;
}

const my_string = "hello"

console.log(solution(my_string))
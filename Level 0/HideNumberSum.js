function solution(my_string) {
    const temp = my_string.split("")
    return temp.reduce((pre,cur)=>{
        if(Number(cur))return pre+Number(cur)
        else return pre+0
    },0)
}

const my_string = "aAb1B2cC34oOp"

console.log(solution(my_string))
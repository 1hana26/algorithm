function solution1(cipher, code) {
    var answer = '';
    cipher.split("").map((cur,idx)=>{
        if((idx+1)%code===0) answer+=cur
    })
    return answer
}

function solution2(cipher, code) {
    return cipher.split("").filter((cur,idx)=>{
        return (idx+1)%code===0
    }).join("")
}
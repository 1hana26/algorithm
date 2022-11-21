function solution(order) {
    var answer = 0;
    String(order).split("").map((ele)=>{
        if(ele==='3') answer+=1
        if(ele==='6') answer+=1
        if(ele==='9') answer+=1
    })
    return answer;
}
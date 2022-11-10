function solution(rsp) {
    return rsp.split("").map((ele)=>{
        console.log(ele)
        if(ele==='0')return 5
        if(ele==='2')return 0
        if(ele==='5')return 2
    }).join("")
}
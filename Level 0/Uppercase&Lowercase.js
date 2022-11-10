function solution(my_string) {
    return my_string.split("").map((ele)=>{
        const ascii = ele.charCodeAt( )
        if(65<=ascii&&ascii<=90) return String.fromCodePoint(ascii+32)
        if(97<=ascii&&ascii<=122) return String.fromCodePoint(ascii-32)
    }).join("")
}
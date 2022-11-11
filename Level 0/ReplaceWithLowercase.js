function solution(my_string) {
    const ascii= my_string.split("").map((ele)=>{
        const ascii = ele.charCodeAt()
        if(65<=ascii&&ascii<=90) return ascii+32
        else return ascii
    }).sort((x,y)=>{return x-y})
    return ascii.map((ele)=>{return String.fromCodePoint(ele)}).join("")    
}
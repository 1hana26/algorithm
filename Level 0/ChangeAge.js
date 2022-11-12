function solution(age) {
    const ageObj = {
        "0":"a",
        "1":"b",
        "2":"c",
        "3":"d",
        "4":"e",
        "5":"f",
        "6":"g",
        "7":"h",
        "8":"i",
        "9":"j"
    }
    return String(age).split("").map((ele)=>{
        return ageObj[ele]
    }).join("")
}
//수정된 코드
function solution2(age) {
  return age
    .toString()
    .split("")
    .map((v) => "abcdefghij"[v])
    .join("");
}
function solution(order) {
    var answer = 1;
    let box = []
    let temp = []

    for(let boxIdx =0;boxIdx<order.length;boxIdx++){
        box.push(boxIdx+1)
    }

    for(let i = 1;i<order.length;i++){
        //1. 첫번재 상자는 무조건 담음.
        if(order[i]!==box[0] || order[i]===temp[temp.length-1]){
            const index = box.indexOf(order[i])
            for(let j = 0;j<index;j++){
                temp.push(box[0])
                box.shift()
            }
        }
        //2. 그이후 박스들의 로직
        //2-1.컨테이너에서 나오는 박스와 넣어야할 박스번호 비교하기
        if(order[i]===box[0]){
            box.shift()
            answer ++
        }else if(order[i]===temp[temp.length-1]){
            temp.pop()
            answer ++
        }else{
            return answer
        }
    }
    return answer;
}

const order =  [1, 2, 4, 3, 5]
console.log(solution(order))
function solution(price, money, count) {
    var total = 0
    for(let i = 1;i<count+1;i++){
        total+=price*i
    }
    //금액이 부족하지 않은경우에는 0을 리턴하야하기 때문에 삼항연산자를 사용했다.
    return total-money<=0 ? 0 : total-money;
}
function solution(n) {
    let num = [];
    for (let i = 2; i <= n; i++) num.push(i);

    function prime(a) {
        let middle = Math.floor(Math.sqrt(a));
        for (let i=2; i <= middle; i++) {
            if (a%i==0) return false;
        }
        return true;
    }

    let answer = num.filter(prime).length;
    return answer;    
}
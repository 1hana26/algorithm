function solution(survey, choices) {
    const object = new Object({
            R:0,
            T:0,
            C:0,
            F:0,
            J:0,
            M:0,
            A:0,
            N:0,
        })
        let c = [];
        for(let i of choices){
            c.push(i-4)
        }
        for(let i = 0; i<survey.length;i++){
            if(c[i]<0) object[survey[i][0]] += Math.abs(c[i])
            else if(c[i]>0) object[survey[i][1]]  += c[i]
        }

        let str = '';

        if(object['T']>object['R']) str = str+'T';
        else str = str+'R'
        if(object['F']>object['C']) str = str+'F';
        else str = str+'C'
        if(object['M']>object['J']) str = str+'M';
        else str = str+'J'
        if(object['N']>object['A']) str = str+'N';
        else str = str+'A'
        return str
}
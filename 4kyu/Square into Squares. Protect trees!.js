/*
Task
Given a positive integral number n, return a strictly increasing sequence (list/array/string depending on the language) of numbers, so that the sum of the squares is equal to n².

If there are multiple solutions (and there will be), return as far as possible the result with the largest possible values:
 */

function decompose(n) {
    let result = decomposer(n, n * n);
    return result == null ? null : result.slice(0, result.length - 1);
}

function decomposer(n, remain){
    if(remain === 0) {
        return [n];
    }
    for(let i = n - 1; i > 0; i--){
        if((remain - i * i) >= 0){
            let r = decomposer(i, (remain - i * i));
            if(r != null){
                r.push(n);
                return r;
            }
        }
    }
    return null;
}
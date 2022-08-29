/*
function solution(s,t){
    let answer=0;
    for(let x of s){
        if(x===t){answer++;}
    }

    return answer;
}
str='COMPUTERPROGRAMMING';
console.log(solution(str,'P'));
*/
//==============================
/*
function solution(s,t){
    let answer=s.split(t).length;

    return answer;
}
str='COMPUTERPROGRAMMING';
console.log(solution(str,'R'));
*/

function solution(s,t){
    let answer=s.split(t).length;
    return answer-1;
}
s="BANANAJUICEJMT";
console.log(solution(s,"J"));
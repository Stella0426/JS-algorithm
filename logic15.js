//대소문자변환
/*
function solution(s){
    //한방에 대문자변환
    //let answer=s.toUpperCase();
    let answer="";
    for(let x of s){
        if(x===x.toUpperCase()){answer+=x.toLowerCase();}
        else answer+=x.toUpperCase();
    }
    return answer;
}
console.log(solution('StuDY'));
*/
function solution(s){
    let answer='';
    let max=Number.MIN_SAFE_INTEGER;
    for(let x of s){
        if(x.length>max){
            max=x.length;
            answer=x;
        }
    }
    return answer;
}
let s =["banana", 'star', 'sunmi'];
console.log(solution(s));
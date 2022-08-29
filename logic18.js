//중복단어제거
function solution(s){
    let answer;
    answer=s.filter(function(v,i){
        if(s.indexOf(v)===i){return true;}

    });
    return answer;
}
let s =["good", "time", "good", "time", "student"];
console.log(solution(s));
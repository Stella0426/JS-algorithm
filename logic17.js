//중복문자제거
function solution(s){
    let answer="";
    //console.log(s.indexOf('k',1));
    let pos=s.indexOf('k');
    while(pos!==-1){
        answer++;
        pos=s.indexOf('k',pos+1);
    }
    return answer;
}
console.log(solution("ksekkset"))
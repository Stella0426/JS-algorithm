//자바스크립트 알고리즘 문제풀이
/*
A를 #으로.. 대문자로 이루어진 영단어가 입력되면 단어에 포함된
'A'를 모두 '#'으로 바꾸어 출력하는 프로그램을 작성하세요
*/
function solution(s){
    let answer = "";
    for(let x of s){
        if(x==='A'){answer+='#';}
        else{answer+=x;}
    }
    return answer;
}
let s="BANANA";
console.log(solution(s));

// ============================

function solution(s){
    let answer=s;
//배열과달리 문자열에선 값이 복사되는거지 주소까지 복사되는게 아님
//그래서 밑에 s=s.replace(/A/g,'#);쓰면 안바뀜
    s=s.replace(/A/g, '#');
    return answer;
}
let s = "BANANA";
console.log(solution(s));
//==============================









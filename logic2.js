//자바스크립트 알고리즘 문제풀이
//삼각형 판별하기
/*
길이가 서로 다른 A,B,C 세 개의 막대 길이가 주어지면
이 세 막대로 삼각형을 만들 수 있으면 "YES"라고 출력하고
만들 수 없으면 "NO"를 출력한다
*/
function solution(a,b,c){
    let answer;
    let max=Number.MIN_SAFE_INTEGER;
    let sum=a+b+c;
    if(a>b){max=a;}
    else{max=b;}
    if(c>answer){max=c;}
    if((sum-max)<=max){
        answer="NO";
    }
    else{answer="YES";}
    return answer;
}
console.log(solution(13,33,25));
/* function solution(a,b,c){
    let answer="YES", max;
    let sum = a+b+c;
    if(a>b){max=a;}
    else max=b;
    if(c>max){max=c;}
    if((sum-max)<=max) answer="NO";

    return answer;
 }
 console.log(solution(13,33,17));
 */
//자바스크립트 알고리즘 문제풀이
//세 수 중 최소값
/*
100이하의 자연수 A,B,C를 입력받아 세 수 중 가장 작은 값을 출력하는 
프로그램을 작성하세요.(정렬사용안됩니다)
*/

function solution(a,b,c){
    let answer;
    if(a<b){answer=a;}
    else{answer=b;}
    if(c<answer){answer=c;}
    return answer;
}
console.log(solution(201,199,400));

/*
function solution(a,b,c){
    let answer;
    if(a<b){answer=a;}
    else{answer=b;}
    if(c<answer){
        c=answer;
    }
    return answer;
}
console.log(solution(1,2,3));
*/
//자바스크립트 알고리즘 문제풀이
//연필 개수
/*
연필 1다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고
할떄 N명이 학생수를 입력하면 필요한 연필의 다스 수를 계산하는 
프로그램을 작성하세요. 
*/
function solution(n){
    let answer = Math.ceil(n/12);
    return answer;
}
console.log(solution(41));









/*
function solution(n){
    let answer=Math.ceil(n/12);

    return answer;
}
console.log(solution(41));
*/
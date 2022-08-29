//자바스크립트 알고리즘 문제풀이
//10부제
/*
서울시는 6월 1일부터 교통혼잡을 막기 위해서 자동차 10부제를 시행함
자동차10부제는 자동차 번호의 일의 자리 숫자와 날짜의 일의자리 숫자가
일치하면 해당 자동차의 운행을 금지하는 것이다
예를 들어 자동차 번호의 일의 자리 숫자가 7이면 7일,17일,27일에 
운행못함. 10부제를 위반하는 자동차의 대수를 세어라. 날짜의 일의자리
숫자가 주어지고 7대의 자동차 번호의 끝 두자리 수가 주어졌을떄 위반
하는 자동차의 대수를 출력하는 프로그램을 작성해라.
*/
function solution(day,arr){
    let answer=0;;
    for(let x of arr){
        if(x%10===day){
            answer++;
        }
    }
    return answer;
}
let arr = [23,14,51,67,82,93];
console.log(solution(3,arr));





/*
function solution(day,arr){
    let answer=0;
    for(let x of arr){
        if(x%10===day){answer++};
    }
    return answer;
}
let arr = [12,23,35,46,53,67,83];
console.log(solution(9,arr));
*/
//자바스크립트 알고리즘 문제풀이
//최솟값 구하기
/*
7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램
작성하세요
*/

function solution(arr){
    let answer=[];
    let min=arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i]<min){min=arr[i]};
    }
    answer=min;
    return answer;
}
arr=[31,12,23,54,45,96,87];
console.log(solution(arr));














/*
function solution(arr){
    let answer, min=arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i]<min){min=arr[i];}
    }
    answer=min;
    return answer;
}
let arr = [5,7,21,3,2,9,11];
console.log(solution(arr));
*/
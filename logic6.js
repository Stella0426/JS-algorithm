//자바스크립트 알고리즘 문제풀이
//내장함수로 최솟값,최댓값 구하기
function solution(arr){
    let answer=Math.min(...arr);
    //배열을 넘기려면...써줘야함->arr[0],arr[1]이런식으로!
    console.log(Math.max(...arr));
    return answer;
}
let arr=[5,7,1,3,9,6,8]
console.log(solution(arr));
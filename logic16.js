/*코테 작은수출력
function solution(arr) {
    var answer = arr;
    let min=Number.MAX_SAFE_INTEGER;
    for(let x of arr){
        if(x<min){min=x;}
    }
    answer=answer.splice(min);
    return answer;
}
let arr=[4,3,2,1];
console.log(solution(arr));*/
//자바스크립트 알고리즘 문제풀이
//갸장 긴 문자열
function solution(s){
    let answer;
    let mid=Math.floor(s.length/2);
    if(s.length%2===1){answer=s.substring(mid,mid+1);}
    else{answer=s.substring(mid-1,mid+1);}
    return answer;
    }
let s='TWINKLE';
console.log(solution(s));


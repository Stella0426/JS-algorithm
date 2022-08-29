function solution(arr){
    let answer=[];
    for(let x of arr){
        if(x%2===1){
            answer.push(x);
        }
    }
    return answer;
}
arr=[1,2,3,4,5,6];
console.log(solution(arr));



















/*
function solution(arr){
    let answer;
    for(let x of arr){
        if(x%2===1){
            answer.push(x);
        }
    }return answer;
}
arr = [1,2,3,4,5];
console.log(solution(arr));
*/
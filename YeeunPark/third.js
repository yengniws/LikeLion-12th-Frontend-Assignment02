// 모든 팀원의 월급에 대한 정보를 담고 있는 객체가 있다고 해봅시다.

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// 모든 팀원의 월급을 합한 값을 구하고, 그 값을 변수 sum에 저장해주는 코드를 작성해보세요.
// sum엔 390이 저장되어야겠죠?

// 주의: salaries가 비어있다면 sum에 0이 저장되어야 합니다.

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;

for (let i in salaries) {
    sum = sum + salaries[i];
}
console.log(sum);
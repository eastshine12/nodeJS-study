/*
function getData() {
    return new Promise(function(resolve, reject) {
      const data = {
          first : 'Hello Promise 1', 
          second : 'Hello Promise 2'
      };
      resolve(data);
    });
}
  
  // reject()의 결과 값 Error를 err에 받음
  getData()
    .then(function(data) {
        console.log(data.second);
    })
    .catch(function(err) {
        console.error(err); // Error 출력
    });
*/
/*

async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("완료!"), 3000)
    });
    
    let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)
    
    console.log(result); // "완료!"
}

f();

*/
async function hello() { return "Hello" };

let hello1 = async () => {
    return "HELLO";
};

console.log(hello().then(console.log));
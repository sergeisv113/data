//создаем обект даты
// const now = new Date();//текущ время

// const now = new Date(2020, 5, 1, 20);
//2020-06-01T17:00:00:00  06=5(+1), 17 = 20 часов пояс

// const now = new Date(0);
//01 1970 03:00:00

//получ даты до 1970
// const now = new Date(-999999999);
//1969 13:13:20

//method get
const now = new Date();//получ компонентов даты
/*
console.log(now.getFullYear());//2022
console.log(now.getMonth());//4
console.log(now.getDate());//1
console.log(now.getDay());//день недели(с воскрес)
console.log(now.getHours());//19
console.log(now.getUTCHours());//17+ часов пояс
*/

//разница между час пояс и UTC
// console.log(now.getTimezoneOffset());//-120min
//time start 1970
// console.log(now.getTime());//1643303632447ms

//method set
/*
console.log(now.setHours(18));//1643300298409ms   18:18:18
console.log(now.setHours(18, 40));//1643300298409ms  18:40:43
*/

/*
const now = new Date('2020-05-01');//|| =>
 new Date.parse('2020-05-01');
console.log(now);
*/

 //измер промежутк времени
let start = new Date();
for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}
let end = new  Date();
alert(`Цикл отработал за ${end - start}ms`);// 13ms

const date = new Date();

const [month, day, year] = [
  date.getMonth()+1,
  date.getDate(),
  date.getFullYear(),
];
const [hour, minutes, seconds] = [
  date.getHours(),
  date.getMinutes(),
  date.getSeconds(),
];

console.log(year + '年' , month + '月' , + day + '日');

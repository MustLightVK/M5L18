function addZero(number) {
    return number < 10 ? '0' + number : number;
}
  
const currentDate = new Date();
  
let sec = addZero(currentDate.getSeconds());
let min = addZero(currentDate.getMinutes());
let hours = addZero(currentDate.getHours());
  
let day = addZero(currentDate.getDate());
let month = addZero(currentDate.getMonth() + 1); 
let year = addZero(currentDate.getFullYear());
  
console.log(`Текущее время ${hours}:${min}:${sec} и дата ${day}.${month}.${year}`);
  
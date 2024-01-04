/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Days {
  Monday= "weekday",
  Wednesday= "weekday",
  Saturday = "weekend",
  Sunday = "weekend"

}
const isWeekend = (day:Days) => {
  return day === "weekend" ? true : false
}
isWeekend(Days.Monday)
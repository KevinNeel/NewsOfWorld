var defaultDate = new Date();
var currentDate = defaultDate.getDate();
var currentMonth = defaultDate.getMonth();
var currentYear = defaultDate.getFullYear();

if(currentMonth === 0){
    currentMonth = 12;
    currentYear - 1;

}
let fulldate = currentYear + '-' + currentMonth + '-' + currentDate;

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  

module.exports = fulldate;
module.exports = capitalizeFirstLetter
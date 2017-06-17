function monthDays(year, month) {
    return (month == 2 ? ((year % 4 != 0 || (year % 100 == 0 && year % 400 != 0)) ? 28 : 29) : (((month < 8 && (month & 1) == 0) || (month > 7 && (month & 1) == 1)) ? 31 : 30));
}

function dateDiff(date1, date2) {
    var years, months, days, hours, minutes, seconds;
    var y1, m1, d1, d2, dd;
    years = date2.getUTCFullYear() - (y1 = date1.getUTCFullYear());
    months = date2.getUTCMonth() - (m1 = date1.getUTCMonth());
    days = (d2 = date2.getUTCDate()) - (d1 = date1.getUTCDate());
    hours = date2.getUTCHours() - date1.getUTCHours();
    minutes = date2.getUTCMinutes() - date1.getUTCMinutes();
    seconds = date2.getUTCSeconds() - date1.getUTCSeconds();
    dd = 0;
    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
        dd = 1;
    }
    if (days < 0) {
        days = monthDays(y1, m1)-d1+d2-dd;
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }
    return {years: years, months: months, days: days,
            hours: hours, minutes: minutes, seconds: seconds};
}

var d1 = new Date(Date.now());
var d2 = new Date('7/15/2018');
var diff = dateDiff(d1, d2);
var str = String(diff.years).slice(-1);
var result = 'До ЧМ 2018 осталось: ';
result = result + String(diff.years) + ' ';
if (str == '1') {
    result = result + 'год '
} else if (str == '2' || str == '3' || str == '4'){
	result = result + 'года '
} else {
	result = result + 'лет '
}
str = String(diff.months).slice(-1);
result = result + String(diff.months) + ' ';
if (str == '1') {
	result = result + 'месяц '
} else if (str == '2' || str == '3' || str == '4'){
	result = result + 'месяца '
} else {
	result = result + 'месяцев '
}
str = String(diff.days).slice(-1);
result = result + String(diff.days) + ' ';
if (str == '1') {
	result = result + 'день '
} else if (str == '2' || str == '3' || str == '4'){
	result = result + 'дня '
} else {
	result = result + 'дней '
}
str = String(diff.hours).slice(-1);
result = result + String(diff.hours) + ' ';
if (str == '1') {
	result = result + 'час '
} else if (str == '2' || str == '3' || str == '4'){
	result = result + 'часа '
} else {
	result = result + 'часов '
}
str = String(diff.minutes).slice(-1);
result = result + String(diff.minutes) + ' ';
if (str == '1') {
	result = result + 'минута '
} else if (str == '2' || str == '3' || str == '4'){
	result = result + 'минуты '
} else {
	result = result + 'минут '
}
str = String(diff.seconds).slice(-1);
result = result + String(diff.seconds) + ' ';
if (str == '1') {
	result = result + 'секунда'
} else if (str == '2' || str == '3' || str == '4'){
	result = result + 'секунды'
} else {
	result = result + 'секунд'
}
alert(result);
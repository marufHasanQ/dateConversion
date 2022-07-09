
function getDateObjectFromInput(dateString) {
    const [day,month,year] = dateString.split('/').filter(v => v!== '').map(Number);

    return {day,month,year};
}
function checkValidity(dateObject) {
    if(!(typeof(dateObject.day) == 'number' && 0 <= dateObject.day && dateObject.day <=31))
        throw new Error(`Invalide day ${dateObject.day}`);

    if(!(typeof(dateObject.month) === 'number' && 0 <=dateObject.month&& dateObject.month<=12))
        throw new Error(`Invalide month ${dateObject.month}`);

    if(!(typeof(dateObject.year) === 'number' && 0 <=dateObject.year))
        throw new Error(`Invalide year ${dateObject.year}`);
    return true;
}

function getNthDayOfTheYear(dateObject) {
    return isLeapyear => {
        let numberOfDaysInEachMonth = [31,28,31,30,31,30,31,31,30,31,30,31];

        numberOfDaysInEachMonth[1] += isLeapyear? 1:0;
        //console.log(numberOfDayInEachMonth.reduce((v,acc) => v+ acc));
        if(dateObject.month === 1 )
            return dateObject.day;

        const daysUptoGivenMonth = numberOfDaysInEachMonth.slice(0,dateObject.month-1).reduce((v,acc) => v+ acc);

        return daysUptoGivenMonth + dateObject.day;
    }
}

function getBanglaMonthAndDay(nthDayOfTheYear) {
    return isLeapyear => {

        let numberOfDaysInEachBanglaMonth = [31,31,31,31,31,31,30,30,30,30,29,30];
        if (isLeapyear){
            numberOfDaysInEachBanglaMonth[10] += 1
        }
        const [_,monthAndDate] = numberOfDaysInEachBanglaMonth.reduce((acc,value,index,array) => {
            acc[0] += value;
            const difference = nthDayOfTheYear - acc[0];
            if (difference > 0) {
                acc[1][0] = index;
                acc[1][1] = difference;
            }

            return acc;
        },[0,[-1,nthDayOfTheYear]]);

        monthAndDate[0] +=2;

        return monthAndDate;

    }
}

function checkLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400===0? true : false;
}
export{getNthDayOfTheYear, checkValidity, getDateObjectFromInput,getBanglaMonthAndDay,checkLeapYear};
//console.log(getNthDayOfTheYear(getDateObjectFromInput('31/12/2015')));
//console.log(getNthDayOfTheYear(getDateObjectFromInput('14/4/2015')));
//console.log(getBanglaMonthAndDay(263));

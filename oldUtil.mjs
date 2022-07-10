
function getDateObjectFromInput(dateString) {

    let [option,day,month,year] = dateString.split('/').filter(v => v!== '');
    [day,month,year] = [day,month,year].map(Number)
    return {option,day,month,year};
}

function checkValidity(dateObject) {
    if(!(dateObject.option ==='g2b' ||dateObject.option ==='b2g'))
        throw new Error(`Invalide option ${dateObject.option}`);

    if(!(typeof(dateObject.day) == 'number' && 0 <= dateObject.day && dateObject.day <=31))
        throw new Error(`Invalide day ${dateObject.day}`);

    if(!(typeof(dateObject.month) === 'number' && 0 <=dateObject.month&& dateObject.month<=12))
        throw new Error(`Invalide month ${dateObject.month}`);

    if(!(typeof(dateObject.year) === 'number' && 0 <=dateObject.year))
        throw new Error(`Invalide year ${dateObject.year}`);
    return true;
}

function getBanglaDaysForEachMonths(dateObject) {
    return isLeapyear => {

        let numberOfDaysInEachBanglaMonth = [31,31,31,31,31,31,30,30,30,30,29,30];
        //const isLeapyear= checkLeapYear(dateObject.year);

        return banglaChangeForLeapYear(isLeapyear)(numberOfDaysInEachBanglaMonth);

        function banglaChangeForLeapYear(isLeapyear) {
            return numberOfDaysInEachMonth => {
                console.log(numberOfDaysInEachMonth);
                numberOfDaysInEachMonth[10] += isLeapyear ? 1 : 0;
                return numberOfDaysInEachMonth;
            }
        }
    }
}

function getGregorianDaysForEachMonths(dateObject) {
    return isLeapyear => {
        let numberOfDaysInEachMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
        //const isLeapyear= checkLeapYear(dateObject.year);

        return gregrianChangeForLeapYear(isLeapyear)(numberOfDaysInEachMonth);

        function gregrianChangeForLeapYear(isLeapyear) {
            return numberOfDaysInEachMonth => {
                console.log(numberOfDaysInEachMonth);
                numberOfDaysInEachMonth[2] += isLeapyear ? 1 : 0;
                return numberOfDaysInEachMonth;
            }
        }
    }
}


function getNthDayOfTheYear(dateObject) {
    return  numberOfDaysInEachMonth => {
        //let numberOfDaysInEachMonth = [31,28,31,30,31,30,31,31,30,31,30,31];

        //numberOfDaysInEachMonth[1] += isLeapyear? 1:0;
        //console.log(numberOfDayInEachMonth.reduce((v,acc) => v+ acc));
        if(dateObject.month === 1 )
            return dateObject.day;

        const daysUptoGivenMonth = numberOfDaysInEachMonth.slice(0,dateObject.month-1).reduce((v,acc) => v+ acc);

        return daysUptoGivenMonth + dateObject.day;
    }
}

function getMonthAndDay(nthDayOfTheYear) {
    return numberOfDaysInEachMonth=> {

        /*let numberOfDaysInEachBanglaMonth = [31,31,31,31,31,31,30,30,30,30,29,30];
        if (isLeapyear){
            numberOfDaysInEachBanglaMonth[10] += 1
        }
        */
        const [_,monthAndDate] = numberOfDaysInEachMonth.reduce((acc,value,index,array) => {
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
export{getNthDayOfTheYear, checkValidity, getDateObjectFromInput,getMonthAndDay,checkLeapYear,getBanglaDaysForEachMonths,getGregorianDaysForEachMonths};
//console.log(getNthDayOfTheYear(getDateObjectFromInput('g2b/14/4/2015'))(false));
//console.log(getNthDayOfTheYear(getDateObjectFromInput('14/4/2015')));
//console.log(getBanglaMonthAndDay(263));

import {getNthDayOfTheYear,checkValidity,getDateObjectFromInput,getBanglaMonthAndDay,checkLeapYear} from './util.mjs';

export function getBanglaDate(date) {

    const dateObject = getDateObjectFromInput(date); 
    //console.log(dateObject);

    try{
        checkValidity(dateObject);
    }
    catch (e) {
        console.log(e.message); 
        return {error :e.message, validFormate: 'dd/mm/yyyy'};
    }

    const nthDayOfTheYear = getNthDayOfTheYear(dateObject)(checkLeapYear(dateObject.year));
    const shiftedValueForDays = nthDayOfTheYear + 262;

    let shiftedValueForYears = dateObject.year - 594;

    const year = parseInt (shiftedValueForYears + shiftedValueForDays / 365 );

    const [month,day] = getBanglaMonthAndDay((shiftedValueForDays%365))(checkLeapYear(dateObject.year));

    return {day,month,year};


}

//console.log(getNthDayOfTheYear(getDateObjectFromInput('4/1/2002')));

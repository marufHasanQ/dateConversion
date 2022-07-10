//import {getNthDayOfTheYear,checkValidity,getDateObjectFromInput,getMonthAndDay,checkLeapYear,getBanglaDaysForEachMonths,getGregorianDaysForEachMonths} from './util.mjs';
import{getBanglaDate,getGregorianDate,getDateObjectFromInput,checkValidity} from './util.mjs';

/*
function getGregorianDate(dateObject){

    //    let numberOfDaysInEachGregorianMonth = [31,28,31,30,31,30,31,31,30,31,30,31];

    //   return {l:'from gregori'};

    let shiftedValueForYears = dateObject.year + 593;

    const isLeapyear= checkLeapYear(shiftedValueForYears + 1);

    const gregorianIsLeapyear = checkLeapYear(shiftedValueForYears); 

    const numberOfDaysInEachBanglaMonth = getBanglaDaysForEachMonths(dateObject)(isLeapyear);
    //
    //console.log(numberOfDaysInEachBanglaMonth);

    const nthDayOfTheYear = getNthDayOfTheYear(dateObject)(numberOfDaysInEachBanglaMonth);
    //return nthDayOfTheYear;


    const gregorianYearLength = 365 + (gregorianIsLeapyear? 0: 1);

    const shiftedValueForDays = nthDayOfTheYear + 103 +(gregorianIsLeapyear? 1:0);


    const year = parseInt (shiftedValueForYears + (shiftedValueForDays / (gregorianYearLength + 1)));

    const daysReminder =( shiftedValueForDays % gregorianYearLength ) ===0 ? gregorianYearLength:  ( shiftedValueForDays % gregorianYearLength );
    const numberOfDaysInEachGregorianMonth = getGregorianDaysForEachMonths(dateObject)(gregorianIsLeapyear);

    const [month,day] = getMonthAndDay((daysReminder))(numberOfDaysInEachGregorianMonth);

    return {day,month,year};

}

function getBanglaDate(dateObject) {
    const isLeapyear= checkLeapYear(dateObject.year);
    const banglaYearLength =  365 + (isLeapyear? 1 :0 );
    const numberOfDaysInEachGregorianMonth = getGregorianDaysForEachMonths(dateObject)(isLeapyear);

    //console.log(numberOfDaysInEachMonth);
    const nthDayOfTheYear = getNthDayOfTheYear(dateObject)(numberOfDaysInEachGregorianMonth);

    const shiftedValueForDays = nthDayOfTheYear + 262;
    let shiftedValueForYears = dateObject.year - 594;

    const year = parseInt ( shiftedValueForYears + ( shiftedValueForDays /( banglaYearLength + 1 )));

    //in the last days of the year it gives 365% 365=0; to tackle that edge case we used edgecase check;
    const daysReminder =( shiftedValueForDays % banglaYearLength ) ===0 ? banglaYearLength:  ( shiftedValueForDays % banglaYearLength );
    const numberOfDaysInEachBanglaMonth = getBanglaDaysForEachMonths(dateObject)(isLeapyear);

    console.log( shiftedValueForDays % banglaYearLength  );

    const [month,day] = getMonthAndDay(daysReminder)(numberOfDaysInEachBanglaMonth);

    return {day,month,year};
}
*/
    export function getDate(date) {

        const dateObject = getDateObjectFromInput(date); 
        //console.log(dateObject);

        try{
            checkValidity(dateObject);
        }
        catch (e) {
            console.log(e.message); 
            return {error :e.message, validFormate: 'dd/mm/yyyy'};

        }

        switch (dateObject.option) {
            case 'g2b':
                return getBanglaDate(dateObject); 
                break;

            case 'b2g':
                return getGregorianDate(dateObject); 

        }

    }

//console.log(getNthDayOfTheYear(getDateObjectFromInput('4/1/2002')));

import {getBanglaDate,getGregorianDate,getDateObjectFromInput,checkValidity,checkLeapYear} from './util.mjs';

export function getDate(comparisonArray) {
    return date => {
        const dateObject = getDateObjectFromInput(date); 

        try{
            checkValidity(dateObject);
        }
        catch (e) {
            console.log(e.message); 
            return {error :e.message, validFormateForBanglaToGregorian: 'b2g/dd/mm/yyyy', validFormateForGregorianToBangla:'g2b/dd/mm/yyyy'};

        }


        switch (dateObject.option) {
            case 'g2b':
                return getBanglaDate(comparisonArray)(dateObject); 
                break;

            case 'b2g':
                return getGregorianDate(comparisonArray)(dateObject); 

        }

    }
}


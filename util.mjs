
//console.log(indexFind(numberOfDaysInEachGregorianMonth)((acc,v,i,ar) => v === 28));
function generateComparisonArray(isLeapyear) {

    let numberOfDaysInEachBanglaMonth = [31,31,31,31,31,31,30,30,30,30,29,30];
    let numberOfDaysInEachGregorianMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
    if (isLeapyear) {
        numberOfDaysInEachGregorianMonth[1] +=1;
        numberOfDaysInEachBanglaMonth[10] +=1;
    }

    const gregorianCalender = calenderGenarator(numberOfDaysInEachGregorianMonth);
    const banglaCalender = calenderGenarator(numberOfDaysInEachBanglaMonth);

    //console.log(banglaCalender);
    const splitIndex = indexFind(banglaCalender)((a,v,i,ar) => v[0] ===9 && v[1] === 17)
    //console.log(splitIndex);
    const beginingPartOfBanglaCalender = banglaCalender.splice(0,splitIndex);
    //console.log('endpart',beginingPartOfBanglaCalender);
    const newBanglaCalender = [ ...banglaCalender,...beginingPartOfBanglaCalender];
    //console.log(banglaCalender.splice(0,splitIndex));
    const comparisonArray = gregorianCalender.map((v,i) => [...v,...newBanglaCalender[i]]);
    //console.log('new',newBanglaCalender);
    //console.log('comp',comparisonArray);
    return comparisonArray;

}

//generateComparisonArray(true);
//console.log(generateComparisonArray(false));
function calenderGenarator(monthArray) {
    return  monthArray.reduce((acc,value,index,array) => {
        const month = new Array(value).fill(0).map((v,i) => [index+1 ,i +1 ]);
        return [...acc,...month];


    },[]);

}
function indexFind(array) {
    return condition => {
        return array.reduce((acc,value,index,array) => {
            if(condition(acc,value,index,array))
                acc = index;
            return acc;
        },null);
    }
}

function checkLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400===0? true : false;
}

function getBanglaDate(comparisonArrayPair) {
    return dateObject => {
        //const comparisonArrayPair = generateComparisonArray(checkLeapYear(dateObject.year + 594)); 

        //function getBanglaDate(dateObject) {
        //   const comparisonArrayPair = generateComparisonArray(checkLeapYear(dateObject.year)); 
        const comparisonArray = checkLeapYear(dateObject.year ) ? comparisonArrayPair[0]: comparisonArrayPair[1];

        const index = indexFind(comparisonArray)((a,v,i,ar) => {
            return v[0] === dateObject.month && v[1] === dateObject.day;
        });

        const yearBoundaryIndex = indexFind(comparisonArray)((a,v,i,ar) => {
            return v[2] === 1 && v[3] === 1;
        });

        const year = dateObject.year - 594 + (index>= yearBoundaryIndex?1:0);
        //return [comparisonArray[index][3],comparisonArray[index][2],year];

        const [month,day] = [comparisonArray[index][2],comparisonArray[index][3]];
        return {day,month,year};
    }
}

function getGregorianDate(comparisonArray) {
    return dateObject => {
        //const comparisonArray = generateComparisonArray(checkLeapYear(dateObject.year + 594)); 
        comparisonArray = checkLeapYear(dateObject.year + 594) ? comparisonArray[0]: comparisonArray[1];
        const index = indexFind(comparisonArray)((a,v,i,ar) => {
            return v[2] === dateObject.month && v[3] === dateObject.day;
        });

        const yearBoundaryIndex = indexFind(comparisonArray)((a,v,i,ar) => {
            return v[2] === 1 && v[3] === 1;
        });

        const year = dateObject.year + 593 + (index< yearBoundaryIndex?1:0);
        const [month,day] = [comparisonArray[index][0],comparisonArray[index][1]];
        return {day,month,year};

    }
}

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
const dateObject ={day: 5, month: 1, year: 1425};
export { generateComparisonArray, getBanglaDate, getGregorianDate, getDateObjectFromInput,checkValidity,checkLeapYear};

//console.log('bangla', getBanglaDate(dateObject));
//
//console.log('gre', getGregorianDate(dateObject));

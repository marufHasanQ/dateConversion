
import {generateComparisonArray,getBanglaDate,getGregorianDate, checkLeapYear,getDateObjectFromInput} from './util.mjs';
const dateString = `g2b/15/5/1977`;
const dateObject = getDateObjectFromInput(dateString);
const leapYearComparisonArray = generateComparisonArray(true);
const nonLeapYearComparisonArray = generateComparisonArray(false);
const banglaDate = getBanglaDate([nonLeapYearComparisonArray,leapYearComparisonArray])(getDateObjectFromInput('g2b/28/12/2022'));
const gregorianDate = getGregorianDate([nonLeapYearComparisonArray,leapYearComparisonArray])(getDateObjectFromInput('b2g/13/9/1429')); 

test('checks conversion from date string to dateObject',()=>{
    expect( Object.keys(dateObject).length).toBe(4);
}
)

test('checks values of year dateObject',()=>{
    expect(dateObject.year).toBe(1977);
}
)

test('checks values of month dateObject',()=>{
    expect(dateObject.month).toBe(5);
}
)

test('checks values of day dateObject',()=>{
    expect(dateObject.day).toBe(15);
}
)
test('checks comparison array is adds leapyear day',()=>{
    expect(leapYearComparisonArray.length).toBe(366);
}
)
test('checks comparison array do not add leapyear day in non leapyear',()=>{
    expect(nonLeapYearComparisonArray.length).toBe(365);
}
)

test('checks if leapyear day is added in right position',()=>{
    expect(leapYearComparisonArray.find(v => v[0] === 2 && v[1] === 29)).toBeTruthy();
}
)
test('chekcs leapyear',()=>{
    expect(checkLeapYear(2004)).toBeTruthy();
}
)

test('chekcs not leapyear',()=>{
    expect(checkLeapYear(2007)).toBeFalsy();
})
test('chekcs not leapyear',()=>{
    expect(banglaDate.year === 1429 && banglaDate.day === 13 && banglaDate.month === 9 ).toBeTruthy();

})

test('chekcs not leapyear',()=>{
    expect(gregorianDate.year === 2022 && gregorianDate.day === 28 && gregorianDate.month === 12 ).toBeTruthy();

})
console.log(getBanglaDate([nonLeapYearComparisonArray,leapYearComparisonArray])(getDateObjectFromInput('g2b/28/12/2022')));
/*
test('checks the days of the year given dateObject',()=>{
    const dateObject = { month:2, day:5};
    expect(getNthDayOfTheYear(dateObject)).toBe(45);
})
*/

import {getNthDayOfTheYear,checkLeapYear} from './oldUtil.mjs';

test('chekcs leapyear',()=>{
    expect(checkLeapYear(2004)).toBeTruthy();
}
)

test('chekcs not leapyear',()=>{
    expect(checkLeapYear(2007)).toBeTruthy();
})

test('checks the days of the year given dateObject',()=>{
    const dateObject = { month:2, day:5};
    expect(getNthDayOfTheYear(dateObject)).toBe(45);
})

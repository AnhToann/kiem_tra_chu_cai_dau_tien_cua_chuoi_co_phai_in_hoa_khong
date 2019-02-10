function isFirstLetterUpperCase(str){
    regexp = /^[A-Z]/;
    if (regexp.test(str)) {
        console.log(`${str}'s first character is uppercase`);
    } else {
        console.log(`${str}'s first character is not uppercase`);
    }
}

isFirstLetterUpperCase('Abcd');
isFirstLetterUpperCase('abcd');
isFirstLetterUpperCase('Nguyen anh Toan');
isFirstLetterUpperCase('NGUYEN ANH TOAN');
isFirstLetterUpperCase('nguyen anh toan');
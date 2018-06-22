// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// IF more than one longest word, put into an array
// ex. longestWord('Hello, my name is Brad') === 'hello'
// ex. longestWord('Hello there, my name is Brad') === ['hello', 'there']

function longestWord(sen) {
    // Create filtered array // /[a-z0-9]+/g <=== Regular expression
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

    // Sort by length
    const sorted = wordArr.sort((a, b) => b.length - a.length);

    // if multiple words, put into array
    const longestWordArr = sorted.filter((word) => word.length === sorted[0].length);

    // Check if more than one array value
    if(longestWordArr.length === 1) {
        // Return the word
        return longestWordArr[0];
    } else {
        return longestWordArr;
    }

}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1,2,3], [4,5,6], [7]]
// ex. chunkArray([1,2,3,4,5,6,7], 2) === [[1, 2], [3, 4], [5, 6], [7]]

function chunkArray(arr, len) {
    // SOLUTION 1
    /*
    // Init chuncked arr
    const chunkedArr = [];
    // Set index
    let i = 0;

    // Loop While index is less than the array length
    while(i < arr.length) {
        // Slice out from the index to the index + the chunk length and push on to the chunked aray
        chunkedArr.push(arr.slice(i, i + len));
        // Increment by chunk length
        i += len;
    }  
    return chunkedArr; */ 

    // SOLUTION 2

    // Init chunked arr
    const chunkedArr = [];

    // Loop through arr
    arr.forEach((val) => {
        // Get last element

        const last = chunkedArr[chunkedArr.length - 1];
        // Check if last and if last length is equal to the chunk length
        if(!last || last.length === len) {
            chunkedArr.push([val]);
        } else {
            last.push(val);
        }
    });

    return chunkedArr;
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
    // SOLUTION 1
     return arrays.reduce((a, b) => a.concat(b)); 

    // SOLUTION 2 - short solution
    /* return [].concat.apply([], arrays); */

    // SOLUTION 3 - even shorter soltion 
     /*  function add(a, b, c) {
        return a + b + c;
    }
    const arr = [1, 2, 3];
    console.log(add(...arr)); */

    // return [].concat(...arrays);
}

// CHALLENGE 5: LETTER CHANGES
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
    return formatStr(str1) === formatStr(str2);

}

// Helper function 
function formatStr(str) {
    return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
    let newStr = str.toLowerCase().replace(/[a-z]/gi, char => {
        if(char === 'z' || char === 'Z') {
            return 'a';
        } else {
            return String.fromCharCode(char.charCodeAt() + 1);
        }
    });

    newStr = newStr.replace(/a|e|u|i|o|u/gi, vowel => vowel.toUpperCase());

    return newStr;
}

// Call Function
const output = letterChanges('hello There');

console.log(output);
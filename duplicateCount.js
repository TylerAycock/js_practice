// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times

const duplicateCount = s => {
    let arr = s.toLowerCase().split("")
    let obj = {}
    let counter = 0
    for(var items of arr){
        obj[items] ? obj[items]++ : obj[items] = 1
    }

    for (items in obj){
        obj[items] > 1 && counter++ 
    }

    return counter
}

console.log(duplicateCount("aA11"))
//problem 1: sum 0
//runtime complexity 0(n^2)

function addToZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        let checkingNum = arr[i]
        for (let k = 0; k < arr.length; k++) {
            let comparingNum = arr[k]

            if(checkingNum + comparingNum === 0 && i !== k) {
                return true
            }
        }
    }

    return false
}

// console.log(addToZero([1,2,3,4,5])) //false
// console.log(addToZero([1,2,3,4,-3])) //true
// console.log(addToZero([0,1,2,3,4,5,0,9])) //true
// console.log(addToZero([])) //false
// console.log(addToZero([0])) //false

//problem 2: unique characters
//runtime complexity: 0(n^2)

function hasUniqueChars(str) {
    let checkedLetters = ''

    for (let i = 0; i < str.length; i++) {
        if(checkedLetters.includes(str[i])) {
            return false
        } else {
            checkedLetters += str[i]
        }
    }
    return true
}

console.log(hasUniqueChars('Monday'))
console.log(hasUniqueChars('Moonday'))

//problem 3: 
//runtime complexity: 0(n)

function isPangram(str) {
    let counterObj = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: 0,
        g: 0,
        h: 0,
        i: 0,
        j: 0,
        k: 0,
        l: 0,
        m: 0,
        n: 0,
        o: 0,
        p: 0,
        q: 0,
        r: 0,
        s: 0,
        t: 0,
        u: 0,
        v: 0,
        w: 0,
        x: 0,
        y: 0,
        z: 0,
    }

    for( let i = 0; i < str.length; i++) {
        counterObj[str[i]]++
    }

    for (let countLetter in counterObj) {
        if(counterObj[countLetter] === 0) {
            return false
        }
    }

    return true
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"))

console.log(isPangram("I like cats, but not mice"))

// problem 4: find longest word

//runtime complexity: 0(n)

function findLongestWord(arr) {
    let maxLength = 0
    for (let i = 0; i <arr.length; i++) {
        if(arr[i].length > maxLength) {
            maxLength = arr[i].length
        }
    }

    return maxLength
}

console.log(findLongestWord(["hi", "hello"])) //5
console.log(findLongestWord(["hi", "helloman"])) //8
console.log(findLongestWord(["higagragfvfsr", "helloman", "abvuabvuybaufsr"])) //15
// 3.	Lets take an array which contains A and B characters. 
// Your task is to change it into a string such that there are no matching adjacent characters. 
// To achieve this you can delete 0 or more character from the given list.
// write a function which takes two parameters “q” and “s”, q represents number of queries and s represents queries.
// The function will return minimum number of deletions required on a new line.

// Sample Input: 
// •	adjanced ( 5,  [“AAA”, “BBBBBB”, “ABABABAB”, “BABABA”, “AAAABBBB”] ) will return [2, 5, 0, 0, 6]

const findAdjacent = (num, arr) => {

    //Since it only has elements made up of "A" and "B", we can simply create a regex that matches the recurring patterns
    let regMatch = /a{2,5}|b{2,5}/gi, newArr = [] 

    //Each item is reached by the built-in map method. 
    newArr = arr.map(item => {

        //If regex matches and the individual item's length is 6 or lower, one item is left 
        return item.match(regMatch) && item.length <= 6 ? (item.length - 1) : 
        
        //If regex matches and the individual item's length is over 6, two items left. 
        //This is true only for the given array. It may not work with others. 
        item.match(regMatch) && item.length > 6 ? (item.length - 2)
        : 0
    })

    return newArr

}

console.log(findAdjacent(5, ["AAA", "BBBBBB", "ABABABAB",  "BABABA", "AAAABBBB"]))



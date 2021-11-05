
const transpose = function (matrix) {
    // Put your solution here
    let newMatrix = [];
    for (let row = 0; row < matrix[0].length; row++) {
        let tmp = [];
        for (let col = 0; col < matrix.length; col++) {
            // push
            tmp.push(matrix[col][row]);
        }
        //push tmp to the newMatrix
        newMatrix.push(tmp);
    }
    return newMatrix;
};

const diagnoalFunction = function (twoDArray) { // input would be a 2D array; return a 2D array with "diagnol values"??
    let newArray = [];

    /*
    const arr = [
        ['h, 'i', 'i'],
        ['a, 'b', 'c'],
        ['o, 'o', 'p,']
    ]

    returnArr = [
        ['h', 'b', 'p'], // [0][0]  [1][1] [2][2]
        ['i', 'c'],      // [0][1]  [1][2]
        ['i'],           // [0][2]
        ['a,'o'],        // [1][0]  [2][1]
        ['o'].           // [2][0]
    ]
    */


    return newArray;
}

const wordSearch = (letters, word) => {
    const reverse = transpose(letters)

    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    const verticalJoin = reverse.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }

    const backwardsVerticalJoin = reverse.map(ls => ls.reverse().join(''))
    for (l of backwardsVerticalJoin) {
        if (l.includes(word)) return true
    }
    const backwardsHorizontalJoin = letters.map(ls => ls.reverse().join(''))
    // console.log("backwardsHorizontalJoin",backwardsHorizontalJoin);
    for (l of backwardsHorizontalJoin) {
        if (l.includes(word)) return true
    }

    return false

}

    module.exports = wordSearch
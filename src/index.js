
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr = [];
    let arrResult = 0;
    if (matrix == undefined) {
        return arrResult = [];
    } else {
        for (let i = 0; i < matrix.length; i++) {
            if (i%2!==0) {
                arr = matrix[i].reverse();  
            } 
        } 
    }
            return arrResult = matrix.flat()
}

// 2D Array= multi dimensional array that stores a matrix of data in rows and columns.Array.
//           Useful for games , spreadsheet , ot=r representing images

// [X, O, X]
// [O, X, O]
// [X, O, X]

const matrix=[[1,2,3],
              [4,5,6],
              [7,8,9]]
console.log(matrix)

 
matrix[0][0]='X'
matrix[0][1]='O'
matrix[0][2]='X'

matrix[1][0]='O'
matrix[1][1]='X'
matrix[1][2]='0'

matrix[2][0]='X'
matrix[2][1]='O'
matrix[2][2]='X'



 
for(let row of matrix){
    const rowString= row.join(" ")

    console.log(rowString)
    
}
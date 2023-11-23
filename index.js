
const invertendoArray = (arr) => {
    const newArr = []
    for(let i = arr.length - 1; i >= 0; i--){
       // console.log(arr[i])
        newArr.push(arr[i])
    }
    return newArr
}
console.log(invertendoArray(["OH","HI","MARK"]))
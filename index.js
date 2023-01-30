function rotateLeft(d, arr) {
    let newArray = []
    if(d > arr.length){
      return 
    }
    else{
      for(let i=0;i<d;i++){
        newArray.push(arr.shift(i))
      }

      let rotated = arr.concat(newArray)
      return rotated
    }

}

let array = [1,2,3,4,5]
let rotation = 4
console.log(rotateLeft(rotation,array))
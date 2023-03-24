function onlyNumber(array: any[]) {
   let checkNumber = true;
   array.map((element) => {
      if (typeof element !== 'number') {
         checkNumber = false
      }
   })
   return checkNumber;
}

function sumNumbers(array: any[]) {
   return new Promise((resolve, reject) => {
      if (onlyNumber(array)) {
         let sum = 0;
         for (const value of array) {
            sum += value
         }
         resolve(sum);
      } else {
         reject('Há non-interger element')
      }
   })
}
const getData = async () => {
   const allPromise = Promise.all([
      sumNumbers([1, 2, 3, 4, 5]),
      sumNumbers([2, 2, 3, 4, 5])
   ]
   )
   const lists = await allPromise
   console.log(lists);
}
getData()
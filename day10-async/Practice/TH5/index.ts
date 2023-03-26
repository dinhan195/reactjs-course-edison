function sumNumber(a: any, b: any) {
   return new Promise(
      (resolve, reject) => {
         if (typeof a === "number" && typeof b === "number") {
            let sum = a + b
            resolve(sum);
         } else {
            reject("Not a number")
         }
      }
   )
}
const getData = async (a: any, b: any) => {
   sumNumber(a, b)
      .then(value => {
         console.log(value);
      })
      .catch(err => {
         console.log(err);
      })
}
getData(2, "sd")
getData(2, 3)
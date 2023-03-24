/** @format */

let stocks = {
  Fruits: ['strawberry', 'grapes', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts'],
};


//// functions callbacks
// let order = (fruil_name: string, call_production: { (): void; (): void; }) => {
//   call_production();
// };
// let production = () => {
//   setTimeout(() => {
//     console.log('production has started ');
//     setTimeout(() => {
//       console.log('The fruit has been chopped');
//       setTimeout(() => {
//         console.log(`${stocks.lisuid[0]} anh ${stocks.lisuid[0]} Added`);
//         setTimeout(() => {
//           console.log("start the machine")
//           setTimeout(() => {
//             console.log(`Ice cream placed on ${stocks.holder[1]}`)
//             setTimeout(() => {
//               console.log(`${stocks.toppings[0]} as toppings`)
//               setTimeout(() => {
//                 console.log("serve Ice cream")
//               }, 2000)
//             }, 3000)
//           }, 2000)
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 0);
// };
// order(' ', production);



/////use promises
// let isShopOpen = true
// let order = (time: number, fnWork: any) => {
//   return new Promise((resolve, reject) => {
//     if (isShopOpen) {
//       setTimeout(() => {
//         resolve(fnWork())
//       }, time)
//     } else {
//       reject(console.log("Our shop is close"))
//     }
//   })
// }
// order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
//   .then(() => {
//     return order(2000, () => console.log("production has started"))
//   })
//   .then(() => {
//     return order(2000, () => console.log("Fruit has been chopped"))
//   })
//   .then(() => {
//     return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
//   })

//   .then(() => {
//     return order(1000, () => console.log("start the machine"))
//   })

//   .then(() => {
//     return order(2000, () => console.log(`ice cream placed on ${stocks.holder[1]}`))
//   })

//   .then(() => {
//     return order(3000, () => console.log(`${stocks.toppings[0]} as toppings`))
//   })

//   .then(() => {
//     return order(2000, () => console.log("Serve Ice Cream"))
//   })

//// use async/await

let isShopOpen = true
function time(ms: number) {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(resolve, ms)
    } else {
      reject(console.log('Shop is closed'))
    }
  })
}
async function production() {
  try {
    await time(2000)
    console.log(`${stocks.Fruits[0]} was selected`);
    await time(0)
    console.log("production has started");
    await time(2000)
    console.log("fruit has been chopped");
    await time(1000)
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`);
    await time(1000)
    console.log("start the machine");
    await time(2000)
    console.log(`ice cream placed on ${stocks.holder[1]}`);
    await time(3000)
    console.log(`${stocks.toppings[0]} as toppings`);
    await time(2000)
    console.log("Serve Ice Cream");

  } catch (err) {
    console.log("customer left");
  }
}
production()
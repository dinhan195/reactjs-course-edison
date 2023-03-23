class Product {
   name: string;
   price: number;
   amount: number;
   constructor(name: string, price: number, amount: number) {
      this.name = name;
      this.price = price;
      this.amount = amount;
   }
   addProduct(extraQuantity: number) {
      this.amount += extraQuantity;
   }
}
class Customer {
   name: string;
   quantityOfProduct: number;
   constructor(name: string, quantityOfProduct: number) {
      this.name = name;
      this.quantityOfProduct = quantityOfProduct;
   }
   buyProduct(product: Product, quantity: number) {
      if (product.amount > quantity) {
         product.amount -= quantity;
         this.quantityOfProduct += quantity;
      } else {
         console.log('Output of product');
         return
      }
   }
}
let shirt = new Product('shirt', 20000, 30)
shirt.addProduct(10)
console.log(shirt.amount, 'Amount product');

let customer1 = new Customer('Customer1', 0)
customer1.buyProduct(shirt, 5)
console.log(customer1.quantityOfProduct, 'Quantity of Product');
console.log(shirt.amount, 'Amount product after customer buy');
var Product = /** @class */ (function () {
    function Product(name, price, amount) {
        this.name = name;
        this.price = price;
        this.amount = amount;
    }
    Product.prototype.addProduct = function (extraQuantity) {
        this.amount += extraQuantity;
    };
    return Product;
}());
var Customer = /** @class */ (function () {
    function Customer(name, quantityOfProduct) {
        this.name = name;
        this.quantityOfProduct = quantityOfProduct;
    }
    Customer.prototype.buyProduct = function (product, quantity) {
        if (product.amount > quantity) {
            product.amount -= quantity;
            this.quantityOfProduct += quantity;
        }
        else {
            console.log('Output of product');
            return;
        }
    };
    return Customer;
}());
var shirt = new Product('shirt', 20000, 30);
shirt.addProduct(10);
console.log(shirt.amount, 'Amount product');
var customer1 = new Customer('Customer1', 0);
customer1.buyProduct(shirt, 5);
console.log(customer1.quantityOfProduct, 'Quantity of Product');
console.log(shirt.amount, 'Amount product after customer buy');

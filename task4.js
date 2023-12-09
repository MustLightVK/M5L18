class Shop {
    constructor() {
      this.products = {}; 
    }
  
    addProduct(name, price) {
      if (!this.products.hasOwnProperty(name)) {
        this.products[name] = {};
      }
      this.products[name].price = price; 
    }
  
    calculateTotal() {
      let allPrice = 0;
      for (let count in this.products) {
        allPrice += this.products[count].price; 
      }
      return allPrice;
    }
}
  
const myProducts = new Shop();
myProducts.addProduct('Хлеб', 50);
myProducts.addProduct('Молоко', 80);
myProducts.addProduct('Сок', 100);
    
const totalPrice = myProducts.calculateTotal();
console.log(`Общая сумма: ${totalPrice}`);
  
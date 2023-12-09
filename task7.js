class Warehouse {
    constructor() {
      this.products = {}; 
    }
  
    
    addProduct(name, quantity, cost, date) {
      if (!this.products.hasOwnProperty(name)) {
        this.products[name] = {
          quantity: 0,
          cost: 0,
          date: ''
        };
      }
  
      this.products[name].quantity += quantity;
      this.products[name].cost = cost;
      this.products[name].date = date;

      console.log(`Товар '${name}' добавлен на склад ${date}`);
    }
  
    removeProduct(name, quantity) {
      if (!this.products.hasOwnProperty(name)) {
        console.log(`Товар '${name}' отсутствует на складе`);
        return;
      }
  
      if (this.products[name].quantity < quantity) {
        console.log(`Введенное количество товара '${name}' превышает количество товара на складе`);
        return;
      }
  
      this.products[name].quantity -= quantity;
      console.log(`Из склада удалено ${quantity} единиц товара '${name}'`);
      console.log(`Общая стоимость всех товаров на складе ${warehouse.calculateTotalCost()} рублей`); 
    }
  
    calculateTotalCost() {
      let totalCost = 0;
      for (let count in this.products) {
        let product = this.products[count];
        totalCost += product.quantity * product.cost;
      }
      return totalCost;
    }
}
  
const warehouse = new Warehouse();
  
warehouse.addProduct('Гречка', 100, 65, '22.01.2023');
warehouse.addProduct('Рис', 50, 280, '23.01.2023');
  
console.log(`Общая стоимость всех товаров на складе ${warehouse.calculateTotalCost()} рублей`); 

warehouse.removeProduct('Гречка', 35);

  
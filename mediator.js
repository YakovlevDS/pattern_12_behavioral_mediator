class OfficialDealer {
  constructor() {
    this.customers = [];
  }
  
  orderAuto(customer, auto, info) {
    const name = customer.getName();
    console.log(`Order name: ${name}. Order auto is ${auto}`);
    console.log(`Additional info: ${info}`);
    this.addToCustomersList(name);
  }
  h
  addToCustomersList(name) {
    this.customers.push(name);
  }
  
  getCustomerList() {
    return this.customers;
  }
};

class Customer {
  constructor(name, dealerMediator) {
    this.name = name;
    this.dealerMediator = dealerMediator;
  }
     
  getName() {
    return this.name;
  }
     
  makeOrder(auto, info) {
    this.dealerMediator.orderAuto(this, auto, info)
  }
};
const mediator = new OfficialDealer()
const dzhon =new Customer('Dzhon',mediator)
const valya =new Customer('Valya',mediator)

dzhon.makeOrder('Audi','With parktronik!');
valya.makeOrder('Tesla','With parktronik!');
console.log(mediator.getCustomerList());


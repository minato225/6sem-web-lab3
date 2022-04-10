const Brand = {
  audi: 'audi',
  tesla: 'tesla',
  bmv: 'bmv',
  toyota: 'toyota',
  honda: 'honda',
  ford: 'ford',
  volkswagen: 'volkswagen'
}

class Car {
  constructor(number, brand, mileage, state) {
    this.number = number;
    this.brand = brand;
    this.mileage = mileage;
    this.state = state;
  }
}

class Order {
  constructor(id, brand, mileage, isFinished, departure, destination, startTime) {
    this.id = id;
    this.brand = brand;
    this.mileage = mileage;
    this.isFinished = isFinished;
    this.departure = departure;
    this.destination = destination;
    this.startTime = startTime;
  }
}

class CarDriver {
  constructor(id, name, experience, carNumber) {
    this.id = id;
    this.name = name;
    this.experience = experience;
    this.cacarNumber = carNumber;
  }

  toString() {
    return `#${this.name}: ${this.experience}`;
  }
}


const CarHeader = ['Number', 'Brand', 'Mileage', 'State']
const Cars = [
  new Car('1342', Brand.audi, 1000, true),
  new Car('1432', Brand.tesla, 100, false),
  new Car('4738', Brand.bmv, 5000, true),
  new Car('8549', Brand.toyota, 75000, true),
  new Car('9429', Brand.honda, 4000, false),
  new Car('9402', Brand.ford, 8402, true),
  new Car('9022', Brand.volkswagen, 10000, true),
]

const CarDriverHeader = ['Id', 'Name', 'Experience', 'Car number']
const CarDrivers = [
  new CarDriver(1, 'roman', 1, 1342),
  new CarDriver(1, 'Oleg', 5, 8549),
  new CarDriver(1, 'Ilya', 10, 9402),
  new CarDriver(1, 'Gleb', 3, 9022),
]

const OrderHeader = ['Id', 'Brand', 'Mileage', 'IsFinished', 'Departure', 'Destination', 'Start Time']
const Orders = [
  new Order(1, Brand.audi, 1000, false, 'some town', 'home',  new Date('2022/03/23')),
  new Order(2, Brand.tesla, 100, true, 'some town2', 'home2',  new Date('2022/03/23')),
]
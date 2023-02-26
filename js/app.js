'use strict';

let sectionElem = document.getElementById('cookie-stores');

const hours = [' ', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randomCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// let renderAll = function() {
//   for 
// }
let allCities = [];

function City(city, min, max, avgAmountSale) {
  this.city = city;
  this.min = min;
  this.max = max;
  this.avgAmountSale = avgAmountSale;
  this.cookiesPerHour = [];
  this.storeTotal = 0;

  allCities.push(this);
}

let seattle = new City('Seattle', 23, 65, 6.3);
let tokyo = new City('Tokyo', 3, 24, 1.2);
let dubai = new City('Dubai', 11, 38, 3.7);
let paris = new City('Paris', 20, 38, 2.3);
let lima = new City('Lima', 2, 16, 4.6);

City.prototype.cookiesSold = function () {
  for (let i = 0; i < hours.length; i++) {
    // let customer = this.getAvg();
    let hourlyTotal = Math.floor(randomCust(this.min, this.max) * this.avgAmountSale);
    this.cookiesPerHour.push(hourlyTotal);
    this.storeTotal += hourlyTotal;
  }
};

City.prototype.render = function () {
  this.cookiesSold();
  let articleElem = document.createElement('article');
  sectionElem.appendChild(articleElem);

  let tableElem = document.createElement('table');
  articleElem.appendChild(tableElem);

  // row 1

  for (let i = 0; i < hours.length; i++) {
    let row1 = document.createElement('th');
    tableElem.appendChild(row1);
    row1.textContent = hours[i];
  }

  // let th1Elem = document.createElement('th');
  // th1Elem.textContent = hours;
  // row1.appendChild(th1Elem);

  // row 2


  let row2 = document.createElement('tr');
  tableElem.appendChild(row2);

  let td1Elem = document.createElement('td');
  td1Elem.textContent = this.city;
  row2.appendChild(td1Elem);


  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    let cookieData = document.createElement('td');
    cookieData.textContent = `${this.cookiesPerHour[i]}`;
    row2.appendChild(cookieData);
  }



};
// let seattle = {
//   city: 'Seattle',
//   min: 23,
//   max: 65,
//   avgAmountSale: 6.3,
//   cookiesPerHour: [],
//   storeTotal: 0,

//   },
//   cookiesSold: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let customer = this.getCustomer();
//       let hourlyTotal = Math.floor(customer * this.avgAmountSale);
//       this.cookiesPerHour.push(hourlyTotal);
//       this.storeTotal += hourlyTotal;
//     }
//   },
//   render: function () {
//     let articleElem = document.createElement('article');
//     sectionElem.appendChild(articleElem);

//     let h3Elem = document.createElement('h3');
//     h3Elem.textContent = this.seattle;
//     articleElem.appendChild(h3Elem);

//     let pElem = document.createElement('p');
//     pElem.textContent = this.city;
//     articleElem.appendChild(pElem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);
//     for (let i = 0; i < this.cookiesPerHour.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }

//     let pElem2 = document.createElement('p');
//     pElem2.textContent = `Total: ${this.storeTotal} cookies sold`;
//     articleElem.appendChild(pElem2);
//   }
// };


// let tokyo = {
//   city: 'Tokyo',
//   min: 3,
//   max: 24,
//   avgAmountSale: 1.2,
//   cookiesPerHour: [],
//   storeTotal: 0,
//   getCustomer: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   cookiesSold: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let customer = this.getCustomer();
//       let hourlyTotal = Math.floor(customer * this.avgAmountSale);
//       this.cookiesPerHour.push(hourlyTotal);
//       this.storeTotal += hourlyTotal;
//     }
//   },
//   render: function () {
//     let articleElem = document.createElement('article');
//     sectionElem.appendChild(articleElem);

//     // h3 = name of city
//     let h3Elem = document.createElement('h3');
//     h3Elem.textContent = this.tokyo;
//     articleElem.appendChild(h3Elem);

//     let pElem = document.createElement('p');
//     pElem.textContent = this.city;
//     articleElem.appendChild(pElem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);
//     for (let i = 0; i < this.cookiesPerHour.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }

//     let pElem2 = document.createElement('p');
//     pElem2.textContent = `Total: ${this.storeTotal} cookies sold`;
//     articleElem.appendChild(pElem2);
//   }
// };

// let dubai = {
//   city: 'Dubai',
//   min: 11,
//   max: 38,
//   avgAmountSale: 3.7,
//   cookiesPerHour: [],
//   storeTotal: 0,
//   getCustomer: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   cookiesSold: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let customer = this.getCustomer();
//       let hourlyTotal = Math.floor(customer * this.avgAmountSale);
//       this.cookiesPerHour.push(hourlyTotal);
//       this.storeTotal += hourlyTotal;
//     }
//   },
//   render: function () {
//     let articleElem = document.createElement('article');
//     sectionElem.appendChild(articleElem);

//     // h3 = name of city
//     let h3Elem = document.createElement('h3');
//     h3Elem.textContent = this.dubai;
//     articleElem.appendChild(h3Elem);

//     let pElem = document.createElement('p');
//     pElem.textContent = this.city;
//     articleElem.appendChild(pElem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);
//     for (let i = 0; i < this.cookiesPerHour.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }

//     let pElem2 = document.createElement('p');
//     pElem2.textContent = `Total: ${this.storeTotal} cookies sold`;
//     articleElem.appendChild(pElem2);
//   }
// };
// dubai.cookiesSold();
// dubai.render();

// let paris = {
//   city: 'Paris',
//   min: 20,
//   max: 38,
//   avgAmountSale: 2.3,
//   cookiesPerHour: [],
//   storeTotal: 0,
//   getCustomer: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   cookiesSold: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let customer = this.getCustomer();
//       let hourlyTotal = Math.floor(customer * this.avgAmountSale);
//       this.cookiesPerHour.push(hourlyTotal);
//       this.storeTotal += hourlyTotal;
//     }
//   },
//   render: function () {
//     let articleElem = document.createElement('article');
//     sectionElem.appendChild(articleElem);

//     // h3 = name of city
//     let h3Elem = document.createElement('h3');
//     h3Elem.textContent = this.Paris;
//     articleElem.appendChild(h3Elem);

//     let pElem = document.createElement('p');
//     pElem.textContent = this.city;
//     articleElem.appendChild(pElem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);
//     for (let i = 0; i < this.cookiesPerHour.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }

//     let pElem2 = document.createElement('p');
//     pElem2.textContent = `Total: ${this.storeTotal} cookies sold`;
//     articleElem.appendChild(pElem2);
//   }
// };


// let lima = {
//   city: 'Lima',
//   min: 2,
//   max: 16,
//   avgAmountSale: 4.6,
//   cookiesPerHour: [],
//   storeTotal: 0,
//   getCustomer: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   cookiesSold: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let customer = this.getCustomer();
//       let hourlyTotal = Math.floor(customer * this.avgAmountSale);
//       this.cookiesPerHour.push(hourlyTotal);
//       this.storeTotal += hourlyTotal;
//     }
//   },
//   render: function () {
//     let articleElem = document.createElement('article');
//     sectionElem.appendChild(articleElem);

//     // h3 = name of city
//     let h3Elem = document.createElement('h3');
//     h3Elem.textContent = this.lima;
//     articleElem.appendChild(h3Elem);

//     let pElem = document.createElement('p');
//     pElem.textContent = this.city;
//     articleElem.appendChild(pElem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);
//     for (let i = 0; i < this.cookiesPerHour.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }

//     let pElem2 = document.createElement('p');
//     pElem2.textContent = `Total: ${this.storeTotal} cookies sold`;
//     articleElem.appendChild(pElem2);
//   }
// };
// seattle.cookiesSold();
seattle.render();
// tokyo.cookiesSold();
tokyo.render();
// paris.cookiesSold();
dubai.render();
paris.render();
// lima.cookiesSold();
lima.render();


// // call the cookie function inside of the render, then call the render function


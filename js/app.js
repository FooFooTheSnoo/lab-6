'use strict';

let sectionElem = document.getElementById('cookie-stores');

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  city: 'Seattle',
  min: 23,
  max: 65,
  avgAmountSale: 6.3,
  cookiesPerHour: [],
  storeTotal: 0,
  getCustomer: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  cookiesSold: function () {
    for (let i = 0; i < hours.length; i++) {
      let customer = this.getCustomer();
      let hourlyTotal = Math.floor(customer * this.avgAmountSale);
      this.cookiesPerHour.push(hourlyTotal);
      this.storeTotal += hourlyTotal;
    }
  },
  render: function () {
    let articleElem = document.createElement('article');
    sectionElem.appendChild(articleElem);

    let h3Elem = document.createElement('h3');
    h3Elem.textContent = this.seattle;
    articleElem.appendChild(h3Elem);

    let pElem = document.createElement('p');
    pElem.textContent = this.city;
    articleElem.appendChild(pElem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);
    for (let i = 0; i < this.cookiesPerHour.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
      ulElem.appendChild(liElem);
    }

    let pElem2 = document.createElement('p');
    pElem2.textContent = `Total: ${this.storeTotal} cookies sold`;
    articleElem.appendChild(pElem2);
  }
};
seattle.cookiesSold();
seattle.render();

let tokyo = {
  city: 'Tokyo',
  min: 3,
  max: 24,
  avgAmountSale: 1.2,
  cookiesPerHour: [],
  storeTotal: 0,
  getCustomer: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  cookiesSold: function () {
    for (let i = 0; i < hours.length; i++) {
      let customer = this.getCustomer();
      let hourlyTotal = Math.floor(customer * this.avgAmountSale);
      this.cookiesPerHour.push(hourlyTotal);
      this.storeTotal += hourlyTotal;
    }
  },
  render: function () {
    let articleElem = document.createElement('article');
    sectionElem.appendChild(articleElem);

    // h3 = name of city
    let h3Elem = document.createElement('h3');
    h3Elem.textContent = this.tokyo;
    articleElem.appendChild(h3Elem);

    let pElem = document.createElement('p');
    pElem.textContent = this.city;
    articleElem.appendChild(pElem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);
    for (let i = 0; i < this.cookiesPerHour.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
      ulElem.appendChild(liElem);
    }

    let pElem2 = document.createElement('p');
    pElem2.textContent = `Total: ${this.storeTotal} cookies sold`;
    articleElem.appendChild(pElem2);
  }
};
tokyo.cookiesSold();
tokyo.render();

let dubai = {
  city: 'Dubai',
  min: 11,
  max: 38,
  avgAmountSale: 3.7,
  cookiesPerHour: [],
  storeTotal: 0,
  getCustomer: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  cookiesSold: function () {
    for (let i = 0; i < hours.length; i++) {
      let customer = this.getCustomer();
      let hourlyTotal = Math.floor(customer * this.avgAmountSale);
      this.cookiesPerHour.push(hourlyTotal);
      this.storeTotal += hourlyTotal;
    }
  },
  render: function () {
    let articleElem = document.createElement('article');
    sectionElem.appendChild(articleElem);

    // h3 = name of city
    let h3Elem = document.createElement('h3');
    h3Elem.textContent = this.dubai;
    articleElem.appendChild(h3Elem);

    let pElem = document.createElement('p');
    pElem.textContent = this.city;
    articleElem.appendChild(pElem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);
    for (let i = 0; i < this.cookiesPerHour.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
      ulElem.appendChild(liElem);
    }

    let pElem2 = document.createElement('p');
    pElem2.textContent = `Total: ${this.storeTotal} cookies sold`;
    articleElem.appendChild(pElem2);
  }
};
dubai.cookiesSold();
dubai.render();

let paris = {
  city: 'Paris',
  min: 20,
  max: 38,
  avgAmountSale: 2.3,
  cookiesPerHour: [],
  storeTotal: 0,
  getCustomer: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  cookiesSold: function () {
    for (let i = 0; i < hours.length; i++) {
      let customer = this.getCustomer();
      let hourlyTotal = Math.floor(customer * this.avgAmountSale);
      this.cookiesPerHour.push(hourlyTotal);
      this.storeTotal += hourlyTotal;
    }
  },
  render: function () {
    let articleElem = document.createElement('article');
    sectionElem.appendChild(articleElem);

    // h3 = name of city
    let h3Elem = document.createElement('h3');
    h3Elem.textContent = this.Paris;
    articleElem.appendChild(h3Elem);

    let pElem = document.createElement('p');
    pElem.textContent = this.city;
    articleElem.appendChild(pElem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);
    for (let i = 0; i < this.cookiesPerHour.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
      ulElem.appendChild(liElem);
    }

    let pElem2 = document.createElement('p');
    pElem2.textContent = `Total: ${this.storeTotal} cookies sold`;
    articleElem.appendChild(pElem2);
  }
};
paris.cookiesSold();
paris.render();

let lima = {
  city: 'Lima',
  min: 2,
  max: 16,
  avgAmountSale: 4.6,
  cookiesPerHour: [],
  storeTotal: 0,
  getCustomer: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  cookiesSold: function () {
    for (let i = 0; i < hours.length; i++) {
      let customer = this.getCustomer();
      let hourlyTotal = Math.floor(customer * this.avgAmountSale);
      this.cookiesPerHour.push(hourlyTotal);
      this.storeTotal += hourlyTotal;
    }
  },
  render: function () {
    let articleElem = document.createElement('article');
    sectionElem.appendChild(articleElem);

    // h3 = name of city
    let h3Elem = document.createElement('h3');
    h3Elem.textContent = this.lima;
    articleElem.appendChild(h3Elem);

    let pElem = document.createElement('p');
    pElem.textContent = this.city;
    articleElem.appendChild(pElem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);
    for (let i = 0; i < this.cookiesPerHour.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
      ulElem.appendChild(liElem);
    }

    let pElem2 = document.createElement('p');
    pElem2.textContent = `Total: ${this.storeTotal} cookies sold`;
    articleElem.appendChild(pElem2);
  }
};
lima.cookiesSold();
lima.render();


// call the cookie function inside of the render, then call the render function


// let tokyo = {
//   city: 'tokyo',
//   customerMin: '3',
//   customerMax: '24',
//   AvgCookieSale: '1.2',
//   SeattleAvgArr: [...] //display value os 'ul' in browswer
// }

// let dubai = {
//   city: 'dubai',
//   customerMin: '11',
//   customerMax: '38',
//   AvgCookieSale: '3.7',
//   SeattleAvgArr: [...] //display value os 'ul' in browswer
// }

// let paris = {
//   city: 'Seattle',
//   customerMin: '20',
//   customerMax: '38',
//   AvgCookieSale: '2.3',
//   SeattleAvgArr: [...] //display value os 'ul' in browswer
// }

// let lima = {
//   city: 'Seattle',
//   customerMin: '2',
//   customerMax: '16',
//   AvgCookieSale: '4.6',
//   SeattleAvgArr: [...] //display value os 'ul' in browswer

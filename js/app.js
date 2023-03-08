'use strict';

let tableElem = document.getElementById('cookie-stores');
let tbodyElem = document.createElement('tbody');
tableElem.appendChild(tbodyElem);

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randomCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// let renderAll = function() {
//   for
// }
let allCities = [];
let cityForm = document.getElementById('addedCity');

function renderHeader() {
  let tableHeadElem = document.createElement('thead');
  tableElem.appendChild(tableHeadElem);

  let tableRowElem = document.createElement('tr');
  tableHeadElem.appendChild(tableRowElem);

  let headFirstCell = document.createElement('th');
  tableRowElem.appendChild(headFirstCell);


  for (let i = 0; i < hours.length; i++) {
    let thHeadElem = document.createElement('th');
    tableRowElem.appendChild(thHeadElem);
    thHeadElem.textContent = hours[i];
  }

  let lastHeadCell = document.createElement('th');
  tableRowElem.appendChild(lastHeadCell);
  lastHeadCell.textContent = 'Total';
}

function City(city, min, max, avgAmountSale) {
  this.city = city;
  this.min = min;
  this.max = max;
  this.avgAmountSale = avgAmountSale;
  this.cookiesPerHour = [];
  this.storeTotal = 0;

  allCities.push(this);
}

City.prototype.cookiesSold = function () {
  for (let i = 0; i < hours.length; i++) {
    let hourlyTotal = Math.floor(randomCust(this.min, this.max) * this.avgAmountSale);
    this.cookiesPerHour.push(hourlyTotal);
    this.storeTotal += hourlyTotal;
  }
};

City.prototype.storeCalculatedTotal = function () {
  this.total = 0;
  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    this.total += this.cookiesPerHour[i];
  }
};

City.prototype.renderBody = function () {
  let trBodyElem = document.createElement('tr');
  tableElem.appendChild(trBodyElem);

  let cityElem = document.createElement('td');
  trBodyElem.appendChild(cityElem);
  cityElem.textContent = this.city;

  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    let tdSalesElem = document.createElement('td');
    trBodyElem.appendChild(tdSalesElem);
    tdSalesElem.textContent = this.cookiesPerHour[i];
  }

  let tdTotalElem = document.createElement('td');
  trBodyElem.appendChild(tdTotalElem);
  tdTotalElem.textContent = this.total;
};

function renderFooter() {
  let tfootElem = document.createElement('tfoot');
  tableElem.appendChild(tfootElem);

  let trFooterElem = document.createElement('tr');
  tfootElem.appendChild(trFooterElem);

  let footFirstCell = document.createElement('td');
  trFooterElem.appendChild(footFirstCell);
  footFirstCell.textContent = 'Totals:';

  let totalRowArr = [];
  let grandTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    let currentTotal = 0;
    for (let j = 0; j < allCities.length; j++) {
      currentTotal += allCities[j].cookiesPerHour[i];
    }

    totalRowArr.push(currentTotal);

    grandTotal += totalRowArr[i];

    let baseTotals = document.createElement('td');
    trFooterElem.appendChild(baseTotals);
    baseTotals.textContent = totalRowArr[i];
  }

  // let grandTotal = 0;
  // for (let i = 0; i < totalRowArr.length; i++) {
  //   grandTotal += totalRowArr[i];
  // }
  let superGrandTotal = document.createElement('td');
  trFooterElem.appendChild(superGrandTotal);
  superGrandTotal.textContent = grandTotal;
}

function handleSubmit(event) {
  event.preventDefault();
  let city = event.target.city.value;
  let min = +event.target.min.value;
  let max = +event.target.max.value;
  let avgAmountSale = +event.target.avgAmountSale.value;

  let newestCity = new City(city, min, max, avgAmountSale);




  newestCity.cookiesSold();
  newestCity.storeCalculatedTotal();
  newestCity.renderBody();

  document.querySelector('tfoot').remove();

  cityForm.reset();
  renderFooter();
  console.log(newestCity.cookiesSold());


}

// query selector, remove totals row and 

// eslint-disable-next-line no-unused-vars
let seattle = new City('Seattle', 23, 65, 6.3);
// eslint-disable-next-line no-unused-vars
let tokyo = new City('Tokyo', 3, 24, 1.2);
// eslint-disable-next-line no-unused-vars
let dubai = new City('Dubai', 11, 38, 3.7);
// eslint-disable-next-line no-unused-vars
let paris = new City('Paris', 20, 38, 2.3);
// eslint-disable-next-line no-unused-vars
let lima = new City('Lima', 2, 16, 4.6);

renderHeader();

function renderAllCities() {
  for (let i = 0; i < allCities.length; i++) {

    allCities[i].cookiesSold();
    allCities[i].storeCalculatedTotal();
    allCities[i].renderBody();
  }
}
renderAllCities();

renderFooter();

cityForm.addEventListener('submit', handleSubmit);


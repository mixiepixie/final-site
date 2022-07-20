
fetch('js/data.json')
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  const temples = jsonObject['temples'];
  console.table(jsonObject);  // temporary checking for valid response and data parsing
  temples.forEach(displayTemples);
});

function displayTemples(temple){
// divCardsDisplay = document.querySelector('.directoryGrid');
// createCard = document.createElement('div');
// companyImg = document.createElement('img');
// companyName = document.createElement('h3');
// companyAdd = document.createElement('p');
// companyTel = document.createElement('p');
// companyWebURL = document.createElement('a');

cardsDisplay = document.getElementById('templeGrid');
createCard = document.createElement('div');
templeImg = document.createElement('img');
templeName = document.createElement('h3');
templeAdd = document.createElement('p');
templeTel = document.createElement('p');
templeEmail = document.createElement('p');
templeServices = document.createElement('p');

templeHist = document.createElement('p');
templeOrdSched = document.createElement('p');
templeSeshSched = document.createElement('p');
templeCloseSched = document.createElement('ul');


templeImg.classList.add("templeimg");
templeImg.setAttribute('src', temple.imageurl);
templeImg.setAttribute('alt', `${temple.name} Photo`);

// .join("<br>") + "<br>";
templeServices.innerHTML = temples.services;
console.log(templeServices.innerHTML);

console.log(templeServices.innerHTML);
templeName.textContent = temples.name;
templeAdd.textContent = temples.address;
templeTel.textContent = temples.telnum;


divCardsDisplay.appendChild(createCard);

createCard.appendChild(templeImg);
createCard.appendChild(templeName);
createCard.appendChild(templeAdd);
createCard.appendChild(templeTel);


};

fetch('js/data.json')
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  console.log(jsonObject);
  const temples = jsonObject['temples'];
  console.table(jsonObject);  // temporary checking for valid response and data parsing
  temples.forEach(displayTemples);
});

function displayTemples(temple){


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
heartbutton = document.createElement('button');
// hearticon = document.createElement('i');



const whiteHeart = '\u2661';
const blackHeart = '\u2665';
const button = heartbutton;
button.addEventListener('click', toggle);

button.textContent = whiteHeart;

function toggle() {
  const like = button.textContent;
  if(like==whiteHeart) {
    button.textContent = blackHeart;
    heartbutton.classList.add("blackHeart");
    // window.localStorage.setItem('heart', 'whiteHeart');
  } else {
    button.textContent = whiteHeart;
    heartbutton.classList.remove("blackHeart");
    // window.localStorage.setItem('heart', 'blackHeart');
  }
}

// if (localStorage.getItem("heart") === 'blackHeart'){
//   heartbutton.textContent = blackHeart;
// }
// else{
//   heartbutton.textContent = whiteHeart;
// }

// if (heartbutton.textContent = blackHeart){
  
// }
// }else{
//   
// }

// if (localStorage.getItem("heart") === 'blackHeart'){
//   heartbutton.textContent = blackHeart;
// }
// else{
//   localStorage.removeItem('heart');
//   heartbutton.textContent = whiteHeart;
// }


console.log(window.localStorage);


templeImg.classList.add("templeimg");
templeImg.setAttribute('src', temple.imageurl);
templeImg.setAttribute('alt', `${temple.name} Photo`);
// heartdiv.classList.add("heart");
// hearticon.classList.add('heart fa fa-heart-o');
// .join("<br>") + "<br>";
templeServices.innerHTML = temple.services;

// heartdiv.appendChild(hearticon);

/* <div class="heart">
  <i class="heart fa fa-heart-o"></i>
</div> */

// console.log(templeServices.innerHTML);
// hearticon.textContent = '<i class="heart fa fa-heart-o"></i>';
templeName.textContent = temple.name;
templeAdd.textContent = temple.address;
templeTel.textContent = temple.telnum;
templeHist.textContent = temple.historyurl;
templeOrdSched.textContent = temple.ordinanceSchedule;
templeSeshSched .textContent = temple.sessionSchedule;
templeCloseSched.textContent = temple.templeClosureSchedule;
templeEmail.textContent = temple.email;
templeServices.textContent = temple.services;


cardsDisplay.appendChild(createCard);

createCard.appendChild(templeImg);
createCard.appendChild(templeName);
createCard.appendChild(heartbutton);
createCard.appendChild(templeTel);
createCard.appendChild(templeEmail);
createCard.appendChild(templeAdd);
createCard.appendChild(templeHist);
createCard.appendChild(templeServices);
// createCard.appendChild(templeOrdSched);
createCard.appendChild(templeSeshSched );
createCard.appendChild(templeCloseSched);

createCard.appendChild(templeServices);

console.log(cardsDisplay.innerHTML);

// linebreak = document.createTextNode('<br>');

// templeserviceslifirstitem = temple.services[0];
// firstService = templeserviceslifirstitem.createElement('li');
// firstService.appendChild(linebreak);
// console.log(templeserviceslifirstitem);
// console.log(firstService);

};




// // // heart function below
// (".heart.fa").click(function() {(this).toggleClass("fa-heart fa-heart-o");
// });












// // get the stored value in localStorage
// let likestorage = window.localStorage.getItem("visits-ls"));
// let numDaysStorageValue = Number(window.localStorage.getItem("millissincevisit-ls"));
// console.log(numDaysStorageValue);

// //set values for today's date and calculate one day in Milliseconds
// const todayInMillis = new Date().getTime();
// const oneDayInMillis = 24*60*60*1000;

// //set initial value for date in storage(stored in milliseconds)
// let numDaysMillis = new Date().getTime();


// // determine if this is the first visit or display the number of visits.
// if (numVisits !== 0) {
// 	visitsDisplay.textContent = numVisits;
// 	if (numDaysMillis !== 0){
// 		numDaysDayInt = Math.trunc((todayInMillis - numDaysStorageValue)/oneDayInMillis);
// 		daysSinceLastVisitDisplay.textContent = `It has been ${numDaysDayInt} days since your last visit.`
// 	}
// } else {
// 	visitsDisplay.textContent = `This is your first visit!`;
// }

// // increment the number of visits.
// numVisits++;

// // store the new number of visits value
// localStorage.setItem("visits-ls", numVisits);
// localStorage.setItem("millissincevisit-ls", numDaysMillis);


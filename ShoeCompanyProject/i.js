let addButton = document.getElementById('addBtn')
let flightsList = document.getElementById('flightItems')
let inputField = document.getElementById('flightFields')
let sortPrice = document.getElementById('sortPrice')
let sortRating = document.getElementById('sortRating')
var priceAsc = false
var ratingAsc = false


sortPrice.addEventListener('click', function(){
  if (priceAsc == false) {
    priceAsc = true
    sortPrice.innerText = "Sort by Price(asc)"
  }
  else {
    priceAsc = false
    sortPrice.innerText = "Sort by Price(dec)"
  }
})

sortRating.addEventListener('click', function(){
  if (ratingAsc == false) {
    ratingAsc = true
    sortRating.innerText = "Sort by Rating(asc)"
  }
  else {
    ratingAsc = false
    sortRating.innerText = "Sort by Rating(dec)"
  }
})

addButton.addEventListener('click', function(){
  if (document.getElementById('name').value.length == 0 || 
  document.getElementById('origin').value.length == 0 || 
  document.getElementById('destination').value.length == 0|| 
  document.getElementById('price').value.length == 0|| 
  document.getElementById('rating').value.length == 0) {

  document.getElementById('error').style.display = "block"    
    return
  } 
  
document.getElementById('error').style.display = "none"

  var flight = document.createElement('ul')
  flight.classList.add("card")

  var name = document.createElement('li')
  name.classList.add('padT5')
  name.innerText = "FlightName: " + document.getElementById('name').value
  flight.appendChild(name);

  var where = document.createElement('li')
  where.classList.add('padT5')
  where.innerText = document.getElementById('origin').value + " to " + document.getElementById('destination').value
  flight.appendChild(where)

  var rating = document.createElement('li')
  rating.classList.add('padT5')
  rating.innerText = "Rating: " + document.getElementById('rating').value + "*"
  flight.appendChild(rating);

  var price = document.createElement('li')
  price.classList.add('padT5')
  price.innerText = "Price: Rs." + document.getElementById('price').value
  flight.appendChild(price);

  flightsList.appendChild(flight);
})
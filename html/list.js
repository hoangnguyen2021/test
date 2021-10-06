var apartments = [];
apartments.push(new Apartment("a", "Worst Western", "www.here.com", "Big place", {lat: 33.9598, lng: -83.370}, false));
apartments.push(new Apartment("b", "La Keenta", "www.there.com", "Tiny place", {lat: 33.9598, lng: -83.371}, false));
apartments.push(new Apartment("c", "Holiday Out", "www.este.com", "Broken down", {lat: 33.9598, lng: -83.372}, false));
apartments.push(new Apartment("d", "Mary Ott", "www.coolmath.com", "Affordable", {lat: 33.9598, lng: -83.373}, false));
apartments.push(new Apartment("e", "Fake name", "www.website?.com", "For the rich", {lat: 33.9598, lng: -83.374}, false));
function Apartment(id, name, link, description, position, onMap) {
  this.id = id;
  this.name = name;
  this.link = link;
  this.description = description;
  this.position = position;
  this.onMap = onMap;
}
function loadList() {
  var a = 0;
  while (a < apartments.length) {
    createApartment(a);
    a = a + 1;
  }
}
function function1() {
  var a = 0;
  if (a == 0) {
    displayApartment(false, 1);
  }
  if (a == 1) {
    displayApartment(false, 2);
  }
  if (a == 2) {
    displayApartment(true, 1);
  }
  a = a + 1;
}
function showMap(input) {
  apartments[input].onMap = !apartments[input].onMap;
  var a = 0;
  var mList = [];
  while (a < apartments.length) {
    if (apartments[a].onMap) {
      mList.push(apartments[a].position);
    }
    a = a + 1;
  }
  initMap(mList);
}
function displayApartment(boolean, number) {
  if (boolean) {
    document.getElementById(apartments[number].id).style.display = "block";
  } else {
    document.getElementById(apartments[number].id).style.display = "none";
  }
}
function createApartment(number) {
  var list = document.getElementById("list");
  
  var divElement = document.createElement("div");
  
  divElement.id = apartments[number].id;
  divElement.classList.add("detail");
  
  item = document.createElement("input");
  item.type = "checkbox";
  item.classList.add("check");
  item.addEventListener("click", function() {
    showMap(number);
  });
  divElement.appendChild(item);
  
  item = document.createElement("button");
  item.innerHTML = apartments[number].name;
  item.type = "button";
  item.classList.add("name");
  item.addEventListener("click", function() {
    this.classList.toggle('is-open');
    var content = this.nextElementSibling;
    if (content.style.display == "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
  
  divElement.appendChild(item);
  
  var content = document.createElement("div");
  content.classList.add("content");
  
  item = document.createElement("a");
  item.innerHTML = apartments[number].link;
  item.href = apartments[number].link;
  
  content.appendChild(item);
  
  item = document.createElement("p");
  item.innerHTML = apartments[number].description;
  
  content.appendChild(item);
  divElement.appendChild(content);
  list.appendChild(divElement);
}

/*
 * This function will create all the apartments.
 */
function loadList(list) {
  var a = 0;
  while (a < apartments.length) {
    createApartment(a, list);
    a = a + 1;
  }
}
/*
 * This will refresh all apartments being shown for the list.
 * Any apartment with meets will be shown.
 */
function refresh() {
  var a = 0;
  while (a < apartments.length) {
    displayApartment(a);
    a = a + 1;
  }
}
/* 
 * This will display an apartment properly.
 * It also makes sure no marker is on when it is displayed. (At least it should. I doubt it will.)
 */
function displayApartment(number) {
  if (apartments[number].meets) {
    document.getElementById(apartments[number].id).style.display = "block";
  } else {
    apartments[number].onMap = false;
    document.getElementById(apartments[number].id).style.display = "none";
  }
}
function createApartment(number, list) {
  //var list = document.getElementById("list");
  
  var divElement = document.createElement("div");
  
  divElement.id = apartments[number].id;
  divElement.classList.add("detail");
  
  var itema = document.createElement("button");
  itema.classList.add("check");
  itema.addEventListener("click", function() {
    if (apartments[number].onMap) {
      this.innerHTML = "";
    } else {
      this.innerHTML = "&#10003";
    }
    this.classList.toggle("shown");
    apartments[number].onMap = !apartments[number].onMap;
  });
  divElement.appendChild(itema);
  
  var itemb = document.createElement("button");
  itemb.innerHTML = apartments[number].name;
  itemb.type = "button";
  itemb.classList.add("name");
  itemb.addEventListener("click", function() {
    this.classList.toggle('is-open');
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
  divElement.appendChild(itemb);
  
  var content = document.createElement("div");
  content.classList.add("content");
  
  var itemc = document.createElement("a");
  itemc.innerHTML = apartments[number].link;
  itemc.href = apartments[number].link;
  
  content.appendChild(itemc);
  
  var itemd = document.createElement("p");
  itemd.innerHTML = apartments[number].description;
  
  content.appendChild(itemd);
  divElement.appendChild(content);

  list.appendChild(divElement);
}
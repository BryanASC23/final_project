let zipCode = document.getElementById("zip_code");
let material = document.getElementById("material");
let find_btn = document.getElementById("zip_btn");
let nearestPlaceResult = document.getElementById("nearest_place_result");

find_btn.onclick = function (event) {
  event.preventDefault();
  const zipInput = zipCode.value;
  const MatInput = material.value;

  if (zipInput ==="" && MatInput === "") {
    alert("Please fill in both fields. Thank you!");
}
else if (MatInput === ""){
    alert("Please fill in the material field. Thank you!");

  }
else if (zipInput === "") {
    alert("Please fill in the zip code field. Thank you!");
  } 
  
  else {
    findNearestPlaceByZip(zipInput);
  }
};

function calculateDistanceSquared(lat1, lon1, lat2, lon2) {
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

  // Return the square of the distance
  return a;
}

function findNearestPlaceByZip(zipInput) {
  let nearestPlace = null;
  let smallestDistanceSquared = Infinity;

  for (const place of data) {
    if (place.ZIP_CODE === parseInt(zipInput)) {
      const distanceSquared = calculateDistanceSquared(place.FAC_LATITUDE, place.FAC_LONGITUDE, place.PREF_LATITUDE, place.PREF_LONGITUDE);
      if (distanceSquared < smallestDistanceSquared) {
        nearestPlace = place;
        smallestDistanceSquared = distanceSquared;
      }
    }
  }

  if (nearestPlace) {
    const googleMapsLink = `https://www.google.com/maps?saddr=${zipInput}&daddr=${encodeURIComponent(nearestPlace.FACILITY_NAME + ', ' + nearestPlace.STREET_ADDRESS + ', ' + nearestPlace.CITY_NAME + ', ' + nearestPlace.STATE_ABBR)}`;
    nearestPlaceResult.innerHTML = `The nearest facility based on your zip code, '${zipInput}', is '${nearestPlace.FACILITY_NAME}'. The address is: ${nearestPlace.STREET_ADDRESS}, ${nearestPlace.CITY_NAME}, ${nearestPlace.STATE_ABBR}. <br><br> <a href="${googleMapsLink}" target="_blank">Click here to open on Google Maps</a>`;
  } else {
    nearestPlaceResult.textContent = "No matching facility found.";
  }
}



  
let about = document.getElementById("about_page"); 
let find = document.getElementById("find_location_page");
let create = document.getElementById("create_new_page"); 


//adding alerts if any field is left blank after pressing their respective button (needs to be finished)

//this is for the contact part if every page
let contact = document.getElementById("email_place2"); 
let contactBtn = document.getElementById("email_btn2");

contactBtn.onclick = function (event) {
  event.preventDefault();
  const contactInput = contact.value; 

  if(contactInput == "") {
    alert("Please fill in your email. Thank you!")
  }
  else{
    
  }
}


function Country(name) {
  this.name = name,
  this.cities = []
}

function City(name, longitude, latitude, landmarks) {
  this.name = name,
  this.latitude = latitude,
  this.longitude = longitude,
  this.landmarks = [],
  this.notes = ""
}

Country.prototype.addCity = function(city) {
  this.cities.push(city);
}
City.prototype.addNotes = function(notes){
  this.notes =
}

City.prototype.fullCity = function() {
  return this.name + " " + this.longitude + " " +  this.latitude + " " +  this.landmarks;
}

var kenya = new Country("Kenya");
var malaysia = new Country("Malaysia");
var columbia = new Country("Columbia");

var baragoi = new City("Baragoi", "1º47'N", "36º47'E");
var kuta = new City("Kuta", "1º32", "1º45");
var bogota = new City("Bogota","1º23", "1º50");

kenya.addCity(baragoi);
malaysia.addCity(kuta);
columbia.addCity(bogota);



// USER INTERFACE LOGIC
$(document).ready(function() {
  $("#kenya").click(function() {
      $("#output").text(baragoi.fullCity());
  });

  $("#malaysia").click(function() {
      $("#output").text(kuta.fullCity());
  });

  $("#columbia").click(function() {
      $("#output").text(bogota.fullCity());
  });
});

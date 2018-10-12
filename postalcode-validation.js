//must work for both address and for postal code

//postal code validation
// https://stackoverflow.com/questions/15774555/efficient-regex-for-canadian-postal-code-function
//code to add in the form
//add in the postal code input min = 0 and max=6


// //clean up data first - then check if postal is work
// function postalFilter (location) {
//     console.log("inside postal function");
//     var postalCode = document.getElementById("location").value;
//     //console.log(typeof postalCode);
//     //delete all spaces and hypens
//     console.log(postalCode.replace(/\s|-/g, ""))
//     checkPostal(postalCode);
// };

//var regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
//check function if belonging to the Canadian Postal Code 
function checkPostal(location) {
    var postalCode = document.getElementById("location").value;
    //console.log(typeof postalCode);
    //delete all spaces and hypens
    postalCode = postalCode.replace(/\s|-/g, "");
    // postalFilter(postalCode);
    var canPostal = new RegExp(/^[A-Za-z][0-9][A-Za-z][0-9][A-Za-z][0-9]$/);
    if (canPostal.test(postalCode)) {
        console.log("Valid Canadian postal code");
    } else {
        console.log("Please enter valid postal code or address");
    }
};

// if(!postalCode.match(check)){
    //     alert("Not a valid postal code");
    // } else{
    //     console.log("valid canadian postal code");
    // }
    // //accept the postal code into mongodb
    // console.log(typeOf(location));
//     console.log(typeOf(location));
//     console.log(location.toString());


    // if (! location) {
    //     console.log("invalid postal code");
    //     return null;
    // }
    // location = location.toString().trim();
    // location = location.toString();
    // console.log(location.trim());
    //     var us = new RegExp("^\\d{5}(-{0,1}\\d{4})?$");
//     var ca = new RegExp(/([ABCEGHJKLMNPRSTVXY]\d)([ABCEGHJKLMNPRSTVWXYZ]\d){2}/i);
//     //get a different regex
//     if (us.test(location.toString())) {
//         console.log("USA postal code");
//         return location;
//     }
//     if (ca.test(location.toString().replace(/\W+/g, ''))) {
//         console.log("CAN postal code");
//         return location;
//     }
//     return null;
// }
// function initMap() {
//     var geocoder = new google.maps.Geocoder();
//     var map = new google.maps.Map(document.getElementById('map'), {
//         minZoom: 12,
//         zoom: 12,
//         maxZoom: 15,
//         center: { lat: 43.668655, lng: -79.388664 },
//         disableDefaultUI: true,
//         zoom: 12,
//     });
// // get postal code back from the routes "M6K 3P6" (regex)
//      $.ajax({
//             method: 'GET',
//             url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCBE0UXeRo6yixdCcZOA8CIMS3dGdegj2Q`
//         }).then(function (data) {
      
//             var latlng = data.results[0];

//             console.log(latlng);
//             addMarkers(latlng);
//         });
//           function addMarkers(flexLocation) {
//             var marker = new google.maps.Marker({
//                 position: flexLocation.geometry.location,
//                 map: map,
//                 title: content,
//                 icon: {
//                     url: 'http://images.clipartpanda.com/location-icon-vector-location_map_pin_black5.png',
//                     scaledSize: new google.maps.Size(21, 24)
//                 }


//             });
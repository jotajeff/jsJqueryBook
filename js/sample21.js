var hotel = {
name: 'Grand\'Hotel',
rooms : 40,
booked : 16,

checkAvailability: function() {
return this.rooms - this.booked;
},

roomLotation: function(){
    /// return  100 - ((100 / this.rooms )  * this.booked) ;
    return  (100 / this.rooms )  * this.booked ;
    
}

} ;

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRoomsTotal = document.getElementById('roomsHotel');
elRoomsTotal.textContent = hotel.rooms;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();

var elLotation = document.getElementById('lotation');
elLotation.textContent = hotel.roomLotation();
console.log("hello script js");

// var numberOfSeats = 10;
 // var ticketPrice = 50;
var totalPurchases = 0;
var planeSeats = 10;
var planeTicket = 50;

var inputHappened = function(currentInput){
    console.log( currentInput );
// totalPurchases += 1;

// var plane = {seats: 10,
//             ticket: 50,
//             // purchases:0
//             };
  //each time user types 'yes'
  // numberOfSeats decreses by 1
  //and,ticket price increases by 5% ticketPrice = ticketPrice * 1.05;
    if (currentInput === "yes") {
    // plane.seats = plane.seats - 1;
    // plane.ticket = plane.ticket * 1.05;
            planeSeats = planeSeats - 1;
            planeTicket = planeTicket * 1.05;

     // plane.purchases = plane.purchases +1;
            totalPurchases = totalPurchases +1;
             var message =  totalPurchases + " tickets sold! There are  " + planeSeats + " seats left. New ticket price is " + planeTicket + ".";


    } else {
             message = "Hurry up! The price is raising with each ticket sold!"
    }


 // display(message);
 return message;


}




// when plane has 10 seats ticket price is $50

// //for each seat sold, ticket price goes up 5%
// //store the value of last price
//calculate new price based on last price value
//new price = ticket price * 1.05

//numberOfSeats total free seats
//ticketPrice current price
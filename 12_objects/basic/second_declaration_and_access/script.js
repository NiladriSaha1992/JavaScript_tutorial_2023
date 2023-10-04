const rides = [
  {
    rideName: "Roller Coster",
    rideFor: "adult",
    basicRideCost: 250,
  },
  {
    rideName: "Mickey Mouse",
    rideFor: "children",
    basicRideCost: 50,
  },
  {
    rideName: "Wonder World",
    rideFor: "adult & children",
    basicRideCost: 300,
  }
];

const riders = [
  {
    riderName: "Harshit Lokhanda",
    riderAge: 6,
  },
  {
    riderName: "Harshal Aggarwal",
    riderAge: 36,
  },
  {
    riderName: "Amit Kumar",
    riderAge: 25,
  },
  {
    riderName: "Jitesh Mehta",
    riderAge: 25,
  },
  {
    riderName: "Sushmita Jana",
    riderAge: 24,
  },
  {
    riderName: "Abinash Pramanik",
    riderAge: 28,
  }
];

const tickets = [
  {
    ticketId: 101,
    rideName: "Roller Coster",
    riderName: "Sushmita Jana",
    getRideCost: function(){
      let riderAge, basicRideCost;
      riders.forEach((rider) => {
        if(rider.riderName == this.riderName){
          riderAge = rider.riderAge;
        }
      })
      rides.forEach((ride) => {
        if(ride.rideName == this.rideName){
          basicRideCost = ride.basicRideCost;
        }
      })
      if(riderAge < 12){
        return basicRideCost;
      }else if(riderAge < 18){
        return basicRideCost * 1.2;
      }else if(riderAge < 30){
        return basicRideCost * 1.3;
      }else {
        return basicRideCost * 1.4;
      }
    },
    genReceipt: function(){
      return this.getRideCost() * 1.18;
    },
  },
  {
    ticketId: 102,
    rideName: "Roller Coster",
    riderName: "Abinash Pramanik",
    getRideCost: function(){
      let riderAge, basicRideCost;
      riders.forEach((rider) => {
        if(rider.riderName == this.riderName){
          riderAge = rider.riderAge;
        }
      })
      rides.forEach((ride) => {
        if(ride.rideName == this.rideName){
          basicRideCost = ride.basicRideCost;
        }
      })
      if(riderAge < 12){
        return basicRideCost;
      }else if(riderAge < 18){
        return basicRideCost * 1.2;
      }else if(riderAge < 30){
        return basicRideCost * 1.3;
      }else {
        return basicRideCost * 1.4;
      }
    },
    genReceipt: function(){
      return this.getRideCost() * 1.18;
    },
  },
  {
    ticketId: 103,
    rideName: "Mickey Mouse",
    riderName: "Harshit Lokhanda",
    getRideCost: function(){
      let riderAge, basicRideCost;
      riders.forEach((rider) => {
        if(rider.riderName == this.riderName){
          riderAge = rider.riderAge;
        }
      })
      rides.forEach((ride) => {
        if(ride.rideName == this.rideName){
          basicRideCost = ride.basicRideCost;
        }
      })
      if(riderAge < 12){
        return basicRideCost;
      }else if(riderAge < 18){
        return basicRideCost * 1.2;
      }else if(riderAge < 30){
        return basicRideCost * 1.3;
      }else {
        return basicRideCost * 1.4;
      }
    },
    genReceipt: function(){
      return this.getRideCost() * 1.18;
    },
  },
  {
    ticketId: 104,
    rideName: "Roller Coster",
    riderName: "Harshal Aggarwal",
    getRideCost: function(){
      let riderAge, basicRideCost;
      riders.forEach((rider) => {
        if(rider.riderName == this.riderName){
          riderAge = rider.riderAge;
        }
      })
      rides.forEach((ride) => {
        if(ride.rideName == this.rideName){
          basicRideCost = ride.basicRideCost;
        }
      })
      if(riderAge < 12){
        return basicRideCost;
      }else if(riderAge < 18){
        return basicRideCost * 1.2;
      }else if(riderAge < 30){
        return basicRideCost * 1.3;
      }else {
        return basicRideCost * 1.4;
      }
    },
    genReceipt: function(){
      return this.getRideCost() * 1.18;
    },
  },
  {
    ticketId: 105,
    rideName: "Wonder World",
    riderName: "Amit Kumar",
    getRideCost: function(){
      let riderAge, basicRideCost;
      riders.forEach((rider) => {
        if(rider.riderName == this.riderName){
          riderAge = rider.riderAge;
        }
      })
      rides.forEach((ride) => {
        if(ride.rideName == this.rideName){
          basicRideCost = ride.basicRideCost;
        }
      })
      if(riderAge < 12){
        return basicRideCost;
      }else if(riderAge < 18){
        return basicRideCost * 1.2;
      }else if(riderAge < 30){
        return basicRideCost * 1.3;
      }else {
        return basicRideCost * 1.4;
      }
    },
    genReceipt: function(){
      return this.getRideCost() * 1.18;
    },
  },
  {
    ticketId: 106,
    rideName: "Wonder World",
    riderName: "Jitesh Mehta",
    getRideCost: function(){
      let riderAge, basicRideCost;
      riders.forEach((rider) => {
        if(rider.riderName == this.riderName){
          riderAge = rider.riderAge;
        }
      })
      rides.forEach((ride) => {
        if(ride.rideName == this.rideName){
          basicRideCost = ride.basicRideCost;
        }
      })
      if(riderAge < 12){
        return basicRideCost;
      }else if(riderAge < 18){
        return basicRideCost * 1.2;
      }else if(riderAge < 30){
        return basicRideCost * 1.3;
      }else {
        return basicRideCost * 1.4;
      }
    },
    genReceipt: function(){
      return this.getRideCost() * 1.18;
    },
  },
];

tickets.forEach((ticket) => {
  console.log(`\nTicket no.: ${ticket.ticketId}\nRider name: ${ticket.riderName}\nRide: ${ticket.rideName}\nReceipt: Rs.${ticket.genReceipt().toFixed(2)}/-`);
})
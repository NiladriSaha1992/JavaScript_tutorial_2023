'use strict';
/*
const aboutNiladri = {
  firstname: "Niladri",
  lastname: "Saha",
  gender: "Male",
  job: "Full stack web developer",
  friends: ["Arnab", "Abhisek", "Subhankar", "Bhaskar", "Sujit"],
};

aboutNiladri.country = "India";
aboutNiladri["instagramId"] = "#niladrisaha";

console.log(aboutNiladri);

console.log(
  `${aboutNiladri.firstname} has ${aboutNiladri.friends.length} friends and his best friend is ${aboutNiladri.friends[3]}`
);
*/
/*
// example - 2
const demoJsonData = {
  widget: {
    debug: "on",
    window: {
      title: "Sample Konfabulator Widget",
      name: "main_window",
      width: 500,
      height: 500,
    },
    image: {
      src: "Images/Sun.png",
      name: "sun1",
      hOffset: 250,
      vOffset: 250,
      alignment: "center",
    },
    text: {
      data: "Click Here",
      size: 36,
      style: "bold",
      name: "text1",
      hOffset: 250,
      vOffset: 100,
      alignment: "center",
      onMouseUp: "sun1.opacity = (sun1.opacity / 100) * 90;",
    },
  },
};

console.log(
  `Name of the widget image: ${demoJsonData.widget.image["name"]}\nThe image is ${demoJsonData.widget.image["alignment"]} aligned.\n`
);

console.log(
  `Text data: "${demoJsonData.widget["text"]["data"]}"\nText size: ${demoJsonData.widget["text"]["size"]}\nText style: ${demoJsonData.widget["text"]["style"]}`
);
*/

const person_info = {
  niladri: {
    first_name: 'Niladri',
    last_name: 'Saha',
    dob: '1992-07-11',
    gender: 'Male',
    address: 'Liluah, Howrah, 711204',
    phone: '8981584700',
    job: 'Full stack web developer',
    has_drivers_license: false,
    calcAge: function () {
      const curYr = new Date().getFullYear();
      const birthYr = new Date(this.dob).getFullYear();
      return curYr - birthYr;
    },
    summary: function () {
      return `${this.first_name} is a ${this.calcAge()}-years old ${
        this.job
      }, and he ${
        this.has_drivers_license == true ? 'has' : "doesn't have"
      } a driver's license.`;
    },
  },
  arnab: {
    first_name: 'Arnab',
    last_name: 'Roy',
    dob: '1998-10-08',
    gender: 'Male',
    address: 'Kalyani, Hooghly, 712022',
    phone: '9836562144',
    job: 'Back end developer',
    has_drivers_license: true,
    calcAge: function () {
      const curYr = new Date().getFullYear();
      const birthYr = new Date(this.dob).getFullYear();
      return curYr - birthYr;
    },
    summary: function () {
      return `${this.first_name} is a ${this.calcAge()}-years old ${
        this.job
      }, and he ${
        this.has_drivers_license == true ? 'has' : "doesn't have"
      } a driver's license.`;
    },
  },
  sujit: {
    first_name: 'Sujit',
    last_name: 'Karmakar',
    dob: '1997-09-21',
    gender: 'Male',
    address: 'Chandannagar, Hooghly, 712008',
    phone: '7947852030',
    job: 'Marketing executive',
    has_drivers_license: true,
    calcAge: function () {
      const curYr = new Date().getFullYear();
      const birthYr = new Date(this.dob).getFullYear();
      return curYr - birthYr;
    },
    summary: function () {
      return `${this.first_name} is a ${this.calcAge()}-years old ${
        this.job
      }, and he ${
        this.has_drivers_license == true ? 'has' : "doesn't have"
      } a driver's license.`;
    },
  },
};

// find summary of Sujit
for (let person in person_info) {
  if (person == 'niladri') {
    console.log(person_info[person].summary());
  }
}

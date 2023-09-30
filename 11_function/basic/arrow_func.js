// write a program to select verified email ids
const verifyEmail = function(eml) {
  const email = eml.toLowerCase();
  const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(email.match(pattern)){
    return email;
  }
};

const emails = ["arnabroy24gmail.com", "sahaniladri25y@gmail.com", "sujit.karmakar#ymail.com", "tista.dutta07@gmail.com"];

const verifiedEmails = emails.filter((email) => {
  return verifyEmail(email);
});

console.log("verified emails are:", verifiedEmails.join(", "));

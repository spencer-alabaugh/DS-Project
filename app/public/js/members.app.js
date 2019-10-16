var mambersApp = new Vue({
  el: '#membersApp',
  data: {
    members:  [{
        "firstName":"Aanchal",
        "lastName":"Wadhwani",
        "radioNumber":"R1",
        "stationNumber":"S1",
        "active":"yes"
      },
      {
        "firstName":"Saharsh",
        "lastName":"Arora",
        "radioNumber":"R2",
        "stationNumber":"S2",
        "active":"no"
      },
      {
        "firstName":"Luis",
        "lastName":"Cervantes",
        "radioNumber":"R3",
        "stationNumber":"S3",
        "active":"yes"
      },
      {
        "firstName":"Spencer",
        "lastName":"Alabaugh",
        "radioNumber":"R4",
        "stationNumber":"S4",
        "active":"no"
      }]
  }
})

var newMember = new Vue({
el: "#newMem",
data:
{
  newMembers:
   [
    {
      first:'Luis',
      last:'',
      radio:'',
      station:'',
      yesno:''
    }
  ]
}
})

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

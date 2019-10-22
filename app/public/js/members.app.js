var mambersApp = new Vue({
  el: '#membersApp',
  data: {
<<<<<<< HEAD
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
      first:'',
      last:'',
      radio:'',
      station:'',
      yesno:''
    }
  ]
}
=======
    members:  [],
    newMember: {}
  },
  methods: {
    fetchMembers() {
      fetch('api/members/data_entry.php')
      .then(response => response.json())
      .then(json => {membersApp.members = json})
    },
    handleSubmit() {
      fetch('api/members/membersPost.php', {
        method:'POST',
        body: JSON.stringify(this.newMember),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {membersApp.members.push( json[0] ) })
      .catch( err => {
        console.error('MEMBER POST ERROR:');
        console.error(err);
  });
   this.handleReset();
  },
  handleReset() {
    this.newMember = {
      firstName: '',
      lastName: '',
      radioNumber: '',
      stationNumber: '',
      isActive: ''
    }
  },
  handleRowClick(member){
    membersApp.member = member;
  }
},
  created() {
    this.fetchMembers();
     this.handleReset();
  }
>>>>>>> master
})

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

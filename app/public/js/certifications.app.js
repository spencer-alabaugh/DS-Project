var certificationApp = new Vue({
  el: '#certificationApp',
  data: {
    certifications: [],
    newCertification: {}
  },
  methods: {
    fetchCertifications() {
      fetch('api/certifications/data_entry.php')
      .then(response => response.json())
      .then(json => { certificationApp.certifications = json })
  },
  handleSubmit() {
    fetch('api/certifications/certificationsPost.php', {
      method:'POST',
      body: JSON.stringify(this.newCertification),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then( response => response.json() )
    .then( json => {certificationApp.certifications.push( json[0] ) })
    .catch( err => {
      console.error('MEMBER POST ERROR:');
      console.error(err);
});
 this.handleReset();
},
handleReset() {
  this.newCertification = {
    certificationName: '',
    experationPeriod: '',
    certifyingAgency: ''
  }
},
handleRowClick(member){
  newCertificationApp.member = member;
}
},
  created() {
    this.fetchCertifications();
    this.handleReset();
    }
    })

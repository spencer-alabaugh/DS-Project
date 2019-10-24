var membersCertifiedApp = new Vue({
  el: '#membersCertifiedApp',
  data: {
    memberCertifications: [],
    newMemberCertified: {}
  },
  methods: {
    fetchMemberCertifications() {
      fetch('api/membersCertified/data_entry.php')
      .then(response => response.json())
      .then(json => { membersCertifiedApp.memberCertifications = json })
    },
    handleSubmit() {
      fetch('api/membersCertified/postMemberCertified.php', {
        method:'POST',
        body: JSON.stringify(this.newMemberCertified),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {membersCertifiedApp.memberCertifications.push( json[0] ) })
      .catch( err => {
        console.error('MEMBER POST ERROR:');
        console.error(err);
  });
   this.handleReset();
 },
 handleReset() {
   this.newMemberCertified = {
     memberId: '',
     certificationId: '',
     certifiedDate: '',
     expirationDate: '',
     isActive: ''
   }
 }
  },
  created() {
    this.fetchMemberCertifications();
    this.handleReset();
  }
});

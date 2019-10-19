var membersCertifiedApp = new Vue({
  el: '#membersCertifiedApp',
  data: {
    memberCertifications: []
  },
  methods: {
    fetchMemberCertifications() {
      fetch('api/membersCertified/data_entry.php')
      .then(response => response.json())
      .then(json => { membersCertifiedApp.memberCertifications = json })
    }
  },
  created() {
    this.fetchMemberCertifications();
  }
});

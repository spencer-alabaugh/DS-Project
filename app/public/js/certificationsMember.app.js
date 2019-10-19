var certificationsMemberApp = new Vue({
  el: '#certificationsMemberApp',
  data: {
    certificationsMember: []
  },
  methods: {
    fetchCertificationsMember() {
      fetch('api/certificationsMember/data_entry.php')
      .then(response => response.json())
      .then(json => { certificationsMemberApp.certificationsMember = json })
    }
  },
  created() {
    this.fetchCertificationsMember();
  }
});

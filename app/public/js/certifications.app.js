var certificationApp = new Vue({
  el: '#certificationApp',
  data: {
    certifications: []
  },
  methods: {
    fetchCertifications() {
      fetch('api/certifications/data_entry.php')
      .then(response => response.json())
      .then(json => { certificationApp.certifications = json })
    }
  },
  created() {
    this.fetchCertifications();
  }
});

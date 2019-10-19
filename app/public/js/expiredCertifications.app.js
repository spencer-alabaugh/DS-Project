var expiredCertificationApp = new Vue({
  el: '#expiredCertificationApp',
  data: {
    certifications: [],
    filter: {
      sab: ''
    }
  },
  methods: {
    fetchCertifications() {
      fetch('api/certifications/expired_certifications.php')
      .then(response => response.json())
      .then(json => { expiredCertificationApp.certifications = json })
    }
  },
  created() {
    this.fetchCertifications();
  }
});

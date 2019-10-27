var expiredCertificationApp = new Vue({
  el: '#expiredCertificationApp',
  data: {
    members: [],
    certifications: [],
    distinctCertifications: [],
    filter: {
      certificationId: ''
    }
  },
  methods: {
      getCertifications() {
        fetch('api/certifications/data_entry.php')
        .then(response => response.json())
        .then(json => { expiredCertificationApp.distinctCertifications = json })
    },
    fetchCertifications() {
      fetch('api/certifications/expired_certifications.php')
      .then(response => response.json())
      .then(json => { expiredCertificationApp.certifications = json })
    }
  },
  created() {
    this.fetchCertifications();
    this.getCertifications();
  }
});

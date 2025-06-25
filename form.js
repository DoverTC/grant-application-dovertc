
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("grantForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!this.checkValidity()) {
      this.reportValidity();
      return;
    }

    const fullName = encodeURIComponent(this.fullName.value);
    const email = encodeURIComponent(this.contactEmail.value);

    const docusignURL = `https://powerform.docusign.net/xyz123?FullName=${fullName}&Email=${email}`;
    window.location.href = docusignURL;
  });
});

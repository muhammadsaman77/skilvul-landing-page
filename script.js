// Tambahkan kode JavaScript kalian di file ini
function handleGetFormData() {
  const name = document.getElementById("name").value;
  const city = document.getElementById("city").value;
  const email = document.getElementById("email").value;
  const zipCode = document.getElementById("zip-code").value;
  const status = document.getElementById("status").checked;
  return {
    name,
    email,
    city,
    zipCode,
    status,
  };
}
function isNumber(number) {
  return !isNaN(number);
}
function checkboxIsChecked() {
  const status = document.getElementById("status").checked;
  return status;
}
function validateFormData(data) {
  return data != null && isNumber(data.zipCode) && checkboxIsChecked();
}
function submit() {
  const validate = validateFormData(handleGetFormData());
  if (!validate) {
    document.getElementById("warning").textContent =
      "Periksa form anda sekali lagi";
  } else {
    document.getElementById("warning").textContent = "";
  }
}
document
  .getElementsByTagName("form")[0]
  .addEventListener("submit", function (event) {
    event.preventDefault();
    submit();
  });

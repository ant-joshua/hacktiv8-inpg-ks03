const editForm = () => {
  // display
  var name = document.getElementById("displayName");
  var displayRole = document.getElementById("displayRole");

  // form
  var inputName = document.getElementById("name");
  inputName.value = name.innerText;

  var inputRole = document.getElementById("role");
  inputRole.value = displayRole.innerText;
};

function submitData(event) {
  event.preventDefault();
  // display

  if (confirm("Apakah ingin mengubah data")) {
    var name = document.getElementById("displayName");
    var role = document.getElementById("displayRole");

    // form
    var inputName = document.getElementById("name");
    name.innerText = inputName.value;

    var inputRole = document.getElementById("role");
    role.innerText = inputRole.value;

    alert("Data berhasil diubah");
  }
}

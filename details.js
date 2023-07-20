const detailsForm = document.querySelector("#details-form");

if (detailsForm) {
  detailsForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    window.location.href = "slot_machine.html";
  });
}
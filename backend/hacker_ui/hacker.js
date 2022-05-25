document.querySelector(".inject_btn").addEventListener('click', async () => {
    const code = document.querySelector('#js_code').value;
    // TODO: check code validity in future

    await fetch(`/`, {
        method: 'POST', // or 'PUT'
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ function: code }),
    })
})
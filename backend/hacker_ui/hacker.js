document.querySelector(".inject_btn").addEventListener('click', async () => {
    const code = document.querySelector('#js_code').value;
    // TODO: check code validity in future
    await getUtils();
})
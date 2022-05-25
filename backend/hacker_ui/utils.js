async function getUtils() {
    // ==============UPDATE THE ADDRESS===============
    return await fetch('utils', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then(res => res.json())
        .then(data => {
            return data
        })
        .catch(err => console.log(err))
}

async function postUtils(idx) {
    await fetch(`utils`, {
        method: 'POST', // or 'PUT'
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({index : idx }),
    })
}

document.addEventListener("DOMContentLoaded", async () => {
    const utils = await getUtils();
    const table = document.querySelector('.utility_table');
    for (const idx in utils) {
        const dict = utils[idx]
        const row = document.createElement("tr")
        const col1 = document.createElement("td");
        col1.textContent = dict.name;
        const col2 = document.createElement("td");
        col2.textContent = dict.description;
        const col3 = document.createElement("td");
        const btn = document.createElement("button")
        btn.onclick = async () => await postUtils(idx);
        btn.classList.add("table_inject_btn")
        btn.textContent = "inject_code"
        col3.appendChild(btn);

        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        table.appendChild(row);
    }
})
const button= document.querySelector('button');
const pElement = document.querySelector('p');
const table = document.querySelector('table');

let rivienMaara= 0;


button.addEventListener('click', () => {
    lisaaJokeriRivi();
    rivienMaara++;
    pElement.textContent = `Valmiita rivejä ${rivienMaara}`;
})

function lisaaJokeriRivi() {
    const tr = document.createElement('tr');

    for (let i = 0; i < 7; i++) {
        const td = document.createElement('td');
        td.textContent = Math.floor(Math.random() * 10);
        tr.appendChild(td);
    }

    table.appendChild(tr);
}
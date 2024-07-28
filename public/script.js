 function parsePrice(id) {
    const value = document.getElementById(id).value;
    return value === "" ? 0 : parseFloat(value);
 }

function post_form() {
    console.log('zerza', parseFloat(document.getElementById('alph-price').value))

    const data = {
        url: document.getElementById('url').value,
        authentication: document.getElementById('authKey').value + "=" + document.getElementById("authValue").value,
        keywords: document.getElementById('keywords').value.split(','),
        blockchains: {
            ALEPHIUM: {
                address: document.getElementById('alph-address').value,
                price_by_hour: parsePrice('alph-price'),
            },
            ETHEREUM: {
                address: document.getElementById('eth-address').value,
                price_by_hour: parsePrice('eth-price'),
            }
        }
    };

    fetch(
        'https://api.usetoll.com/toll/api/v1/configs',
        {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        }
    ).then(res => res.json().then(data => {
        console.log('DATA', data);
        const records = data.records;
        const url = document.getElementById('url').value;
        const domain = url.split('/')[2];
        document.getElementById('dns0').value = `configtoll.${domain} TXT ${records[0]}`;
        document.getElementById('dns1').value = `configtoll.${domain} TXT ${records[1]}`;


        const goto = document.getElementById('goto');
        const urlUseToll = `${url.replaceAll('.', '--')}.usetoll.com`;

        goto.innerText = urlUseToll;
        goto.onclick = () => window.open(url, '_blank');
        goto.disabled = false;
    }));

}

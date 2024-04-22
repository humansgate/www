 function post_form() {

    const data = {
        url: document.getElementById('url').value,
        address: document.getElementById('address').value,
        price_by_hour: document.getElementById('price').value,
        authentication: document.getElementById('authKey').value + "=" + document.getElementById("authValue").value,
        keywords: document.getElementById('keywords').value.split(',')
    };

    fetch(
        'https://api.usetoll.com/toll/settings',
        {
            method: 'POST',
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

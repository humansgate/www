 function post_form() {

    const data = {
        url: document.getElementById('url').value,
        address: document.getElementById('address').value,
        price_by_hour: document.getElementById('price').value,
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
        const record = data.record;
        const domain = document.getElementById('url').value;
        document.getElementById('dns').value = `configtoll.${domain} TXT ${record}`;

        const goto = document.getElementById('goto');
        const url = `https://${domain.replace('.', '--')}.usetoll.com`;

        goto.innerText = url;
        goto.onclick = () => window.open(url, '_blank');
        goto.disabled = false;
    }));

}

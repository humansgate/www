i18next.init({
    lng: "en",
    fallback: 'en',
    debug: true,
    resources: {
        en: { translation: enTranslate }
    }
}, function (err, t) {
    updateContent();
});

function updateContent() {
    var all = document.getElementsByTagName("*");
    for (let element of all) {
        if (element.id.startsWith('t::')) {
            const key = element.id.split("::")[2];
            console.log('KEY', key);
            element.innerHTML = i18next.t(key);
        }
    }
}

function changeLanguage(language) {
    i18next.changeLanguage(language, function(err, t) {
        if (err) return console.log('something went wrong loading', err);
        updateContent();
    });
}


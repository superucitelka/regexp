
/* Objekt RegularExpress -  */
let RegularExpress = {
    /* Atributy objeku */
    regex : new RegExp('', 'g'), // Regulární výraz s globální platností (pro celý ověřovaný text)
    text : '', // Testovaný text
    substitute: '',
    /* Metody objektu */
    /* Vyhledá, zda text odpovídá zadanému regulárnímu výrazu */
    search: function() {
        return this.text.search(this.regex) > -1 ? 'Validní' : 'Nevalidní';
    },
    /* Nahradí v textu část definovanou regulárním výrazem požadovaným řetězcem */
    replace: function() {
        return this.text.replace(this.regex, this.substitute)
    },
}

/* Akce po kliknutí na tlačítko Ověřit (id=search) */
document.getElementById('search').addEventListener('click', function(){
    RegularExpress.regex = new RegExp(document.getElementById('regex').value, 'g');
    RegularExpress.text = document.getElementById('text').value;
    /* Zobrazení výsledku hledání + grafická úprava pomocí */
    let result = RegularExpress.search();
    document.getElementById('result').removeAttribute('class');
    if (result == 'Validní')
        document.getElementById('result').classList.add('alert','alert-success');
    else
        document.getElementById('result').classList.add('alert','alert-danger');
    document.getElementById('result').innerHTML = result;
});

/* Akce po kliknutí na tlačítko Nahradit (id=replace) */
document.getElementById('replace').addEventListener('click', function(){
    RegularExpress.regex = new RegExp(document.getElementById('regex').value, 'g');
    RegularExpress.text = document.getElementById('text').value;
    RegularExpress.substitute = document.getElementById('substitute').value;
    document.getElementById('result').removeAttribute('class');
    document.getElementById('result').classList.add('alert','alert-warning');
    document.getElementById('result').innerHTML = RegularExpress.replace();
});
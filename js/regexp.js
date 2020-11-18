
/* Objekt RegularExpress -  */
var RegularExpress = {
    /* Atributy objeku */
    regex : new RegExp('', 'gi'), // Regulární výraz
    text : '', // Testovaný text
    substitute: new RegExp('', 'gi'),
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
    RegularExpress.regex = new RegExp(document.getElementById('regex').value, 'gi');
    RegularExpress.text = document.getElementById('text').value;
    document.getElementById('result').innerHTML = RegularExpress.search();
});

/* Akce po kliknutí na tlačítko Nahradit (id=replace) */
document.getElementById('replace').addEventListener('click', function(){
    RegularExpress.regex = new RegExp(document.getElementById('regex').value, 'gi');
    RegularExpress.text = document.getElementById('text').value;
    RegularExpress.substitute = document.getElementById('substitute').value;
    document.getElementById('result').innerHTML = RegularExpress.replace();
});
let contador = 1;

//cada vzs q checked vai contar 1
//uma função ocorra a cada espaço de tempo (setinterval)
setInterval( function(){
    //vai dar um checked para cada elemento
    document.getElementById('slide' + contador).checked = true;
    contador++;
    /*reinicia - para n ficar em loop - condicional*/
    if(counter > 5 ) {
        contador = 1;
    }
//em 3milisegundos essa função vai ocorrer
}, 2500 );

const wrapper = document.querySelector('.wrapper');
const botaoLogin = document.getElementById('botaoLogin');
const loginLink = document.querySelector('.login-link');
const iconClose = document.getElementById('icon-close');


botaoLogin.addEventListener('click', () => {
    wrapper.classList.add('active-botao');
    document.getElementById('wrapper').style.transform='scale(1)';
});

iconClose.addEventListener('click', () => {
    wrapper.classList.add('active-botao');
    document.getElementById('wrapper').style.transform='scale(0)';
});

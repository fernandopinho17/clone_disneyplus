document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    for (let i =0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id= ${abaAlvo}]`)
            escondeTodasAbas();
            aba.classList.add('shows_list--is-active');
            removeBotãoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }
})

function removeBotãoAtivo() {
    const buttons = document.querySelectorAll('dat[data-tab-id]');

    for (let i =0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function escondeTodasAbas() {
    const tabsContainer = documentt.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows_list--is-active');
    }

}
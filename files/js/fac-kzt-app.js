var $ = $;
$(".fac-header__top-bar").slick({
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: false
});

var altura = window.screen.height;

function openNav() {
    document.getElementById("mySidenav").style.animation = "expand 0.3s forwards";
    //closeBtn
    document.getElementById("closeBtn").style.display = "block";
    document.getElementById("closeBtn").style.position = "fixed";
    document.getElementById("closeBtn").style.animation = "show 0.3s";
    //Overlay
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlay").style.animation = "show 0.3s";

}

function closeNav() {
    document.getElementById("mySidenav").style.animation = "collapse 0.3s forwards";
    //closeBtn
    document.getElementById("closeBtn").style.animation = "hide 0.3s";
    //Overlay
    document.getElementById("overlay").style.animation = "hide 0.3s";

    setTimeout(() => {
        document.getElementById("closeBtn").style.display = "none";
        document.getElementById("closeBtn").style.position = "inherit";
        document.getElementById("overlay").style.display = "none";
        //Reset Menus
        document.getElementById("main-container").style.animation = "";
        document.getElementById("main-container").style.transform = "translateX(0px)";
        document.getElementById("sub-container").style.animation = "";
        document.getElementById("sub-container").style.transform = "translateX(380px)";
    }, 300)
}

let firstDropdownOpen = false;

function firstDropDown() {
    firstDropdownOpen = !firstDropdownOpen;
    if(firstDropdownOpen) {
        document.querySelector("#firstDropDown i").setAttribute("class", "fas fa-chevron-up");
        document.querySelector("#firstDropDown div").innerHTML = "Ver menos";
        //Handle Container
        document.getElementById("firstContainer").style.display = "block";
        document.getElementById("firstContainer").style.animation = "expandDropDown 0.3s forwards";
        document.getElementById("firstContainer").style.transition = "height 0.3s";
        document.getElementById("firstContainer").style.height = "410px";
    }else{
        document.querySelector("#firstDropDown i").setAttribute("class", "fas fa-chevron-down");
        document.querySelector("#firstDropDown div").innerHTML = "Ver mais";
        //Handle Container
        document.getElementById("firstContainer").style.animation = "collapseDropDown 0.2s forwards";
        document.getElementById("firstContainer").style.transition = "height 0.2s";
        document.getElementById("firstContainer").style.height = "0px";
        setTimeout(() => {
            document.getElementById("firstContainer").style.display = "none";
        }, 200)
        
    }
}

let secondDropDownOpen = false;

function secondDropDown() {
    secondDropDownOpen = !secondDropDownOpen;

    if(secondDropDownOpen) {
        document.querySelector("#secondDropDown i").setAttribute("class", "fas fa-chevron-up");
        document.querySelector("#secondDropDown div").innerHTML = "Ver menos";
        //Handle Container
        document.getElementById("secondContainer").style.display = "block";
        document.getElementById("secondContainer").style.animation = "expandDropDown 0.3s forwards";
        document.getElementById("secondContainer").style.transition = "height 0.3s";
        document.getElementById("secondContainer").style.height = "260px";
    }else{
        document.querySelector("#secondDropDown i").setAttribute("class", "fas fa-chevron-down");
        document.querySelector("#secondDropDown div").innerHTML = "Ver mais";
        //Handle Container
        document.getElementById("secondContainer").style.animation = "collapseDropDown 0.2s forwards";
        document.getElementById("secondContainer").style.transition = "height 0.2s";
        document.getElementById("secondContainer").style.height = "0px";
        setTimeout(() => {
            document.getElementById("secondContainer").style.display = "none";
        }, 200)
        
    }
}

document.querySelectorAll(".sidenavRow").forEach(row => {
    row.addEventListener("click", () => {
        document.getElementById("main-container").style.animation = "mainAway 0.3s forwards";
        document.getElementById("sub-container").style.animation = "subBack 0.3s forwards";
    });
});

document.getElementById("mainMenu").addEventListener("click", () => {
    document.getElementById("main-container").style.animation = "mainBack 0.3s forwards";
    document.getElementById("sub-container").style.animation = "subPush 0.3s forwards";
})

//subNavContent

function openDepCozinha() {
    document.getElementById("sub-container-content").innerHTML = `<div class="sidenavContentHeader">Cozinha</div>
    <a href="#"><div class="sidenavContent">Porta-condimentos</div></a>
    <a href="#"><div class="sidenavContent">Potes e porta-mantimentos</div></a>
    <a href="#"><div class="sidenavContent">Marmitas</div></a>
    <a href="#"><div class="sidenavContent">Louças e talheres</div></a>
    <a href="#"><div class="sidenavContent">Sousplat e lugar americano</div></a>
    <a href="#"><div class="sidenavContent">Utensílios de cozinha</div></a>
    <a href="#"><div class="sidenavContent">Bandejas</div></a>
    <a href="#"><div class="sidenavContent">Taças e copos de cozinha</div></a>
    <a href="#"><div class="sidenavContent">Utilidades de cozinha</div></a>
    <a href="#"><div class="sidenavContent">Outros itens de cozinha</div></a>
    <a href="#"><div class="sidenavContent">Suqueiras</div></a>
    <a href="#"><div class="sidenavContent">Jarras</div></a>
    <a href="#"><div class="sidenavContent">Tigelas</div></a>
    <div class="sidenavContentHeader">Café e chá</div>
    <a href="#"><div class="sidenavContent">Cafeteiras, bules e chaleiras</div></a>
    <a href="#"><div class="sidenavContent">Moedores, infusores e coadores</div></a>
    <a href="#"><div class="sidenavContent">Canecas, xícaras e copos térmicos</div></a>
    <a href="#"><div class="sidenavContent">Garrafas térmicas</div></a>
    <a href="#"><div class="sidenavContent">Outros itens de café e chá</div></a>
    <div class="sidenavContentHeader">Copos e garrafas</div>
    <a href="#"><div class="sidenavContent">Garrafas inox</div></a>
    <a href="#"><div class="sidenavContent">Garrafas de plástico</div></a>
    <a href="#"><div class="sidenavContent">Copos</div></a>
    <a href="#"><div class="sidenavContent">Outros itens de copos e garrafas</div></a>`;
}

function openDepDecoracao() {
    document.getElementById("sub-container-content").innerHTML = `<div class="sidenavContentHeader">Decoração</div>
    <a href="#"><div class="sidenavContent">Papéis de parede</div></a>
    <a href="#"><div class="sidenavContent">Quadros, placas e porta-retratos</div></a>
    <a href="#"><div class="sidenavContent">Espelhos</div></a>
    <a href="#"><div class="sidenavContent">Peças decorativas</div></a>
    <a href="#"><div class="sidenavContent">Luminárias</div></a>
    <a href="#"><div class="sidenavContent">Outros itens de decoração</div></a>
    <div class="sidenavContentHeader">Relógios</div>
    <a href="#"><div class="sidenavContent">Relógios de parede</div></a>
    <a href="#"><div class="sidenavContent">Relógios de mesa</div></a>
    <a href="#"><div class="sidenavContent">Outros itens de relógios</div></a>`;
}

function openDepUtilidades() {
    document.getElementById("sub-container-content").innerHTML = `<div class="sidenavContentHeader">Utilidades e acessórios</div>
    <a href="#"><div class="sidenavContent">Utilidades e acessórios manuais</div></a>
    <a href="#"><div class="sidenavContent">Utilidades e acessórios eletrônicos</div></a>
    <a href="#"><div class="sidenavContent">Utilidades de limpeza</div></a>
    <a href="#"><div class="sidenavContent">Outros itens de utilidades e acessórios</div></a>`;
}

function openDepOrganizacao() {
    document.getElementById("sub-container-content").innerHTML = `<div class="sidenavContentHeader">Organização</div>
    <a href="#"><div class="sidenavContent">Prateleiras, organizadores e divisórias</div></a>
    <a href="#"><div class="sidenavContent">Caixas e cestas</div></a>
    <a href="#"><div class="sidenavContent">Ganchos e suportes</div></a>
    <a href="#"><div class="sidenavContent">Outros itens de organização</div></a>`;
}

function openDepInfantil() {
    document.getElementById("sub-container-content").innerHTML = `<div class="sidenavContentHeader">Infantil e bebês</div>
    <a href="#"><div class="sidenavContent">Veículos de brinquedo</div></a>
    <a href="#"><div class="sidenavContent">Conjuntos</div></a>
    <a href="#"><div class="sidenavContent">Bonecas e bonecos</div></a>
    <a href="#"><div class="sidenavContent">Piscina</div></a>
    <a href="#"><div class="sidenavContent">Fantasias</div></a>
    <a href="#"><div class="sidenavContent">Armas de brinquedo</div></a>
    <a href="#"><div class="sidenavContent">Bolas e atividade física</div></a>
    <a href="#"><div class="sidenavContent">Livros infantis</div></a>
    <a href="#"><div class="sidenavContent">Bicicletas, patinetes e triciclos</div></a>
    <a href="#"><div class="sidenavContent">Outros itens infantis</div></a>`;
}

function openDepCama() {
    document.getElementById("sub-container-content").innerHTML = `<div class="sidenavContentHeader">Quarto e sala</div>
    <a href="#"><div class="sidenavContent">Tapetes</div></a>
    <a href="#"><div class="sidenavContent">Almofadas</div></a>
    <a href="#"><div class="sidenavContent">Capas</div></a>
    <a href="#"><div class="sidenavContent">Utilidades de quarto e sala</div></a>
    <a href="#"><div class="sidenavContent">Outros itens de quarto e sala</div></a>
    <div class="sidenavContentHeader">Incensos, velas e aromatizantes</div>
    <a href="#"><div class="sidenavContent">Incensos e incensários</div></a>
    <a href="#"><div class="sidenavContent">Velas</div></a>
    <a href="#"><div class="sidenavContent">Difusores</div></a>
    <a href="#"><div class="sidenavContent">Outros itens de aromatizantes</div></a>
    <div class="sidenavContentHeader">Banho</div>
    <a href="#"><div class="sidenavContent">Toalhas</div></a>
    <a href="#"><div class="sidenavContent">Ganchos e prateleiras de banho</div></a>
    <a href="#"><div class="sidenavContent">Lixeiras</div></a>
    <a href="#"><div class="sidenavContent">Tapetes de banheiro</div></a>
    <a href="#"><div class="sidenavContent">Utilidades de banho</div></a>
    <a href="#"><div class="sidenavContent">Outros itens de banho</div></a>`;
}

function openDepFloricultura() {
    document.getElementById("sub-container-content").innerHTML = `<div class="sidenavContentHeader">Floricultura e jardim</div>
    <a href="#"><div class="sidenavContent">Vasos e cachepots</div></a>
    <a href="#"><div class="sidenavContent">Plantas e flores decorativas</div></a>
    <a href="#"><div class="sidenavContent">Ornamentos de floricultura e jardim</div></a>
    <a href="#"><div class="sidenavContent">Outros itens de floricultura e jardim</div></a>`;
}

function openDepBar() {
    document.getElementById("sub-container-content").innerHTML = `<div class="sidenavContentHeader">Bar</div>
    <a href="#"><div class="sidenavContent">Copos, taças e canecas de bar</div></a>
    <a href="#"><div class="sidenavContent">Baldes de bar</div></a>
    <a href="#"><div class="sidenavContent">Coqueteleiras</div></a>
    <a href="#"><div class="sidenavContent">Jogos de bar</div></a>
    <a href="#"><div class="sidenavContent">Vinho</div></a>
    <a href="#"><div class="sidenavContent">Decoração de bar</div></a>
    <a href="#"><div class="sidenavContent">Outros itens de bar</div></a>`;
}

function openDepPapelaria() {
    document.getElementById("sub-container-content").innerHTML = `<div class="sidenavContentHeader">Papelaria</div>
    <a href="#"><div class="sidenavContent">Quadros de recado e planejamento</div></a>
    <a href="#"><div class="sidenavContent">Agendas, planners e blocos de anotação</div></a>
    <a href="#"><div class="sidenavContent">Canetas, lápis, pincéis e marca-texto</div></a>
    <a href="#"><div class="sidenavContent">Porta-canetas e objetos</div></a>
    <a href="#"><div class="sidenavContent">Globos terrestres</div></a>
    <a href="#"><div class="sidenavContent">Estojos</div></a>
    <a href="#"><div class="sidenavContent">Bolsa/Mochila escolar</div></a>
    <a href="#"><div class="sidenavContent">Outros itens de papelaria</div></a>
    <div class="sidenavContentHeader">Livros</div>
    <a href="#"><div class="sidenavContent">Livros</div></a>`;
}

function openDepMoveis() {
    document.getElementById("sub-container-content").innerHTML = `<div class="sidenavContentHeader">Móveis</div>
    <a href="#"><div class="sidenavContent">Pufes</div></a>
    <a href="#"><div class="sidenavContent">Baús</div></a>
    <a href="#"><div class="sidenavContent">Armários e cabideiros de chão</div></a>
    <a href="#"><div class="sidenavContent">Outros itens de móveis</div></a>
    <a href="#"><div class="sidenavContent">Mesas de varanda</div></a>`;
}

function openDepBolsas() {
    document.getElementById("sub-container-content").innerHTML = `<div class="sidenavContentHeader">Bolsas e necessaires</div>
    <a href="#"><div class="sidenavContent">Bolsas e mochilas</div></a>
    <a href="#"><div class="sidenavContent">Bolsas térmicas</div></a>
    <a href="#"><div class="sidenavContent">Necessaires e porta-moedas</div></a>
    <a href="#"><div class="sidenavContent">Outros itens de bolsas e necessaires</div></a>`;
}

function openDepJogos() {
    document.getElementById("sub-container-content").innerHTML = `<div class="sidenavContentHeader">Jogos</div>
    <a href="#"><div class="sidenavContent">Jogos de mesa</div></a>
    <a href="#"><div class="sidenavContent">Jogos diversos</div></a>`;
}



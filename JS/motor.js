var discos=[
    {
        foto:"IMG/1.jpg",
        autor:"Melendi",
        nombre:"Quitate las gafas",
        precio:10,
        disponible:true
    },

    {
        foto:"IMG/2.jpg",
        autor:"PinkFloyd",
        nombre:"The dark side of the moon",
        precio:10,
        disponible:true
    },

    {
        foto:"IMG/3.jpg",
        autor:"Eminem",
        nombre:"The eminem",
        precio:12.99,
        disponible:true
    },

    {
        foto:"IMG/4.jpg",
        autor:"Elvis Presley",
        nombre:"Elvis",
        precio:15,
        disponible:true
    },

    {
        foto:"IMG/5.jpg",
        autor:"Guns 'n' Roses",
        nombre:"Guns 'n' Roses",
        precio:15,
        disponible:true
    },

    {
        foto:"IMG/6.jpg",
        autor:"Beatles",
        nombre:"Beatles",
        precio:15,
        disponible:true
    },

    {
        foto:"IMG/7.jpg",
        autor:"AC/DC",
        nombre:"AC/DC",
        precio:15,
        disponible:true
    },

    {
        foto:"IMG/8.jpg",
        autor:"IRON MAIDEN",
        nombre:"IRON MAIDEN",
        precio:15,
        disponible:true
    },

    {
        foto:"IMG/9.jpg",
        autor:"Metallica",
        nombre:"Metallica",
        precio:15,
        disponible:true
    },

    {
        foto:"IMG/10.jpg",
        autor:"Pablo Lopez",
        nombre:"Pablo Lopez",
        precio:15,
        disponible:true
    },
]

pintar();

var numeroC=0;


function pintar(){
    for(let x=0;x<discos.length; x++){
        document.getElementById('contenedorDisco').innerHTML+=`<div class="caja">
                                                                    <img src="${discos[x].foto}" alt="">
                                                                    <div class="detalle">
                                                                    <div>${discos[x].nombre}</div>
                                                                    ${discos[x].precio}
                                                                    <i class="fas fa-shopping-basket" onclick="anadircarrito()"></i>
                                                                    </div>
                                                                </div>`
    }
}

function anadircarrito(){
    numeroC++;
    document.getElementById('numeroDiscos').innerHTML=numeroC;
}
// IMAGENES --------------------------------------------------------------------------
let posicion_imagen = 0;
let imagenes = [
	{ name: "2.png", width: "330px", top: "-15px", left: "-5px" },
	{ name: "1.png", width: "360px", top: "15px", left: "-18px" },
	{ name: "3.png", width: "350px", top: "25px", left: "-20px" },
	{ name: "4.png", width: "310px", top: "-64px", left: "0px" },
];
const elemento_img = document.getElementById("imagenes");
function cambiarImagenes() {
	elemento_img.hidden = true;
	elemento_img.style.top = imagenes[posicion_imagen].top;
	elemento_img.style.left = imagenes[posicion_imagen].left;
	elemento_img.style.width = imagenes[posicion_imagen].width;
	elemento_img.src = "./img/" + imagenes[posicion_imagen].name;

	setTimeout(() => {
		elemento_img.hidden = false;
	}, 50);
	posicion_imagen < imagenes.length - 1 ? posicion_imagen++ : (posicion_imagen = 0);
}

// FOTOS --------------------------------------------------------------------------
let posicion_foto = 0;
const fotos = ["foto1.jpg"];
const elemento_foto = document.getElementById("foto");
function cambiarFoto() {
	// elemento_foto.hidden = true;
	elemento_foto.src = "./img/" + fotos[posicion_foto];

	setTimeout(() => {
		// elemento_img.hidden = false;
	}, 50);
	posicion_foto < fotos.length - 1 ? posicion_foto++ : (posicion_foto = 0);
}

cambiarImagenes();
cambiarFoto();

function remove_loader() {
	let loader = document.getElementById("loader");
	// remove loader element
	loader.parentNode.removeChild(loader);
	audio.play();
}


window.onload = () => {
	if (imagenes.length > 1) setInterval(cambiarImagenes, 6000);
	if (fotos.length > 1) setInterval(cambiarFoto, 2000);
};

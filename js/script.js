
const msj = document.querySelector("#textarea"); 
const btnEncriptar = document.querySelector("#encriptar"); 
const btnDesencriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");
const msjFinal = document.querySelector("#resultado");

const msjEncriptar = txt => {
  // Función para encriptar una sola letra
  switch (txt) {
    case 'a':
      return 'iae';
    case 'e':
      return 'etr';
    case 'i':
      return 'imi';
    case 'o':
      return 'orc';
    case 'u':
      return 'unr';
    default:
      return txt;
  }
};

const encriptar = txt => {
  // Función para encriptar un mensaje completo
  const msjEncriptado = txt.replace(/a|e|i|o|u/g, msjEncriptar); 
  toggleElementVisibility('ocultar', false); 
  toggleElementVisibility('resultado', true); 
  toggleElementVisibility('copiar', true);
  return msjEncriptado;
};

const msjDesencriptar = txt => {
  switch (txt) {
    case 'iae':
      return 'a';
    case 'etr':
      return 'e';
    case 'imi':
      return 'i';
    case 'orc':
      return 'o';
    case 'unr':
      return 'u';
    default:
      return txt;
  }
};

const desencriptar = txt => {
  const msjDesencriptado = txt.replace(/iae|etr|imi|orc|unr/g, msjDesencriptar);
  return msjDesencriptado;
};
btnEncriptar.addEventListener("click", event => {
  event.preventDefault();
  const txt = msj.value;
  msjFinal.value = ""; 
  const msjSeguro = encriptar(txt);
  msjFinal.value = msjSeguro;
});

btnDesencriptar.addEventListener("click", event => {
  event.preventDefault();
  const txt = msj.value;
  msjFinal.value = "";
  const msjSeguro = desencriptar(txt);
  msjFinal.value = msjSeguro;
});

btnCopiar.addEventListener("click", event => {
  event.preventDefault();
  msjFinal.select();
  navigator.clipboard.writeText(msjFinal.value);
});

const toggleElementVisibility = (elementId, shouldShow) => {
  const element = document.getElementById(elementId);
  if (shouldShow) {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
};

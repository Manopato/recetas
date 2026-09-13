const menuSemana = [
  {
    dia: "Lunes",
    desayuno: { receta: "Huevos revueltos con espinaca", desc: "Acompañados de tostadas integrales y café." },
    almuerzo: { receta: "Pechuga a la plancha", desc: "Servida con ensalada fresca y arroz integral." },
    cena: { receta: "Crema de verduras", desc: "Sopa ligera de calabacín y zanahoria." }
  },
  {
    dia: "Martes",
    desayuno: { receta: "Avena con frutas y miel", desc: "Avena caliente con banano y canela." },
    almuerzo: { receta: "Tacos de pescado", desc: "Pescado a la plancha con ensalada de repollo y guacamole." },
    cena: { receta: "Ensalada César con pollo", desc: "Lechuga, pollo a la parrilla y queso parmesano." }
  },
  {
    dia: "Miércoles",
    desayuno: { receta: "Pancakes de banano y avena", desc: "Saludables, servidos con fruta fresca." },
    almuerzo: { receta: "Pasta integral al pesto", desc: "Con trozos de pollo y tomates cherry." },
    cena: { receta: "Omelette de champiñones", desc: "Preparado con queso y finas hierbas." }
  },
  {
    dia: "Jueves",
    desayuno: { receta: "Yogur griego con granola", desc: "Acompañado de frutos rojos." },
    almuerzo: { receta: "Lentejas estofadas con verduras", desc: "Plato tradicional lleno de proteína vegetal." },
    cena: { receta: "Sándwich de pavo y aguacate", desc: "Con pan multigrano y vegetales." }
  },
  {
    dia: "Viernes",
    desayuno: { receta: "Tostadas de aguacate y huevo", desc: "Pan tostado con aguacate y huevo escalfado." },
    almuerzo: { receta: "Salmón a la plancha", desc: "Con puré de papas y espárragos al vapor." },
    cena: { receta: "Pizza casera con masa delgada", desc: "Con queso, vegetales y salsa casera." }
  },
  {
    dia: "Sábado",
    desayuno: { receta: "Waffles integrales", desc: "Servidos con miel de abejas y frutas." },
    almuerzo: { receta: "Hamburguesa casera de garbanzo", desc: "Con pan artesanal y camote al horno." },
    cena: { receta: "Tacos vegetarianos", desc: "Con frijoles, maíz dulce, aguacate y pico de gallo." }
  },
  {
    dia: "Domingo",
    desayuno: { receta: "Desayuno especial de la casa", desc: "Para iniciar con energía el día de descanso." },
    almuerzo: { receta: "Arroz con pollo tradicional", desc: "Servido con ensalada de la casa y papas." },
    cena: { receta: "Wrap de pollo y vegetales", desc: "Tortilla rellena de pollo, verduras y salsa suave." }
  }
];

// Elementos del DOM
const vistaDias = document.getElementById("vista-dias");
const vistaDetalle = document.getElementById("vista-detalle");
const btnVolver = document.getElementById("btn-volver");
const tituloDia = document.getElementById("titulo-dia");

const desayunoPlatillo = document.getElementById("desayuno-platillo");
const desayunoDesc = document.getElementById("desayuno-desc");

const almuerzoPlatillo = document.getElementById("almuerzo-platillo");
const almuerzoDesc = document.getElementById("almuerzo-desc");

const cenaPlatillo = document.getElementById("cena-platillo");
const cenaDesc = document.getElementById("cena-desc");

// Generar las tarjetas de los días
function renderDias() {
  vistaDias.innerHTML = "";
  menuSemana.forEach(item => {
    const card = document.createElement("div");
    card.className = "card-dia";
    card.innerHTML = `
      <h2>${item.dia}</h2>
      <p>Ver menú →</p>
    `;
    card.addEventListener("click", () => verDetalle(item));
    vistaDias.appendChild(card);
  });
}

// Abrir detalle del día
function verDetalle(item) {
  tituloDia.textContent = `Menú del ${item.dia}`;

  desayunoPlatillo.textContent = item.desayuno.receta;
  desayunoDesc.textContent = item.desayuno.desc;

  almuerzoPlatillo.textContent = item.almuerzo.receta;
  almuerzoDesc.textContent = item.almuerzo.desc;

  cenaPlatillo.textContent = item.cena.receta;
  cenaDesc.textContent = item.cena.desc;

  vistaDias.classList.add("oculta");
  vistaDetalle.classList.remove("oculta");
}

// Botón para regresar a los días
btnVolver.addEventListener("click", () => {
  vistaDetalle.classList.add("oculta");
  vistaDias.classList.remove("oculta");
});

// Inicializar
renderDias();
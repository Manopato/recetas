const recetas = {
  lunes: {
    nombreDia: "Lunes",
    desayuno: {
      nombre: "arepuelas con huevo frito",
      descripcion: "Acompañados de chocolate o aguapanela.",
      ingredientes: [
        "huevos grandes",
        "harina",
        "chocolate en pastilla",
        "azucar,sal",
        "agua",
        "leche"
      ],
      preparacion: [
        "En un recipiente mezcla la harina con una pizca de sal y azúcar. Agrega poco a poco agua y leche hasta obtener una masa suave y manejable..",
        "Toma con una cuchara la masa y gregala en sarten con aceite caliente hasta tomar conssitencia.",
        "en otra sarten frie los huevos al gusto.",
        "en una olleta prepara el chocolate.",
        "Sirve todo de manera ordenada."
      ]
    },
    almuerzo: {
      nombre: "Pechuga a la plancha",
      descripcion: "Servida con ensalada fresca y arroz integral.",
      ingredientes: [
        "1 pechuga de pollo desosada",
        "1/2 taza de arroz integral cocido",
        "Ensalada mixta (lechuga, tomate, pepino)",
        "Limón, sal y orégano"
      ],
      preparacion: [
        "Sazona la pechuga de pollo con sal, ajo y orégano.",
        "Cocina en la plancha 5 minutos por lado hasta dorar.",
        "Prepara la ensalada aderezada con limón y aceite.",
        "Sirve junto con el arroz caliente."
      ]
    },
    cena: {
      nombre: "Crema de verduras",
      descripcion: "Sopa ligera de calabacín y zanahoria.",
      ingredientes: [
        "1 calabacín mediano",
        "2 zanahorias",
        "1/2 cebolla",
        "1 taza de caldo de verduras"
      ],
      preparacion: [
        "Pica las verduras y cocina en el caldo por 15 minutos.",
        "Licúa todo hasta obtener una crema suave.",
        "Sirve bien caliente con sal al gusto."
      ]
    }
  },
  martes: {
    nombreDia: "Martes",
    desayuno: {
      nombre: "Avena con frutas y miel",
      descripcion: "Avena cremosa con banano y fresas.",
      ingredientes: ["1/2 taza de avena", "1 taza de leche", "1 banano picado", "Miel al gusto"],
      preparacion: ["Cocina la avena con la leche 5 minutos.", "Sirve con las frutas y un hilo de miel."]
    },
    almuerzo: {
      nombre: "Carne salteada con vegetales",
      descripcion: "Tiras de carne con pimentón y puré de papa.",
      ingredientes: ["200g de carne de res", "Pimentón y cebolla", "Puré de papa"],
      preparacion: ["Saltea la carne a fuego alto con vegetales.", "Acompaña con el puré de papa."]
    },
    cena: {
      nombre: "Ensalada César con pollo",
      descripcion: "Lechuga, pechuga a la plancha y crutones.",
      ingredientes: ["Lechuga fresca", "100g pechuga", "Crutones y aderezo light"],
      preparacion: ["Mezcla los ingredientes picados en un bol y adereza."]
    }
  },
  miercoles: {
    nombreDia: "Miércoles",
    desayuno: {
      nombre: "Pancakes de avena y banano",
      descripcion: "Servidos con frutos rojos.",
      ingredientes: ["1 banano", "1 huevo", "1/2 taza de avena licuada"],
      preparacion: ["Licúa todo y cocina porciones pequeñas en sartén."]
    },
    almuerzo: {
      nombre: "Pescado al horno",
      descripcion: "Filete de pescado con papas al horno.",
      ingredientes: ["1 filete de pescado", "Papas en rodajas", "Especias"],
      preparacion: ["Hornea el pescado y papas a 180°C durante 20 minutos."]
    },
    cena: {
      nombre: "Omelette de queso y champiñones",
      descripcion: "Omelette de 2 huevos con queso fresco.",
      ingredientes: ["2 huevos", "Champiñones", "Queso fresco"],
      preparacion: ["Saltea champiñones, agrega el huevo batido y dobla con queso."]
    }
  },
  jueves: {
    nombreDia: "Jueves",
    desayuno: {
      nombre: "Sándwich de jamón y queso",
      descripcion: "Pan integral dorado al sartén.",
      ingredientes: ["2 tajadas de pan integral", "Jamón y queso", "Jugo natural"],
      preparacion: ["Arma el sándwich y dora por ambos lados en sartén."]
    },
    almuerzo: {
      nombre: "Lasaña de carne o verduras",
      descripcion: "Acompañada de ensalada verde.",
      ingredientes: ["Láminas de lasaña", "Carne molida o verduras", "Salsa y queso"],
      preparacion: ["Arma las capas y hornea a 190°C por 30 minutos."]
    },
    cena: {
      nombre: "Wrap de atún con vegetales",
      descripcion: "Tortilla integral con atún y maíz.",
      ingredientes: ["1 tortilla integral", "1 lata de atún", "Maíz dulce y lechuga"],
      preparacion: ["Mezcla el atún con maíz y lechuga, enrolla en la tortilla."]
    }
  },
  viernes: {
    nombreDia: "Viernes",
    desayuno: {
      nombre: "Parfait de yogur con granola",
      descripcion: "Yogur griego con granola y fruta.",
      ingredientes: ["1 vaso de yogur griego", "Granola", "Frutas frescas"],
      preparacion: ["Sirve en capas de yogur, granola y frutas."]
    },
    almuerzo: {
      nombre: "Arroz con pollo",
      descripcion: "Clásico plato con verduras y papas.",
      ingredientes: ["Pollo desmechado", "Arroz", "Verduras mixtas"],
      preparacion: ["Cocina todo junto sazonando al gusto."]
    },
    cena: {
      nombre: "Pizza casera en tortilla",
      descripcion: "Base delgada con salsa y queso.",
      ingredientes: ["1 tortilla", "Salsa de tomate", "Queso mozzarella"],
      preparacion: ["Coloca los ingredientes sobre la tortilla y gratina en sartén."]
    }
  },
  sabado: {
    nombreDia: "Sábado",
    desayuno: {
      nombre: "Arepa con queso y huevo frito",
      descripcion: "Acompañada de chocolate caliente.",
      ingredientes: ["1 arepa", "Queso para asar", "1 huevo"],
      preparacion: ["Asa la arepa con queso y sirve con el huevo frito."]
    },
    almuerzo: {
      nombre: "Tacos de pollo o carne",
      descripcion: "Con pico de gallo y guacamole.",
      ingredientes: ["Tortillas de taco", "Carne o pollo picado", "Guacamole"],
      preparacion: ["Cocina la carne con especias y arma los tacos."]
    },
    cena: {
      nombre: "Sándwich de pollo desmechado",
      descripcion: "Servido con papas chips.",
      ingredientes: ["Pan de sándwich", "Pollo desmechado con aderezo"],
      preparacion: ["Mezcla el pollo y arma el sándwich."]
    }
  },
  domingo: {
    nombreDia: "Domingo",
    desayuno: {
      nombre: "Tostadas Francesas",
      descripcion: "Con frutos rojos y miel.",
      ingredientes: ["Pan de molde", "Huevo, leche y canela", "Miel"],
      preparacion: ["Pasa el pan por el huevo batido con leche y dora."]
    },
    almuerzo: {
      nombre: "Hamburguesa casera",
      descripcion: "Con papas rústicas y ensalada.",
      ingredientes: ["Carne molida", "Pan de hamburguesa", "Queso y vegetal"],
      preparacion: ["Asa la carne y arma la hamburguesa a tu gusto."]
    },
    cena: {
      nombre: "Sopa de pollo con verduras",
      descripcion: "Sopa ligera para cerrar la semana.",
      ingredientes: ["Pechuga de pollo", "Papa y zanahoria", "Cilantro"],
      preparacion: ["Cocina todo en caldo por 25 minutos y sirve."]
    }
  }
};

let diaSeleccionado = "";

function verComidas(dia) {
  diaSeleccionado = dia;
  const infoDia = recetas[dia];
  if (!infoDia) return;

  document.getElementById("titulo-dia").textContent = `Menú del ${infoDia.nombreDia}`;
  document.getElementById("preview-desayuno").textContent = infoDia.desayuno.nombre;
  document.getElementById("preview-almuerzo").textContent = infoDia.almuerzo.nombre;
  document.getElementById("preview-cena").textContent = infoDia.cena.nombre;

  document.getElementById("vista-dias").classList.add("oculta");
  document.getElementById("vista-receta").classList.add("oculta");
  document.getElementById("vista-comidas").classList.remove("oculta");
  window.scrollTo(0, 0);
}

function volverADias() {
  document.getElementById("vista-comidas").classList.add("oculta");
  document.getElementById("vista-receta").classList.add("oculta");
  document.getElementById("vista-dias").classList.remove("oculta");
  window.scrollTo(0, 0);
}

function verReceta(tipoComida) {
  const infoDia = recetas[diaSeleccionado];
  if (!infoDia) return;

  const receta = infoDia[tipoComida];
  if (!receta) return;

  let icono = "🍳";
  let textoTipo = "Desayuno";
  if (tipoComida === "almuerzo") { icono = "🍗"; textoTipo = "Almuerzo"; }
  if (tipoComida === "cena") { icono = "🥗"; textoTipo = "Cena"; }

  document.getElementById("receta-tipo-tag").textContent = `${icono} ${textoTipo}`;
  document.getElementById("receta-titulo").textContent = receta.nombre;
  document.getElementById("receta-descripcion").textContent = receta.descripcion;

  const listaIngredientes = document.getElementById("receta-ingredientes");
  listaIngredientes.innerHTML = "";
  receta.ingredientes.forEach(ing => {
    const li = document.createElement("li");
    li.textContent = ing;
    listaIngredientes.appendChild(li);
  });

  const listaPreparacion = document.getElementById("receta-preparacion");
  listaPreparacion.innerHTML = "";
  receta.preparacion.forEach(paso => {
    const li = document.createElement("li");
    li.textContent = paso;
    listaPreparacion.appendChild(li);
  });

  document.getElementById("vista-comidas").classList.add("oculta");
  document.getElementById("vista-receta").classList.remove("oculta");
  window.scrollTo(0, 0);
}

function volverAComidas() {
  document.getElementById("vista-receta").classList.add("oculta");
  document.getElementById("vista-comidas").classList.remove("oculta");
  window.scrollTo(0, 0);
}
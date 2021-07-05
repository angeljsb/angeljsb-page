const tecnologies = {
  java: {
    name: "Java",
    rating: 4,
    abilities: [
      "Interfaces gráficas",
      "Aplicaciones de escritorio",
      "Backend web con java EE",
      "Creación de Api Rest",
      "Conexión con bases de datos",
      "Manejo de archivos",
      "Estructuras de datos",
    ],
  },
  javascript: {
    name: "Javascript",
    rating: 3.5,
    abilities: [
      "Paginas web dinamicas",
      "Backend con Nodejs",
      "Uso de Base de datos firebase",
      "Control completo del DOM",
      "Creación de single page apps",
      "Programación de UX",
    ],
  },
  html5: {
    name: "HTML5",
    rating: 3,
    abilities: [
      "Paginas estaticas puras",
      "Uso de los tags adecuados",
      "Paginas de fácil navegación",
      "Formularios controlados",
      "Esta página es un ejemplo",
    ],
  },
  css3: {
    name: "Css",
    rating: 3,
    abilities: [
      "Estilos simples y útiles",
      "Diseños Responsive",
      "Uso de tailwind",
      "Animaciones y transiciones",
      "Dinamismo de estilos",
      "Entendimiento de BEM",
    ],
  },
  react: {
    name: "React.js",
    rating: 3,
    abilities: [
      "Creación de single page apps",
      "Conocimiento de Material UI",
      "Filtros y buscadores",
      "Manejo de hooks",
    ],
  },
  python: {
    name: "Python",
    rating: 2.5,
    abilities: [
      "Conocimientos intermedios",
      "Creación de entornos",
      "Conexión con bases de datos",
      "Uso de archivos de configuración",
      "Manipulación de imagenes",
    ],
  },
  php: {
    name: "PHP",
    rating: 3.5,
    abilities: [
      "Conexión con BD (SQL y firebase)",
      "Creación de Api Rest",
      "Programación orientada a objetos",
      "Creación de plugins para wordpress",
    ],
  },
  mysql: {
    name: "MySQL",
    rating: 3,
    abilities: [
      "Conocimiento de lenguaje sql",
      "CRUD completo",
      "Creación de tabas relacionadas",
      "Creación de sistemas de usuarios",
      "Compresión de querys de busqueda",
    ],
  },
};

const tecnologyInfo = (section) => {
  const subtitle = () => section.querySelector("p.text--subtitle");
  const rating = () => section.querySelector(".rating");
  const abilities = () => section.querySelector("ul.abilities");

  const createStarTag = (src) => `<div class="container--small">
    <img
      src="${src}"
      alt="star"
      draggable="false"
    />
  </div>`;

  const createAbilityTag = (ability) => `<li>${ability}</li>`;

  /**
   * Crea el DOMString para una estrella del rating
   * @param {"filled"|"half"|"empty"} variant El tipo de estrella a mostrar.
   * Si se muestra completa, la mitad o vacia
   * @returns Un DOMString conteniendo el tag de la estrella
   */
  const createStar = (variant) => {
    const variants = {
      filled: "assets/image/star_black_24dp.svg",
      half: "assets/image/star_half_black_24dp.svg",
      empty: "assets/image/star_outline_black_24dp.svg",
    };
    return createStarTag(variants[variant]);
  };

  const setSubtitle = (text) => {
    subtitle().innerHTML = text;
  };

  const setRating = (amount) => {
    const stars = [];
    let amountV = amount;
    for (let i = 0; i < 5; i++) {
      if (amountV <= 0) {
        stars.push(createStar("empty"));
      } else if (amountV === 0.5) {
        stars.push(createStar("half"));
        amountV = 0;
      } else {
        stars.push(createStar("filled"));
        amountV--;
      }
    }
    rating().innerHTML = stars.join("");
  };

  const setAbilities = (arr) => {
    abilities().innerHTML = arr.map(createAbilityTag).join("");
  };

  const setSelected = (tecnology) => {
    const data = tecnologies[tecnology];
    if (data === undefined) return;
    setSubtitle(data.name);
    setRating(data.rating);
    setAbilities(data.abilities);
  };

  const getSelected = () => subtitle().innerHTML;

  return {
    getSelected,
    setSelected,
  };
};

const initTecnology = () => {
  const section = document.getElementById("tecnologies");

  const info = tecnologyInfo(section);
  info.setSelected("java");

  const radioBoxes = section.querySelectorAll(`input[name="tecnology"]`);

  const addListener = (box) =>
    box.addEventListener("click", (e) => {
      info.setSelected(e.target.value);
    });

  radioBoxes.forEach(addListener);
};

window.addEventListener("DOMContentLoaded", () => {
  initTecnology();
});

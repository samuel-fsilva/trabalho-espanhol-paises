let siteContent = [
  {
    title: "Peru",
    subtitle:
      "El Perú es un país lleno de historia, cultura y maravillas naturales.",
    background: "images/peru/background.png",
    mainContent: [
      {
        title: "Nacionalidad Peruana",
        textContent:
          "Perú se encuentra en la costa occidental de América del Sur. Limita con Ecuador, Colombia, Brasil, Bolivia y Chile. La bandera peruana consta de tres franjas verticales de igual ancho: las exteriores son rojas y la central es blanca. El rojo simboliza la sangre derramada por héroes y patriotas, mientras que el blanco representa la pureza de sentimiento, la libertad y la paz. La Moneda oficial es el Sol (PEN): Se divide en 100 céntimos. Es conocida por ser una de las monedas más estables de la región latinoamericana.",
        children: [
          {
            type: "lateral-card",
            orientation: "left",
            content: {
              type: "photo",
              url: "images/peru/bandeira.png",
              caption: "Bandeira do Peru",
            },
          },
        ],
      },
      {
        title: "atracciones turísticas y comida",
        textContent:
          "Los principales atractivos turisticos es: Machu Picchu (Cusco): La ciudadela inca considerada una de las Siete Maravillas del Mundo Moderno. Líneas de Nazca (Ica): Gigantescos geoglifos en el desierto que representan figuras de animales y plantas, visibles solo desde el aire. Lago Titicaca (Puno): El lago navegable más alto del mundo, hogar de las islas flotantes de los Uros. Valle del Colca (Arequipa): Uno de los cañones más profundos del mundo, ideal para el avistamiento del cóndor andino. Las principales Comidas es: Ceviche: Pescado fresco marinado en jugo de limón, ají limo, cebolla y sal. Es el plato bandera. Lomo Saltado: Un salteado de carne de res, cebolla y tomate en wok, que fusiona la técnica china con ingredientes peruanos. Ají de Gallina: Crema espesa a base de ají amarillo, pan y leche, servida con gallina deshilachada. Cuy Chactado: Conejillo de indias frito a la piedra, típico de la región andina.",
        children: [
          {
            type: "lateral-card",
            orientation: "left",
            content: {
              type: "photos",
              urls: [
                "https://dynamic-media.tacdn.com/media/photo-o/2f/ba/e1/6f/caption.jpg?w=2400&h=-1&s=1",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAO1iE1sXw4ADhUD6RzX1Ux58NQ01aQRo9ig&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ZM0F1parlOShsBg19emqlcEbEsFxXUbPuQ&s",
              ],
              captions: [
                "lima, Capital e maior cidade do Peru",
                "machu Pichu, ponto turístico mais famoso do Peru",
                "lhama, animal presente no Peru e em outros países da Região",
              ].map((n) => upperCaseFirst(n)),
            },
          },
        ],
      },
    ],
  },
  {
    title: "Bolívia",
    subtitle:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    background: "images/bolivia/background.png",
    mainContent: [
      {
        title: "Test1",
        textContent:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum ex ligula, vel feugiat odio lacinia eu. Phasellus accumsan aliquet accumsan. Maecenas blandit nisl massa, nec porta est gravida sit amet. Nulla neque tellus, hendrerit vitae fringilla vel, commodo ut quam. Nullam eget porta turpis. Phasellus sit amet justo purus. Pellentesque id tempus sapien, eget porta lorem. Duis libero ex, tristique quis molestie vel, sodales euismod magna. Curabitur vestibulum scelerisque tellus et aliquet. Mauris eleifend vehicula tristique. Maecenas quis eleifend nisl.",
        children: [
          {
            type: "lateral-card",
            orientation: "left",
            content: {
              type: "photos",
              urls: [
                "images/bolivia/bandeira.png",
                "https://viagemeturismo.abril.com.br/wp-content/uploads/2016/12/42-35314172.jpeg",
                "https://www.brasildefato.com.br/wp-content/uploads/2026/05/afp20260518b39e9nqv1midresboliviapoliticsprotest-7e48d4ac.webp",
              ],
              captions: [
                "Bandeira da Bolívia",
                "Salar de Uyuni",
                "Boliviano segurando a bandeira da Wiphala, emblema de povos nativos do país",
              ].map((n) => upperCaseFirst(n)),
            },
          },
        ],
      },
    ],
  },
];

setElements(siteContent, 0);
function upperCaseFirst(text) {
  return text[0].toUpperCase() + text.slice(1);
}
window.addEventListener("scroll", (event) => {
  navColor();
});

toggleButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    main.innerHTML = "";
    setElements(siteContent, e.target.value);
  });
});

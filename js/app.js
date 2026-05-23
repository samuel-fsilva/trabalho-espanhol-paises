let siteContent = [
  {
    title: "Peru",
    subtitle:
      "Tesoro de los Andes",
    background: "images/peru/background.png",
    mainContent: [
      {
        title: "Test",
        textContent: "",
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
        title: "Test2",
        textContent:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum ex ligula, vel feugiat odio lacinia eu. Phasellus accumsan aliquet accumsan. Maecenas blandit nisl massa, nec porta est gravida sit amet. Nulla neque tellus, hendrerit vitae fringilla vel, commodo ut quam. Nullam eget porta turpis. Phasellus sit amet justo purus. Pellentesque id tempus sapien, eget porta lorem. Duis libero ex, tristique quis molestie vel, sodales euismod magna. Curabitur vestibulum scelerisque tellus et aliquet. Mauris eleifend vehicula tristique. Maecenas quis eleifend nisl.",
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
        title: "Personalidades nacidas en Bolivia.",
        textContent:
          "<ul><li><b>Andrés de Santa Cruz</b>: Militar y político nacido en Bolivia, considerado una de las figuras más importantes del siglo XIX. Destacó por: Crear la Confederación Perú-Boliviana Modernizar el Estado boliviano Convertirse en uno de los grandes estrategas sudamericanos.</li> <li><b>Antonio José de Sucre</b>: Nació en territorio que hoy pertenece a Venezuela, então não entra como boliviano nato. (Removido da lista principal.).</li> <li><b>Evo Morales</b>: Nacido en el departamento de Oruro. Importancia Primer presidente indígena de Bolivia</li></ul>",
        children: [
          {
            type: "lateral-card",
            orientation: "left",
            content: {
              type: "photos",
              urls: [
                "images/bolivia/andres.png",
                "images/bolivia/antonio.png",
                "images/bolivia/evo.png",
              ],
              captions: [
                "Andrés de Santa Cruz Militar",
                "Antonio José de Sucre",
                "Evo Morales",
              ].map((n) => upperCaseFirst(n)),
            },
          },
        ],
      },
      {
        title: "Gastronomía de Bolivia",
        textContent: `La comida boliviana es un alimento con un condimento fuerte y único, basado en ingredientes como: <ul> <li> Patata; </li> <li> Maíz: choclo (similar al tamale); </li> <li> Peanut: Mani; </li> <li> Carne: ternera, pollo y cecina (carne deshidratada); </li> <li> Ají: un pimiento que se usa para añadir condimento y color a las salsas; </li> <li> Quinoas: conocidas como el "grano de oro" andino (de los Andes). </li></ul> Y Bolivia tiene como platos principales los que se enumeran a continuación, por ejemplo: <ol><li><strong>Salteñas:</strong> Las salteñas bolivianas son un tipo de empanada o pastel, horneadas y rellenas con algún tipo de carne, como pollo, ternera, e ingredientes como huevos cocidos, guisantes y patatas.<br>Además, esta típica comida boliviana se caracteriza por una mezcla de sabores dulces y picantes, lo que garantiza un sabor único al plato.</li><li><strong>Pique a lo macho:</strong> Esta receta es muy popular en Bolivia y combina trozos de ternera, salchichas fritas, huevos duros, patatas fritas, especias, pimiento, tomates, cebollas y pimientos morrones.<br>Es una mezcla auténtica y una explosión de sabores en un solo plato, que representa la fuerte cultura boliviana de compartir y dividir.</li><li><strong>Anticuchos:</strong> Los anticuchos son un tipo de brocheta de carne. Este plato suele prepararse con corazón de ternera, marinado en una mezcla de condimentos y especias, como ajo, pimienta, vinagre y comino, entre otros.<br>Los anticuchos pueden ir acompañados de ají, una salsa picante y patatas hervidas.</li></ol> Platos como estos cuestan entre 50 y 80 BOB, alrededor de R$40.00, a R$60.00.`,
        children: [
          {
            type: "lateral-card",
            orientation: "right",
            content: {
              type: "photos",
              urls: [
                "images/bolivia/saltenas.png",
                "images/bolivia/pique.png",
                "images/bolivia/anticuchos.png",
              ],
              captions: ["Salteñas", "Pique a lo macho", "Anticuchos"],
            },
          },
        ],
      },
      {
        title: "Canciones bolivianas",
        textContent:
          "Las canciones de Bolivia tienen ritmos como: Huayno (alegre y originario del pueblo quechua), Taquirari (ritmo amazónico más rápido y festivo) y Chacarera (ritmo rápido con claqué, típico de la región más meridional). Y para la construcción de estos sonidos utilizan estos instrumentos principales: <ul> <li><strong>Zampona: </strong>flauta de bamb&uacute; formada por varias filas de tubos;</li> <li><strong>Quena: </strong>flauta de madera o de hueso;</li> <li><strong>Charango: </strong>Un instrumento de cuerda similar a una guitarra peque&ntilde;a, originario de los Andes y tradicionalmente fabricado con el cad&aacute;ver de un armadillo en el pasado.</li></ul>Canciones con estos estilos son, por ejemplo: &quot;Llorando se Fue&quot; (de Los Kjarkas), &quot;Negrita&quot; (ritmo Saya), &quot;Viva Mi Patria Bolivia&quot; (Cueca).",
        children: [
          {
            type: "lateral-card",
            orientation: "left",
            content: {
              type: "photos",
              urls: [
                "images/bolivia/zampona.png",
                "images/bolivia/quena.png",
                "images/bolivia/charango.png",
              ],
              captions: ["Zampoña", "Quena", "Charango"],
            },
          },
        ],
      },
      {
        title: "Danzas bolivianas",
        textContent:
          "Las danzas bolivianas suelen aportar muchos colores e historia, mezclando tradiciones ind&iacute;genas y afrobolivianas; Siempre intentando pasar algo con los bailes. Algunos ejemplos de danza son:<ul><li><strong>Caporales: </strong>Se caracteriza por un ritmo r&aacute;pido, saltos acrob&aacute;ticos, pasos fortes con botas y campanas, representando la figura de los l&iacute;deres de la &eacute;poca colonial</li><li><strong>Diablada:</strong>&nbsp;Retrata la lucha entre el bien y el mal. Los bailarines llevan impresionantes m&aacute;scaras de demonios, dragones y &aacute;ngeles, en una celebraci&oacute;n declarada Patrimonio Oral e Inmaterial de la Humanidad</li><li><strong>Morenada: </strong>Danza andina caracterizada por el sonido r&iacute;tmico de sonajas y trajes pesados. Se refiere al periodo colonial y representa la llegada de africanos esclavizados, marcada por pasos lentos y elegantes.</li></ul>",
        children: [
          {
            type: "lateral-card",
            orientation: "right",
            content: {
              type: "photos",
              urls: [
                "images/bolivia/corporales.png",
                "images/bolivia/diablada.png",
                "images/bolivia/morenada.png",
              ],
              captions: ["Corporales", "Diablada", "Morenada"],
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

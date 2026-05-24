let siteContent = [
  {
    title: "Peru",
    subtitle:
      "El Perú es un país lleno de historia, cultura y maravillas naturales.",
    background: "images/peru/background.png",
    mainContent: [
      {
        title: "La Nación Peruana",
        id: "introduction",
        textContent:
          "Perú se encuentra en la costa occidental de América del Sur. Limita con Ecuador, Colombia, Brasil, Bolivia y Chile. <br>La bandera peruana consta de tres franjas verticales de igual ancho: las exteriores son rojas y la central es blanca. El rojo simboliza la sangre derramada por héroes y patriotas, mientras que el blanco representa la pureza de sentimiento, la libertad y la paz. <br>La Moneda oficial es el Sol (PEN): Se divide en 100 céntimos. Es conocida por ser una de las monedas más estables de la región latinoamericana.",
        children: [
          {
            type: "lateral-card",
            orientation: "left",
            content: {
              type: "photos",
              urls: [
                "images/peru/bandeira.png",
                "images/peru/mapa.png",
                "images/peru/moeda.png",
              ],
              captions: [
                "Bandera Peruana",
                "Mapa del territorio peruano",
                "El sol, la moneda que se utiliza actualmente en Perú.",
              ],
            },
          },
        ],
      },
      {
        title: "Atracciones turísticas",
        id: "turism",
        textContent:
          "Los principales atractivos turisticos es:<ul> <li><b>Machu Picchu (Cusco)</b>: La ciudadela inca considerada una de las Siete Maravillas del Mundo Moderno. </li><li><b>Líneas de Nazca (Ica)</b>: Gigantescos geoglifos en el desierto que representan figuras de animales y plantas, visibles solo desde el aire. </li><li><b>Lago Titicaca (Puno)</b>: El lago navegable más alto del mundo, hogar de las islas flotantes de los Uros. </li><li><b>Valle del Colca (Arequipa)</b>: Uno de los cañones más profundos del mundo, ideal para el avistamiento del cóndor andino.</li></ul>",
        children: [
          {
            type: "lateral-card",
            orientation: "right",
            content: {
              type: "photos",
              urls: [
                "images/peru/machu.png",
                "images/peru/lineas.png",
                "images/peru/titicaca.png",
                "images/peru/colca.png",
              ],
              captions: [
                "Machu Picchu",
                "Lineas de Nazca",
                "Lago Titicaca",
                "Valle del Colca",
              ].map((n) => upperCaseFirst(n)),
            },
          },
        ],
      },
      {
        title: "Cultura",
        id: "culture",
        customStyle: {
          title: "margin: 0",
          section: "padding-top: 0; padding-bottom: 0",
        },
      },
      {
        title: "Comidas",
        id: "food",
        customStyle: {
          title: "color: #4e4944; text-indent: 10px; font-size: 25px",
        },
        textContent:
          "Las principales Comidas es: <ul><li><b>Ceviche</b>: Pescado fresco marinado en jugo de limón, ají limo, cebolla y sal. Es el plato bandera. </li><li><b>Lomo Saltado</b>: Un salteado de carne de res, cebolla y tomate en wok, que fusiona la técnica china con ingredientes peruanos. </li><li><b>Ají de Gallina</b>: Crema espesa a base de ají amarillo, pan y leche, servida con gallina deshilachada. </li><li><b>Cuy Chactado:</b> Conejillo de indias frito a la piedra, típico de la región andina.</li></ul>",
        children: [
          {
            type: "lateral-card",
            orientation: "left",
            content: {
              type: "photos",
              urls: [
                "images/peru/ceviche.png",
                "images/peru/lomo.png",
                "images/peru/aji.png",
                "images/peru/cuy.png",
              ],
              captions: [
                "Ceviche",
                "Lomo Saltado",
                "Ají de Gallina",
                "Cuy Chactado",
              ],
            },
          },
        ],
      },
      {
        title: "Danzas y Músicas Típicas",
        id: "dances-and-musics",
        customStyle: {
          title: "color: #4e4944; text-indent: 10px; font-size: 25px",
        },
        textContent:
          "<ul><li><b>La Marinera</b>: Danza elegante de pareja que representa el cortejo, caracterizada por el uso de pañuelos. La versión norteña es la más famosa.</li><li><b>Huayno</b>: El género musical y baile más difundido de los Andes, con instrumentos como la quena, el arpa y el charango.</li><li><b>Música Afroperuana</b>: Destaca el Festejo y el uso del Cajón Peruano, un instrumento de percusión fundamental que hoy se usa en la música del mundo.</li></ul>",
        children: [
          {
            type: "lateral-card",
            orientation: "right",
            content: {
              type: "photos",
              urls: [
                "images/peru/marinera.png",
                "images/peru/huayno.png",
                "images/peru/afro.png",
              ],
              captions: [
                "La Marinera",
                "Huayno",
                "Canción criolla, un ejemplo de música afroperuana.",
              ],
            },
          },
        ],
      },
      {
        title: "Personalidades",
        id: "people",
        textContent:
          '<ul><li><b>Gastón Acurio</b>: Chef responsable de la internacionalización de la cocina peruana.</li><li><b>Mario Vargas Llosa</b>: Escritor ganador del Premio Nobel de Literatura en 2010.</li><li><b>Aníbal Quijano (1928–2018)</b>: Filósofo y Sociólogo mundialmente reconocido por desarrollar el concepto de "Colonialidad del Poder".</li></ul>',
        children: [
          {
            type: "lateral-card",
            orientation: "left",
            content: {
              type: "photos",
              urls: [
                "images/peru/gaston.png",
                "images/peru/vargas.png",
                "images/peru/anibal.png",
              ],
              captions: [
                "Gastón Acurio",
                "Mario Vargas Llosa",
                "Ánibal Quijano",
              ],
            },
          },
        ],
      },
      {
        title: "Las ideas de Quijano",
        id: "philosoph",
        customStyle: {
          title: "color: #4e4944; text-indent: 10px; font-size: 25px",
        },
        textContent:
          'Quijano argumentaba que, aunque el colonialismo político terminó, las estructuras de poder jerárquicas basadas en la "raza" y la clasificación social impuestas en la época colonial persisten en el capitalismo moderno y en la cultura actual, afectando la identidad de los países latinoamericanos.',
      },
      {
        title: "Una Curiosidad",
        id: "fun-fact",
        textContent:
          "Perú es el centro de origen de la papa (patata). En el país existen más de 3,000 variedades de papas nativas con diferentes colores, formas y texturas. Existe incluso el Centro Internacional de la Papa (CIP) en Lima para proteger este patrimonio genético mundial.",
        children: [
          {
            type: "lateral-card",
            orientation: "right",
            content: {
              type: "photos",
              urls: ["images/peru/papas.png", "images/peru/cip.png"],
              captions: [
                "Variedad de Patatas",
                "Centro Internacional de la Papa (CIP)",
              ],
            },
          },
        ],
      },
    ],
  },
  {
    title: "Bolívia",
    subtitle: "Uno de los países más fascinantes de América del Sur 🌎⛰️",
    background: "images/bolivia/background.png",
    mainContent: [
      {
        title: "La nación boliviana",
        id: "introduction",
        textContent: `Bolivia es un país ubicado en el centro de América del Sur. Limita con cinco países: Brasil al norte y al este, Paraguay y Argentina al sur, Chile al suroeste y Perú al oeste. Además, Bolivia es un país mediterráneo, es decir, no tiene salida al mar. Su territorio incluye montañas de la cordillera de los Andes, valles y regiones amazónicas. Las ciudades más importantes son La Paz, sede del gobierno, y Sucre, capital constitucional.<br>La bandera de Bolivia está formada por tres franjas horizontales: roja, amarilla y verde. El color rojo simboliza la sangre derramada por los héroes de la independencia y el valor del pueblo boliviano. El amarillo representa la riqueza mineral y los recursos naturales del país. El verde simboliza la esperanza, la naturaleza y la riqueza agrícola de Bolivia. En la versión oficial de la bandera aparece el escudo nacional en el centro.<br> Antes de la colonización europea, la región andina de Bolivia formaba parte del Imperio Inca — el mayor imperio de la era precolombina. Durante la mayor parte del periodo colonial español, este territorio se llamó Alto Perú o Charcas y estuvo bajo la administración del Virreinato del Perú, que abarcaba la mayor parte de las colonias españolas y sudamericanas. Tras declarar la independencia en 1809, siguieron dieciséis años de guerras antes del establecimiento de la república, instituida por Simón Bolívar, el 6 de agosto de 1825. Desde entonces, el país ha experimentado periodos de inestabilidad política, dictaduras y problemas económicos.<br>La moneda oficial de Bolivia es el boliviano, cuyo símbolo es “Bs” y su código internacional es BOB. Un boliviano se divide en 100 centavos. Esta moneda comenzó a utilizarse en 1987 para reemplazar al antiguo peso boliviano y ayudar a estabilizar la economía del país. Actualmente, circulan monedas y billetes de diferentes valores utilizados en todo el territorio boliviano.`,
        children: [
          {
            type: "lateral-card",
            orientation: "right",
            content: {
              type: "photos",
              urls: [
                "images/bolivia/bandeira.png",
                "images/bolivia/mapa.png",
                "images/bolivia/moneda.png",
              ],
              captions: [
                "Bandera boliviana",
                "Mapa de Bolivia",
                "El boliviano, moneda oficial de Bolivia",
              ],
            },
          },
        ],
      },
      {
        title: "Principales atracciones turísticas de Bolivia",
        id: "turism",
        textContent:
          "<ul><li><b>Sucre</b>: es la capital de jure de Bolivia, capital del departamento de Chuquisaca y la sexta ciudad más poblada de Bolivia. Ubicada en la región centro-sur del país, Sucre se sitúa a una altitud de 2.790 m (9.150 pies), siendo la segunda capital más alta del mundo, después de Quito. A lo largo de los siglos, la ciudad recibió varios nombres, incluyendo La Plata, Charcas y Chuquisaca. Sucre posee gran importancia nacional y es un centro educativo y gubernamental, además de albergar la Corte Suprema de Bolivia. Su clima agradable y los bajos índices de criminalidad han convertido a la ciudad en un lugar popular entre extranjeros y bolivianos. Notablemente, Sucre contiene uno de los centros históricos hispánicos coloniales y republicanos mejor preservados del Hemisferio Occidental. Este patrimonio arquitectónico y la historia milenaria de la región de Charcas llevaron a la designación de Sucre como Patrimonio Mundial de la UNESCO.</li><li><b>La Paz</b>: o Nuestra Señora de La Paz, es una de las capitales de Bolivia y es la sede del gobierno del Estado Plurinacional de Bolivia. Con una estimación de 816.044 residentes en 2020, La Paz es la tercera ciudad más poblada de Bolivia. Su área metropolitana es la segunda área urbana más poblada del país, con una población de cerca de 2 millones de habitantes. Como sede del gobierno de Bolivia, La Paz es el lugar donde se encuentra el Palacio Quemado, el palacio presidencial. También es la sede de la legislatura boliviana, de la Asamblea Legislativa Plurinacional y de varios departamentos y agencias gubernamentales. La capital constitucional de Bolivia, Sucre, mantiene el poder judicial. La ciudad alberga todas las embajadas extranjeras, así como misiones internacionales en el país. La Paz es un importante centro político, administrativo, económico y deportivo de Bolivia; genera el 24% del producto interno bruto del país y sirve como sede de numerosas empresas e industrias bolivianas.</li><li><b>The Witches Market (Mercado de las Brujas)</b>: También conocido como El Mercado de las Brujas y La Hechicería, es una atracción turística popular ubicada en Cerro Cumbre, un claro en la montaña en La Paz, Bolivia. Está localizado en la calle Linares, en el barrio El Rosario, pero también se extiende por las calles Jiménez, Santa Cruz e Illampu. El mercado recibió ese nombre para ser fácilmente reconocido por extranjeros, debido al gran número de visitantes. En 2019, el mercado fue declarado Patrimonio Cultural Inmaterial de La Paz. La mayor parte de los productos es vendida por mujeres aimaras, conocidas como chifreras. El mercado es administrado por curanderos locales conocidos como yatiri, que venden pociones, ranas secas, plantas medicinales como la retama y armadillos utilizados en rituales bolivianos. También trabajan con adivinación, magia del amor y maldiciones.</li></ul>",
        children: [
          {
            type: "lateral-card",
            orientation: "left",
            content: {
              type: "photos",
              urls: [
                "images/bolivia/background.png",
                "images/bolivia/sucre.png",
                "images/bolivia/bruja.png",
              ],
              captions: ["La Paz", "Sucre", "El Mercado de las Brujas"],
            },
          },
        ],
      },
      {
        title: "Cultura",
        id: "culture",
      },
      {
        title: "Gastronomía de Bolivia",
        customStyle: {
          title: "color: #4e4944; text-indent: 10px; font-size: 25px",
        },

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
        customStyle: {
          title: "color: #4e4944; text-indent: 10px; font-size: 25px",
        },

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
        customStyle: {
          title: "color: #4e4944; text-indent: 10px; font-size: 25px",
        },
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
      {
        title: "Personalidades nacidas en Bolivia.",
        id: "people",
        textContent:
          "<ul><li><b>Andrés de Santa Cruz</b>: Militar y político nacido en Bolivia, considerado una de las figuras más importantes del siglo XIX. Destacó por: Crear la Confederación Perú-Boliviana Modernizar el Estado boliviano Convertirse en uno de los grandes estrategas sudamericanos.</li> <li><b>Simón Bolívar</b>: Aunque nació en Venezuela, fue fundamental para la independencia boliviana. El nombre “Bolivia” fue creado en su honor. Bolívar es una de las figuras más influyentes de toda América del Sur.</li><li><b> Antonio José de Sucre</b>: Fue uno de los principales aliados de Bolívar y un héroe de la independencia. Participó en batallas decisivas contra España, fue el primer presidente de Bolivia y la ciudad de Sucre lleva su nombre</li><li><b>Marina Núñez del Prado</b>: Una de las artistas más importantes nacidas en Bolivia, sus obras se inspiraban en los Andes, tenían influencia indígena y Alcanzaron reconocimiento internacional</li><li><b>Marco Etcheverry</b>: Uno de los mayores ídolos del fútbol boliviano, jugó el Mundial de 1994, Era conocido por su creatividad, técnica y es considerado una leyenda nacional</li></ul>",
        children: [
          {
            type: "lateral-card",
            orientation: "left",
            content: {
              type: "photos",
              urls: [
                "images/bolivia/andres.png",
                "images/bolivia/antonio.png",
                "images/bolivia/simon.png",
                "images/bolivia/marina.png",
                "images/bolivia/etcheverry.png",
              ],
              captions: [
                "Andrés de Santa Cruz",
                "Antonio José de Sucre",
                "Simón Bolívar",
                "Marina Núñez del Prado",
                "Marco Etcheverry",
              ].map((n) => upperCaseFirst(n)),
            },
          },
        ],
      },
      {
        title: "Datos interesantes",
        id: "fun-fact",
        textContent: `<ul><li>Bolivia tiene dos capitales: Muchas personas creen que la única capital es La Paz, pero en realidad existen dos; Sucre → capital constitucional y sede del poder judicial; La Paz → sede del gobierno y del poder ejecutivo.</li><li>La Paz es una de las ciudades más altas del mundo: La Paz está ubicada a aproximadamente 3.650 metros sobre el nivel del mar; Muchas personas sienten cansancio o mareo durante los primeiros días debido a la altitud.</li><li>El sistema de teleféricos es gigantesco: El sistema llamado “Mi Teleférico” funciona como transporte público aéreo y conecta diferentes zonas de La Paz y El Alto; Es uno de los maiores sistemas urbanos de teleféricos del planeta.</li><li>El Salar de Uyuni es el mayor desierto de sal del mundo: El famoso Salar de Uyuni tiene más de 10 mil km²; Después de la lluvia, el suelo refleja el cielo y parece un espejo gigante.</li><li>Existen “islas” en medio del salar: Dentro del Salar de Uyuni hay lugares como Isla Incahuasi, llenos de cactus gigantes y formaciones rocosas; El paisaje parece otro planeta.</li><li>Bolivia tiene huellas reales de dinosaurios: En Cal Orck'o existe uma enorme pared con miles de huellas fosilizadas de dinosaurios.</li><li>Bolivia reconoce muchas lenguas oficiales: Además del español, el país reconoce idiomas indígenas como: quechua, aimara, guaraní; Esto muestra la enorme influencia indígena en la cultura boliviana.</li><li>Bolivia posee gran biodiversidad: El país tiene: montañas andinas, selvas amazónicas, lagos, desiertos, llanuras; Es uno de los territorios más diversos de Sudamérica.</li><li>El té de coca es tradicional: Las hojas de coca son utilizadas tradicionalmente en bebidas y prácticas culturales; Muchas personas toman té de coca para aliviar los efectos de la altitud.</li><li>Jugar fútbol en Bolivia es difícil: La gran altitud de ciudades como La Paz afecta mucho a jugadores visitantes; Muchos equipos extranjeros sufren cansancio rápido durante los partidos.</li><li>El territorio perteneció al Imperio Inca: Antes de la llegada de los europeos, gran parte del territorio formaba parte del Imperio Inca; Los incas desarrollaron caminos, agricultura de montaña y una organización muy avanzada.</li><li>Potosí y la plata que enriqueció a España: La ciudad de Potosí fue una de las más ricas del mundo durante el período colonial gracias al Cerro Rico; Grandes cantidades de plata foram enviadas al Imperio Español; Miles de trabajadores indígenas murieron en las minas.</li><li>La Confederación Perú-Boliviana (1836–1839): La Confederación Perú-Boliviana fue creada por Andrés de Santa Cruz; El proyecto buscaba unir: Bolivia, Perú del Norte, Perú del Sur, para crear una gran potencia andina.</li><li>Guerra contra la Confederación: La confederación preocupó a: Chile, Argentina; Chile lideró la guerra contra la unión y la derrotó en 1839.</li><li>Guerra del Pacífico (1879–1884): La Guerra del Pacífico enfrentó a Bolivia y Perú contra Chile; Chile ganó la guerra y Bolivia perdió su salida al mar; Hasta hoy, este tema tiene enorme importancia nacional.</li><li>Guerra del Chaco (1932–1935): La Guerra del Chaco fue una guerra entre Bolivia y Paraguay por territorios donde se creía que existía petróleo; Muchos soldados murieron por: sed, enfermedades, calor extremo, más que por combate.</li><li>Guerra de la Independencia: Bolivia consiguió su independencia de España con ayuda de líderes como: Simón Bolívar, Antonio José de Sucre; La ciudad de Sucre fue nombrada en honor a Antonio José de Sucre.</li><li>Bolivia perdió grandes territorios: En el siglo.</li></ul>`,
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
menuButton.addEventListener("click", () => {
  lateralMenu("show");
});

overlay.addEventListener("click", () => {
  lateralMenu("hide");
});

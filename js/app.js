let mainContent = [
  {
    title: "Test",
    textContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum ex ligula, vel feugiat odio lacinia eu. Phasellus accumsan aliquet accumsan. Maecenas blandit nisl massa, nec porta est gravida sit amet. Nulla neque tellus, hendrerit vitae fringilla vel, commodo ut quam. Nullam eget porta turpis. Phasellus sit amet justo purus. Pellentesque id tempus sapien, eget porta lorem. Duis libero ex, tristique quis molestie vel, sodales euismod magna. Curabitur vestibulum scelerisque tellus et aliquet. Mauris eleifend vehicula tristique. Maecenas quis eleifend nisl.",
    children: [
      {
        type: "lateral-card",
        orientation: "left",
        content: {
          type: "photo",
          url: "images/bandeira.png",
          caption: "Bandeira do Peru",
        },
      },
    ],
  },
  {
    title: "Test2",
    textContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum ex ligula, vel feugiat odio lacinia eu. Phasellus accumsan aliquet accumsan. Maecenas blandit nisl massa, nec porta est gravida sit amet. Nulla neque tellus, hendrerit vitae fringilla vel, commodo ut quam. Nullam eget porta turpis. Phasellus sit amet justo purus. Pellentesque id tempus sapien, eget porta lorem. Duis libero ex, tristique quis molestie vel, sodales euismod magna. Curabitur vestibulum scelerisque tellus et aliquet. Mauris eleifend vehicula tristique. Maecenas quis eleifend nisl.",
  },
  {
    title: "Test3",
    textContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum ex ligula, vel feugiat odio lacinia eu. Phasellus accumsan aliquet accumsan. Maecenas blandit nisl massa, nec porta est gravida sit amet. Nulla neque tellus, hendrerit vitae fringilla vel, commodo ut quam. Nullam eget porta turpis. Phasellus sit amet justo purus. Pellentesque id tempus sapien, eget porta lorem. Duis libero ex, tristique quis molestie vel, sodales euismod magna. Curabitur vestibulum scelerisque tellus et aliquet. Mauris eleifend vehicula tristique. Maecenas quis eleifend nisl.",
    children: [
      {
        type: "lateral-card",
        orientation: "right",
        content: {
          type: "table",
          headers: ["Nome", "Idade"],
          rows: [
            ["Ana", 20],
            ["Carlos", 25],
          ],
        },
      },
    ],
  },
  {
    title: "Test4",
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
];

mainContent.forEach((element) => {
  renderContent(element);
});

function upperCaseFirst(text) {
  return text[0].toUpperCase() + text.slice(1);
}

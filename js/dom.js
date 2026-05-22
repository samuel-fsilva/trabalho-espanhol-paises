const main = document.querySelector("main");
const nav = document.querySelector("nav");
const navLinks = nav.querySelectorAll("a");
const title = document.querySelector("h1");
const header = document.querySelector("header");
const pageTitle = document.querySelector("title");
const toggleBox = document.querySelector("#toggle-buttons");
const toggleButtons = toggleBox.querySelectorAll("button");
const menuButton = document.querySelector("#menu-button");
const menuIcon = menuButton.querySelector("svg");

function renderContent(data) {
  if (!main) {
    console.error("Elemento <main> não encontrado.");
    return;
  }

  const container = document.createElement("section");
  container.classList.add("content-block");

  // Título
  if (data.title) {
    const title = document.createElement("h2");
    title.textContent = data.title;
    container.appendChild(title);
  }

  // Texto
  if (data.textContent) {
    const text = document.createElement("p");
    text.textContent = data.textContent;
    container.appendChild(text);
  }

  // 🔧 Funções auxiliares de conteúdo
  function renderPhoto(content) {
    if (!content.url) {
      console.warn("Photo sem URL");
      return null;
    }

    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.style.cssText = "width: 100%; border-radius: 5px";
    img.src = content.url;

    figure.appendChild(img);

    if (content.caption) {
      const caption = document.createElement("figcaption");
      caption.textContent = content.caption;
      caption.style.cssText = "text-align: center";
      figure.appendChild(caption);
    }

    return figure;
  }

  function renderList(content) {
    if (!Array.isArray(content.items)) return null;

    const ul = document.createElement("ul");

    content.items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });

    return ul;
  }

  function renderTable(content) {
    const table = document.createElement("table");

    if (content.headers) {
      const thead = document.createElement("thead");
      const tr = document.createElement("tr");

      content.headers.forEach((h) => {
        const th = document.createElement("th");
        th.textContent = h;
        tr.appendChild(th);
      });

      thead.appendChild(tr);
      table.appendChild(thead);
    }

    if (content.rows) {
      const tbody = document.createElement("tbody");

      content.rows.forEach((row) => {
        const tr = document.createElement("tr");

        row.forEach((cell) => {
          const td = document.createElement("td");
          td.textContent = cell;
          tr.appendChild(td);
        });

        tbody.appendChild(tr);
      });

      table.appendChild(tbody);
    }

    return table;
  }
  function renderPhotosList(content) {
    if (Array.isArray(content.urls)) {
      const figure = document.createElement("figure");

      const img = document.createElement("img");
      img.style.cssText = "width: 100%; border-radius: 5px";
      img.src = content.urls[0];

      figure.appendChild(img);

      if (content.captions) {
        const caption = document.createElement("figcaption");
        caption.textContent = content.captions[0];
        caption.style.cssText = "text-align: center";
        figure.appendChild(caption);
        let count = 1;
        setInterval(() => {
          img.src = content.urls[count];
          caption.textContent = content.captions[count];
          count++;
          if (count > content.urls.length - 1) {
            count = 0;
          }
        }, 5000);
      }

      return figure;
    } else {
      return null;
    }
  }

  function renderContentBlock(content) {
    switch (content.type) {
      case "photo":
        return renderPhoto(content);

      case "list":
        return renderList(content);

      case "table":
        return renderTable(content);
      case "photos":
        return renderPhotosList(content);

      default:
        console.warn("Tipo de conteúdo desconhecido:", content.type);
        return null;
    }
  }

  // Children
  if (Array.isArray(data.children)) {
    data.children.forEach((child) => {
      let childElement;

      switch (child.type) {
        case "lateral-card":
          childElement = document.createElement("div");
          childElement.classList.add("lateral-card");

          // orientação
          if (child.orientation) {
            childElement.classList.add(`lateral-${child.orientation}`);
            container.classList.add(`container-${child.orientation}-card`);
          }

          // 🔥 NOVO: renderiza conteúdo real
          if (child.content) {
            const contentEl = renderContentBlock(child.content);

            if (contentEl) {
              childElement.appendChild(contentEl);
            }
          } else {
            childElement.textContent = "Sem conteúdo";
          }

          break;

        default:
          console.warn("Tipo desconhecido:", child.type);
          return;
      }

      container.appendChild(childElement);
    });
  }

  main.appendChild(container);
}

function areElemsOverlap(el1, el2) {
  const r1 = el1.getBoundingClientRect();
  const r2 = el2.getBoundingClientRect();

  return !(
    r1.right < r2.left ||
    r1.left > r2.right ||
    r1.bottom < r2.top ||
    r1.top > r2.bottom
  );
}

function navColor() {
  if (areElemsOverlap(nav, main)) {
    navLinks.forEach((link) => {
      link.style.cssText = "color: black;   text-shadow: 4px 4px 11px #fff;";
      nav.style.cssText = " background: white; border-bottom: 1px solid #c7c7c7ff;";
      menuIcon.setAttribute("fill", "#000");
    });
  } else {
    navLinks.forEach((link) => {
      link.style.cssText = "color: white;   text-shadow: 4px 4px 11px #000";
      nav.style.cssText = " background: transparent; padding: 0;";
      menuIcon.setAttribute("fill", "#fff");
    });
  }
}

function setElements(cont, index) {
  pageTitle.innerText = cont[index].title;
  title.innerText = cont[index].title;
  document.body.style.cssText = `background: url(${cont[index].background}); background-size: cover;  background-attachment: fixed; `;
  cont[index].mainContent.forEach((element) => {
    renderContent(element);
  });
}

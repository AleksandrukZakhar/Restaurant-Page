import "./styles.scss";
import Background from "./assets/background.jpg";
import pizza1 from "./assets/pizza-1.jpg";
import pizza2 from "./assets/pizza-2.jpg";
import pizza3 from "./assets/pizza-3.jpg";
import pizza4 from "./assets/pizza-4.jpg";
import pizza5 from "./assets/pizza-5.jpg";
import pizza6 from "./assets/pizza-6.jpg";

const Home = () => {
  const main = document.createElement("main");

  const img = new Image();
  img.src = Background;
  img.alt = "background";
  main.appendChild(img);

  const div = document.createElement("div");
  div.classList.add("container");
  main.appendChild(div);

  const h1 = document.createElement("h1");
  h1.textContent = "Restaurant";
  h1.classList.add("title");
  div.appendChild(h1);

  const p = document.createElement("p");
  p.textContent = "This is awesome restaurant";
  div.appendChild(p);

  const button = document.createElement("button");
  button.textContent = "Order Now";
  div.appendChild(button);

  return main;
};

let page = Home();

const Menu = () => {
  const main = document.createElement("main");

  const div = document.createElement("div");
  div.classList.add("pizza-container");
  main.appendChild(div);

  const pizzas = ["", pizza1, pizza2, pizza3, pizza4, pizza5, pizza6];

  for (let i = 1; i < 7; i++) {
    const img = new Image();
    img.src = pizzas[i];
    img.alt = `pizza ${i}`;
    div.appendChild(img);
  }

  return main;
};

const Contact = () => {
  const form = document.createElement("form");

  const div = document.createElement("div");
  form.appendChild(div);

  const inputData = [
    { placeholder: "Name", title: "Example: John" },
    { placeholder: "Surname", title: "Example: Doe" },
  ];

  for (let i = 0; i < 2; i++) {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = inputData[i].placeholder;
    input.pattern = "/[a-z]/gi";
    input.title = inputData[i].title;
    div.appendChild(input);
  }

  const emailInput = document.createElement("input");
  emailInput.type = "text";
  emailInput.placeholder = "Email";
  div.appendChild(emailInput);

  const button = document.createElement("button");
  button.textContent = "Send";
  div.appendChild(button);

  return form;
};

const Header = () => {
  const header = document.createElement("header");

  const p = document.createElement("p");
  p.textContent = "Restaurant";
  p.classList.add("logo");
  header.appendChild(p);

  const div = document.createElement("div");
  div.classList.add("link-container");
  header.appendChild(div);

  const links = ["Home", "Menu", "Contact Us"];
  const pages = [Home(), Menu(), Contact()];

  for (let i = 0; i < 3; i++) {
    const pl = document.createElement("p");

    const a = document.createElement("a");
    a.textContent = links[i];

    a.addEventListener("click", () => {
      const main = document.querySelector("main");
      const form = document.querySelector("form");

      if (form === null) {
        document.body.removeChild(main);
      } else document.body.removeChild(form);

      page = pages[i];
      document.body.appendChild(page);
    });

    pl.appendChild(a);

    div.appendChild(pl);
  }

  return header;
};

document.body.appendChild(Header());
document.body.appendChild(page);

import "./styles.scss";
import Background from "./assets/background.jpg";

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

  for (let i = 0; i < 3; i++) {
    const pl = document.createElement("p");

    const a = document.createElement("a");
    a.textContent = links[i];

    pl.appendChild(a);

    div.appendChild(pl);
  }

  return header;
};

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

document.body.appendChild(Header());
document.body.appendChild(Home());

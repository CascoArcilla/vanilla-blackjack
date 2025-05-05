import { BOARD_STYLES_P } from "../consts/Styles";
import { BOARD_STYLES_SECTION } from "../consts/Styles";
import removeAllChilds from "../utils/removeAllChilds";

export default class Board {
  constructor() {
    // Lado del Dealer
    // ///////////////
    this.siteDiler = document.createElement("article");
    this.siteDiler.id = "crupier";
    this.siteDiler.classList.add("w-full");

    let pDiler = document.createElement("p");
    pDiler.classList.add(...BOARD_STYLES_P);
    pDiler.textContent = "Dealer's Cards";

    let sectionDiler = document.createElement("section");
    sectionDiler.classList.add(...BOARD_STYLES_SECTION);

    this.siteDiler.appendChild(pDiler);
    this.siteDiler.appendChild(sectionDiler);

    // Lado del Jugador
    // ///////////////
    this.sitePlayer = document.createElement("article");
    this.sitePlayer.id = "player";
    this.sitePlayer.classList.add("w-full");

    let pPlayer = document.createElement("p");
    pPlayer.classList.add(...BOARD_STYLES_P);
    pPlayer.textContent = "Player's Cards";

    let sectionPlayer = document.createElement("section");
    sectionPlayer.classList.add(...BOARD_STYLES_SECTION);

    this.sitePlayer.appendChild(pPlayer);
    this.sitePlayer.appendChild(sectionPlayer);
  }

  renderBoard() {
    let app = document.getElementById("app");
    removeAllChilds(app);

    app.appendChild(this.siteDiler);
    app.appendChild(this.sitePlayer);
  }
}

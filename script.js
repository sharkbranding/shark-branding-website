document.addEventListener("DOMContentLoaded", () => {
  const sluzbaEl = document.getElementById("sluzba");
  const pocetEl = document.getElementById("pocet");
  const farbaEl = document.getElementById("farba");
  const cenaEl = document.getElementById("cena");

  // Cenník: pre každú službu dve varianty (jednofarebná, plnofarebná)
  const ceny = {
    tricko: { jednofarebna: 10, plnofarebna: 12 },
    mikina: { jednofarebna: 25, plnofarebna: 30 },
    hrncek: { jednofarebna: 6, plnofarebna: 8 },
    banner: { jednofarebna: 30, plnofarebna: 40 },
    vizitky: { jednofarebna: 35, plnofarebna: 50 },
  };

  function vypocitajCenu() {
    const sluzba = sluzbaEl.value;
    const pocet = parseInt(pocetEl.value) || 1; // ak by niekto vymazal číslo
    const farba = farbaEl.value;

    let cenaZaJednotku = ceny[sluzba][farba];
    let celkovaCena = cenaZaJednotku * pocet;

    // Zľava 10% pri odbere viac ako 50 kusov
    if (pocet > 50) {
      celkovaCena *= 0.9;
    }

    // Zobraziť zaokrúhlenú hodnotu
    cenaEl.textContent = celkovaCena.toFixed(2);
  }

  // Pripojíme eventy
  sluzbaEl.addEventListener("change", vypocitajCenu);
  pocetEl.addEventListener("input", vypocitajCenu);
  farbaEl.addEventListener("change", vypocitajCenu);

  // Inicializujeme hneď pri načítaní
  vypocitajCenu();
});

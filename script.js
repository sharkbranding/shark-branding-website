document.addEventListener("DOMContentLoaded", function() {
  function vypocitajCenu() {
    let sluzba = document.getElementById("sluzba").value;
    let pocet = parseInt(document.getElementById("pocet").value);
    let farba = document.getElementById("farba").value;

    let ceny = {
      tricko: {
        jednofarebna: 10,
        plnofarebna: 12
      },
      mikina: {
        jednofarebna: 25,
        plnofarebna: 30
      },
      hrncek: {
        jednofarebna: 6,
        plnofarebna: 8
      },
      banner: {
        jednofarebna: 30,
        plnofarebna: 40
      },
      vizitky: {
        jednofarebna: 35,
        plnofarebna: 50
      }
    };

    let cena = ceny[sluzba][farba];
    let celkovaCena = cena * pocet;

    // Zľava 10% pri odbere viac ako 50 kusov
    if (pocet > 50) {
      celkovaCena *= 0.9;
    }

    document.getElementById("cena").textContent = celkovaCena.toFixed(2);
  }

  // Spustenie výpočtu pri zmene alebo vstupe do polí
  document.getElementById("sluzba").addEventListener("change", vypocitajCenu);
  document.getElementById("pocet").addEventListener("input", vypocitajCenu);
  document.getElementById("farba").addEventListener("change", vypocitajCenu);

  // Inicializácia výpočtu pri načítaní stránky
  vypocitajCenu();
});

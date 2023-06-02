//creo un programa de educacion generico
const programaGen = {};
for (let n = 1; n <= 6; n++) {
  programaGen["nivel" + n] = {};

  for (let m = 1; m <= 10; m++) {
    programaGen["nivel" + n]["materia" + m] = {};
    for (let u = 1; u <= 10; u++) {
      programaGen["nivel" + n]["materia" + m]["unidad" + u] = {};
      for (let t = 1; t <= 10; t++) {
        const id = "PG.N" + n + ".M" + m + ".U" + u + ".T" + t;
        programaGen["nivel" + n]["materia" + m]["unidad" + u]["tema" + t] = id;
      }
    }
  }
}

const programaAlt1 = {};
for (let n = 1; n <= 5; n++) {
  programaAlt1["nivel" + n] = {};

  for (let m = 1; m <= 8; m++) {
    programaAlt1["nivel" + n]["materia" + m] = {};
    for (let u = 1; u <= 12; u++) {
      programaAlt1["nivel" + n]["materia" + m]["unidad" + u] = {};
      for (let t = 1; t <= 15; t++) {
        const id = "PA1.N" + n + ".M" + m + ".U" + u + ".T" + t;
        programaAlt1["nivel" + n]["materia" + m]["unidad" + u]["tema" + t] = id;
      }
    }
  }
}

const programaAlt2 = {};
for (let n = 1; n <= 5; n++) {
  programaAlt2["nivel" + n] = {};

  for (let m = 1; m <= 8; m++) {
    programaAlt2["nivel" + n]["materia" + m] = {};
    for (let u = 1; u <= 12; u++) {
      programaAlt2["nivel" + n]["materia" + m]["unidad" + u] = {};
      for (let t = 1; t <= 15; t++) {
        const id = "PA2.N" + n + ".M" + m + ".U" + u + ".T" + t;
        programaAlt2["nivel" + n]["materia" + m]["unidad" + u]["tema" + t] = id;
      }
    }
  }
}

export { programaGen, programaAlt1, programaAlt2 };

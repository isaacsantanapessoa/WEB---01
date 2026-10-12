let filmes = [
    { titulo: "Homem-Aranha: Um Novo Dia", ano: 2026, genero: ["Ação","Ficção","Aventura"], nota: 8.0, poster: "assets/homemaranha.webp" },
    { titulo: "Matrix", ano: 1999, genero: ["Ação","Suspense","Ficção"], nota: 8.7, poster: "assets/matrix.webp" },
    { titulo: "Viva: A Vida é uma Festa", ano: 2017, genero: ["Aventura","Animação","Fantasia","Comédia"], nota: 7.4, poster: "assets/viva.jpeg" },
    { titulo: "Como Treinar o Seu Dragão", ano: 2010, genero: ["Animação","Ação","Aventura"], nota: 7.3, poster: "assets/comotreinarseudragao.jpg" },
    { titulo: "Vingadores: Ultimato", ano: 2019, genero: ["Ficção","Ação","Aventura"], nota: 8.4, poster: "assets/ultimato.jpeg" },
    { titulo: "Corra!", ano: 2017, genero: ["Terror","Suspense Psicológico"], nota: 7.8, poster: "assets/corrafilme.jpeg" },
    { titulo: "Ilha do Medo", ano: 2010, genero: ["Suspense Psicológico","Mistério","Thriller"], nota: 7.2, poster: "assets/ilhadomedo.jpeg" },
    { titulo: "Oppenheimer", ano: 2023, genero: ["Suspense","História","Drama"], nota: 8.3, poster: "assets/oppenheimer.jpeg" }
];

function mostrarFilmes(lista) {
  const secao = document.getElementById("catalogo");
  let html = "";

  for (const filme of lista) {
    const selo = filme.nota >= 8 ? '<span class="selo">⭐ Recomendado</span>' : "";
    const nota = filme.nota !== null ? filme.nota.toFixed(1).replace(".", ",") : "—";

    let generos = "";
    for (const g of filme.genero) {
      generos += "<li>" + g + "</li>";
    }

    html += `
      <div class="catalogo-card">
        <img src="${filme.poster}" alt="Pôster de ${filme.titulo}">
        ${selo}
        <h3><a href="#">${filme.titulo}</a></h3>
        <p class="catalogo-detalhes">${filme.ano} · Nota ${nota}</p>
        <ul class="catalogo-generos">${generos}</ul>
      </div>
    `;
  }

  secao.innerHTML = html;
  document.getElementById("contador").innerText = lista.length;
}

mostrarFilmes(filmes);

function mostrarFilmes(lista) {
  const secao = document.getElementById("catalogo");

  // se a lista veio vazia, mostra a mensagem na própria página
  if (lista.length === 0) {
    secao.innerHTML = '<p class="sem-resultado">Nenhum filme encontrado</p>';
    document.getElementById("contador").innerText = 0;
    return;
  }

  let html = "";

  for (const filme of lista) {
    const selo = filme.nota >= 8 ? '<span class="selo">⭐ Recomendado</span>' : "";
    const nota = filme.nota !== null ? filme.nota.toFixed(1).replace(".", ",") : "—";

    let generos = "";
    for (const g of filme.genero) {
      generos += "<li>" + g + "</li>";
    }

    html += `
      <div class="catalogo-card">
        <img src="${filme.poster}" alt="Pôster de ${filme.titulo}">
        ${selo}
        <h3><a href="#">${filme.titulo}</a></h3>
        <p class="catalogo-detalhes">${filme.ano} · Nota ${nota}</p>
        <ul class="catalogo-generos">${generos}</ul>
      </div>
    `;
  }

  secao.innerHTML = html;
  document.getElementById("contador").innerText = lista.length;
}
// busca por título
const campoBusca = document.getElementById("busca");

campoBusca.addEventListener("input", function () {
  const texto = campoBusca.value.toLowerCase();
  const encontrados = [];

  for (const filme of filmes) {
    if (filme.titulo.toLowerCase().includes(texto)) {
      encontrados.push(filme);
    }
  }

  mostrarFilmes(encontrados);
});

mostrarFilmes(filmes);
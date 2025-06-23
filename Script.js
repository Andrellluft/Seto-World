// login aqui
let isLogin = true;

function toggleForm() {
  const title = document.getElementById('form-title');
  const button = document.querySelector('button');
  const toggleText = document.querySelector('.toggle');

  isLogin = !isLogin;

  if (isLogin) {
    title.innerText = 'Conectar-se ao Mundo';
    button.innerText = 'Conectar';
    toggleText.innerText = 'Ainda não tem conexão? Conecte-se';
  } else {
    title.innerText = 'Conecte-se Seto World';
    button.innerText = 'Conectar-se';
    toggleText.innerText = 'Já tem uma conexão? Conectar';
  }
}


// login ate aqui

// Para destacar automaticamente o link da página atual no menu de navegação

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".cabecalho nav a");
  const urlAtual = window.location.href.toLowerCase();

  links.forEach(link => {
    const linkHref = link.href.toLowerCase();
    if (urlAtual.includes(linkHref)) {
      link.classList.add("ativo");
    }
  });
});


// Para destacar automaticamente o link da página atual no menu de navegação, ate aqui

// ao clicar em um card, ele se expanda em uma janela modal

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", (e) => {
    e.stopPropagation(); // <-- Prevê interferência
    e.preventDefault();  // <-- Impede erro ao clicar se card tiver link

    const tipo = card.dataset.tipo;
    const nome = card.dataset.nome;
    const img = card.dataset.img;

    let extraHTML = '';

    switch (tipo) {
      case 'planta':
        extraHTML = `
            <p><strong>Uso:</strong> ${card.dataset.uso}</p>
            <p><strong>Raridade:</strong> ${card.dataset.raridade}</p>
            <p><strong>Local:</strong> ${card.dataset.local}</p>
            <p><strong>Habilidades:</strong> ${card.dataset.habilidades}</p>
          `;
        break;

      case 'item':
        extraHTML = `
            <p><strong>Tipo:</strong> ${card.dataset.tipoitem}</p>
            <p><strong>Raridade:</strong> ${card.dataset.raridade}</p>
            <p><strong>Efeito:</strong> ${card.dataset.efeito}</p>
            <p><strong>Habilidades:</strong> ${card.dataset.habilidades}</p>
          `;
        break;

      case 'npc':
        extraHTML = `
            <p><strong>Local:</strong> ${card.dataset.local}</p>
            <p><strong>Produtos:</strong> ${card.dataset.produtos}</p>
            <p><strong>Especialidade:</strong> ${card.dataset.especialidade}</p>
          `;
        break;

      case 'monstro':
        extraHTML = `
            <p><strong>Ataque:</strong> ${card.dataset.ataque}</p>
            <p><strong>Defesa:</strong> ${card.dataset.defesa}</p>
            <p><strong>Poder:</strong> ${card.dataset.poder}</p>
            <p><strong>Habilidades:</strong> ${card.dataset.habilidades}</p>
          `;
        break;

      case 'arena':
        extraHTML = `
            <p><strong>Localização:</strong> ${card.dataset.localizacao}</p>
            <p><strong>Clima:</strong> ${card.dataset.clima}</p>
            <p><strong>Descrição:</strong> ${card.dataset.descricao}</p>
          `;
        break;

      case 'cidade':
        extraHTML = `
            <p><strong>População:</strong> ${card.dataset.populacao}</p>
            <p><strong>Região:</strong> ${card.dataset.regiao}</p>
            <p><strong>Destaques:</strong> ${card.dataset.destaques}</p>
          `;
        break;

      case 'construcao':
        extraHTML = `
            <p><strong>Finalidade:</strong> ${card.dataset.finalidade}</p>
            <p><strong>Material:</strong> ${card.dataset.material}</p>
            <p><strong>Status:</strong> ${card.dataset.status}</p>
          `;
        break;

        case 'mapa':
        extraHTML = `
            <p><strong>Finalidade:</strong> ${card.dataset.finalidade}</p>
            <p><strong>Monstros:</strong> ${card.dataset.monstros}</p>
            <p><strong>Status:</strong> ${card.dataset.status}</p>
          `;
        break;

      default:
        extraHTML = `<p>Informações não disponíveis.</p>`;
    }

    const modalContent = document.getElementById("modal-content");
    modalContent.innerHTML = `
        <span class="close">&times;</span>
        <img src="${img}" alt="${nome}">
        <h2>${nome}</h2>
        ${extraHTML}
      `;

    document.getElementById("modal").style.display = "block";
  });
});

document.addEventListener("click", (e) => {
  const modal = document.getElementById("modal");
  if (e.target.matches(".close") || e.target === modal) {
    modal.style.display = "none";
  }
});



// ao clicar em um card, ele se expanda em uma janela modal, ate aqui


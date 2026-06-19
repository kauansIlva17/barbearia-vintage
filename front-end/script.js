const cardsDinamicos = document.getElementById("cards-dinamicos");
const formAgendamento = document.getElementById("meu-form-agendamento");
const listaAgendaReal = document.getElementById("lista-agenda-real");


const API_URL = "http://localhost:8080/cortes";


async function carregarCortes() {
  try {
    const response = await fetch(`${API_URL}/all`);
    const cortes = await response.json();

    cardsDinamicos.innerHTML = ""; 

    if (cortes.length === 0) {
      cardsDinamicos.innerHTML = "<p>Nenhum modelo disponível no momento.</p>";
      return;
    }

   
    cortes.forEach((corte) => {
      const card = document.createElement("div");
      card.classList.add("card-item");

      card.innerHTML = `
        <img src="${corte.imagem || ''}" alt="${corte.modelo}">
        <div class="card-conteudo">
            <h3>${corte.modelo.toUpperCase()}</h3>
            <p class="preco-tag">R$ ${parseFloat(corte.valor).toFixed(2)}</p>
            <p>${corte.descricao || "Sem descrição disponível."}</p>
        </div>
      `;
      cardsDinamicos.appendChild(card);
    });
  } catch (error) {
    console.error("Erro ao carregar cortes do back-end:", error);
    cardsDinamicos.innerHTML = "<p style='color: #ff4444;'>Erro ao conectar com o servidor.</p>";
  }
}


async function criarAgendamento(event) {
  event.preventDefault(); 


  const nome = document.getElementById("input-nome").value;
  const telefone = document.getElementById("input-telefone").value;
  const servicoSelecionado = document.getElementById("servico").value;
  const dataHora = document.getElementById("input-data").value;

  if (!servicoSelecionado) {
    alert("Por favor, selecione um modelo de corte!");
    return;
  }

  
  const novoItem = document.createElement("li");
  novoItem.innerHTML = `<strong>${nome}</strong> - ${servicoSelecionado.toUpperCase()}<br><small>${dataHora.replace("T", " ")}</small>`;
  listaAgendaReal.appendChild(novoItem);

  alert("Agendamento efetuado com sucesso!");
  
  
  formAgendamento.reset();

 
}


formAgendamento.addEventListener("submit", criarAgendamento);
document.addEventListener("DOMContentLoaded", carregarCortes);
const { createElement } = require("react");

const serverURL = `http://localhost:3333`;

async function buscarClientes() {
  try {
    const respostaAPI = await fetch(`${serverURL}`);

    if (!respostaAPI.ok) {
      throw new Error("Erro ao fazer requisição com a API.");
    }
    const cliente = await respostaAPI.json;
    return cliente;

    return await respostaAPI.json();
  } catch (error) {
    console.error(`Erro ao buscar informações na API. ${error}`);
    alert(`Erro ao listar clientes.`);
    return null;
  }

  async function montarTabelaClientes() {
    const infoClientes = await buscarClientes();

    const tabelaCliente = document.getElementsByClassName("tabela");
    const tbody = querySelect("#tbody");

    infoClientes.forEach((cliente) => {
      const tableRow = createElement("tr");
      const tdIdCliente = createElement("td");
      const tdNomeCliente = createElement("td");
      const tdCPFCliente = createElement("td");
      const tdAcoes = createElement("td");
      const imgDeletar = createElement("img");
      const imgEditar = createElement("img");

      tdIdCliente.textContent = cliente.IdCliente;
      tdNomeCliente.textContent = cliente.nome;
      tdCPFCliente.textContent = cliente.cpf;
      tdTelefoneCliente.textContent = cliente.telefone;

      imgDeletar.src =
        "/assets/delete_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg";
      imgDeletar.alt = "Deletar";

      imgEditar.src = "/assets/edit_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg";
      imgEditar.alt = "Editar";

      tdAcoes.appendChild(imgDeletar);
      tdAcoes.appendChild(imgEditar);

      tableRow.appendChild(tdIdCliente);
      tableRow.appendChild(tdNomeCliente);
      tableRow.appendChild(tdCPFCliente);
      tableRow.appendChild(tdTelefoneCliente);
      tableRow.appendChild(tdAcoes);

      tbody.appendChild(tableRow);
    });
    tabelaCliente.appendChild(tableRow);
  }
}

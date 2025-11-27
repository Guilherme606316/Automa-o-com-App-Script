function enviarRelatorioDiario() {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName("relatorio"); // Substitua pelo nome real da aba
    const data = sheet.getDataRange().getValues();

    if (data.length < 2) {
      Logger.log("Planilha sem dados suficientes.");
      return;
    }

    // Índices fixos: [0]=equipe, [1]=descrição, [2]=tipo, [3]=data
    const [idxEquipe, idxDescricao, idxTipo, idxData] = [0, 1, 2, 3];
    const hoje = new Date();
    const tz = Session.getScriptTimeZone();
    const dataBR = Utilities.formatDate(hoje, tz, "dd/MM/yyyy");

    // Filtra apenas as linhas de hoje
    const dadosHoje = data.filter((row, i) => {
      if (i === 0) return false; // ignora cabeçalho
      const cell = row[idxData];
      if (!cell) return false;

      // Normaliza formato de data
      const dataCell = (cell instanceof Date)
        ? cell
        : new Date(cell.toString().replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3"));

      return Utilities.formatDate(dataCell, tz, "dd/MM/yyyy") === dataBR;
    });

    if (dadosHoje.length === 0) {
      Logger.log("Nenhum dado para a data de hoje.");
      return;
    }

    // Identifica equipes e tipos
    const equipes = [...new Set(dadosHoje.map(r => r[idxEquipe]))].sort();
    const tipos = [...new Set(dadosHoje.map(r => r[idxTipo]))].sort();

    // Monta mapa: equipe -> tipo -> descrições
    const mapa = {};
    equipes.forEach(e => {
      mapa[e] = {};
      tipos.forEach(t => (mapa[e][t] = []));
    });

    dadosHoje.forEach(r => {
      const [equipe, descricao, tipo] = [r[idxEquipe], r[idxDescricao], r[idxTipo]];
      if (equipe && tipo && descricao) mapa[equipe][tipo].push(descricao);
    });

    // Renderiza HTML
    const template = HtmlService.createTemplateFromFile("Tabela"); // Nome do arquivo HTML
    Object.assign(template, {
      equipes,
      tipos,
      mapa,
      dataBR,
      diaSemana: ["DOMINGO", "SEGUNDA-FEIRA", "TERÇA-FEIRA", "QUARTA-FEIRA", "QUINTA-FEIRA", "SEXTA-FEIRA", "SÁBADO"][hoje.getDay()]
    });

    const htmlBody = template.evaluate().getContent();

    // Envio de e-mail
    const destinatario = "seuEmail@gmail.com"; // Ou leia de uma célula
    const assunto = `Relatório diário - ${dataBR}`;

    GmailApp.sendEmail(destinatario, assunto, "Seu cliente de e-mail não suporta HTML.", {
      htmlBody,
      name: "Automação de Relatórios"
    });

    Logger.log(`Relatório enviado com sucesso para ${destinatario}.`);
  } catch (e) {
    Logger.log(`Erro ao enviar relatório: ${e.message}`);
  }
}

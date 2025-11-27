# Automatização de Relatórios Diários por E-mail usando Google Planilhas

## Sumário
- [Descrição](#descrição)
- [Características](#características)
- [Pré-requisitos](#pré-requisitos)
- [Modo de Usar](#modo-de-usar)
  1. [Criar a planilha](#1-criar-a-planilha)
  2. [Compartilhar a planilha (opcional)](#2-compartilhar-a-planilha-opcional)
  3. [Abrir o Google Apps Script](#3-abrir-o-google-apps-script)
  4. [Adicionar novos arquivos](#4-adicionar-novos-arquivos)
  5. [Escolher o tipo de arquivo](#5-escolher-o-tipo-de-arquivo)
  6. [Editar o arquivo HTML](#6-editar-o-arquivo-html)
  7. [Copiar o código JavaScript (.gs)](#7-copiar-o-código-javascript-gs)
  8. [Copiar o código HTML](#8-copiar-o-código-html)
  9. [Executar a automação](#9-executar-a-automação)
- [Imagens Ilustrativas](#imagens-ilustrativas)
- [Contribuidores](#contribuidores)
- [Licença](#licença)

---

## Descrição

Este projeto automatiza o **envio diário de relatórios por e-mail**, utilizando uma **planilha Google como base de dados**.  
A automação é **gratuita**, feita com **Google Apps Script**, e pode ser facilmente adaptada para diferentes áreas (médica, administrativa, etc.).

O exemplo apresentado é voltado para o contexto **médico**, mas pode ser aplicado em qualquer outro setor.  
Os dados das tarefas são inseridos em uma planilha Google, que pode ser compartilhada e editada por vários usuários.

---

## Características

- Envio automático de relatórios diários por e-mail  
- Uso do Google Apps Script para automação e integração  
- Base de dados colaborativa (Google Planilhas)  
- Fácil adaptação para qualquer área profissional  
- Controle de permissões conforme necessidade  
- Totalmente gratuito e acessível  
- Visual do e-mail personalizável com HTML e CSS  

---

## Pré-requisitos

- Conta Google (pessoal ou profissional)  
- Permissões concedidas ao Apps Script conforme as ações desejadas (ex: envio de e-mails)  
- Google Planilhas usada como base de dados  

---

## Modo de Usar

### 1. Criar a planilha
Crie uma nova planilha Google com as seguintes colunas obrigatórias:

| EQUIPES | DESCRIÇÃO | TIPO | DATA |
|----------|------------|------|------|

Essas colunas serão usadas como base para gerar os relatórios diários.

---

### 2. Compartilhar a planilha (opcional)
Se desejar que outras pessoas possam editar:
1. Clique em **Compartilhar**  
2. Copie o link e envie para os colaboradores que precisam editar a planilha  

---

### 3. Abrir o Google Apps Script
No Google Planilhas:
1. Vá até **Extensões → Apps Script**


---

### 4. Adicionar novos arquivos
No ambiente do Apps Script:
1. Clique no ícone **“+”** ao lado de “AZ” para criar novos arquivos.

---

### 5. Escolher o tipo de arquivo
Você criará dois arquivos:
- `Código.gs` → Contém a lógica da automação (JavaScript)  
- `Tabelal.html` → Define o visual e o estilo do relatório (HTML + CSS). Obs.: o App script não dispõem de um arquivo para CSS, assim, será necessário fazer a estilização pelo arquivo html. 

---

### 6. Editar o arquivo HTML
O Apps Script abre por padrão um arquivo `.gs`.  
Para editar o visual do e-mail, crie e abra o arquivo `Tabela..html`.

---

### 7. Copiar o código JavaScript (.gs)
Copie o conteúdo do arquivo JavaScript disponível neste repositório e cole em `Código.gs`:

👉 [Ver código JavaScript (.gs)](https://github.com/Guilherme606316/Automa-o-com-App-Script/blob/main/Automatiza%C3%A7%C3%A3o%20de%20relatorio%20diario/tabela-interativa.js
)

---

### 8. Copiar o código HTML
Copie o conteúdo do arquivo HTML disponível neste repositório e cole em `Email.html`:

👉 [Ver código HTML](https://github.com/Guilherme606316/Automa-o-com-App-Script/blob/main/Automatiza%C3%A7%C3%A3o%20de%20relatorio%20diario/tabela-estatica.html)

---

### 9. Executar a automação
Depois de colar os códigos:
1. Clique no botão **Executar** no Apps Script  
2. Autorize as permissões solicitadas  
3. O sistema passará a enviar relatórios diários automaticamente, com base nos dados da planilha  

---

## Contribuidores
- [Guilherme606316](https://github.com/Guilherme606316)

---

## Licença
Este projeto está licenciado sob os termos da **licença MIT**.  
Consulte o arquivo [LICENSE](LICENSE) para mais informações.


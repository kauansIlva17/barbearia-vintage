# Barbearia Vintage

Um sistema web completo para gerenciamento de catálogos de cortes de cabelo e visualização de agendamentos de horários locais. Este projeto foi desenvolvido como parte de um trabalho acadêmico de tecnologia/programação.

## Funcionalidades

- **Vitrine Dinâmica de Modelos:** Catálogo estático de cortes de cabelo (Social, Americano, Degradê, Buzzcut e jit fade) integrado com o banco de dados para exibir preços, descrições e fotos de forma organizada.
- **Formulário de Agendamento:** Interface fluida para capturar o nome do cliente, WhatsApp, o serviço desejado e o horário.

## Tecnologias Utilizadas

### Front-end
- **HTML5:** Estruturação semântica da página.
- **CSS3:** Estilização moderna utilizando layouts responsivos (Flexbox) e tema Dark.
- **JavaScript (ES6):** Manipulação assíncrona do DOM (`fetch`, `async/await`) para comunicação com o servidor.

### Back-end
- **Node.js:** Ambiente de execução do JavaScript no servidor.
- **Express:** Framework minimalista para criação das rotas e APIs Rest.

### Banco de Dados
- **PostgreSQL:** Banco de dados relacional para persistência de dados.
- **pgAdmin 4:** Interface gráfica para gerenciamento do banco.

---
### visual da interface do projeto
![alt text](<Captura de tela 2026-06-18 212113.png>)

## Estrutura do Banco de Dados

O banco de dados `barbearia` utiliza uma tabela estruturada chamada `cortes` para alimentar os cards da vitrine:

```sql
CREATE TABLE cortes (
    id SERIAL PRIMARY KEY,
    modelo VARCHAR(50) NOT NULL,
    valor NUMERIC(10, 2) NOT NULL,
    descricao TEXT,
    imagem TEXT
);

Autor
Francisco Kauan Silva Oliveira- Desenvolvedor do Projeto

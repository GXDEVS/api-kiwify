# API Kiwify

API para consulta de dados do dashboard Kiwify usando MongoDB, seguindo o padrão da api-pay.

## Pré-requisitos

- Node.js 18+
- MongoDB local ou remoto
- pnpm

## Instalação

```bash
pnpm install
```

## Configuração

Crie um arquivo `.env` na raiz do projeto:

```env
MONGODB_URI=mongodb://localhost:27017/kiwify-dashboard
PORT=3001
```

## Inicialização do Banco

Execute o script para criar os dados padrão:

```bash
pnpm init-db
```

## Execução

### Desenvolvimento
```bash
pnpm dev
```

### Produção
```bash
pnpm prod
```

## Endpoints

Consulte a documentação completa em `endpoints/`.

## Estrutura

- `configs/` - Configurações da aplicação
- `controllers/` - Controladores das rotas
- `routes/` - Definição das rotas
- `services/` - Serviços de integração
- `models/` - Modelos do MongoDB
- `bin/` - Arquivos de inicialização
- `endpoints/` - Documentação dos endpoints
- `scripts/` - Scripts utilitários

## Banco de Dados

A API usa MongoDB com Mongoose. Os dados são criados automaticamente com valores padrão quando não existem no banco.

### Dados Padrão

- **Vendas**: Total, reembolsos, cliques, quantidade, cartão, boleto
- **Financeiro**: Saldo para saque, total vendido
- **Assinaturas**: Total, MRR, churn
- **Empresa**: Nome da empresa
- **Usuário**: Nome e email
- **Relatório**: Histórico de vendas 
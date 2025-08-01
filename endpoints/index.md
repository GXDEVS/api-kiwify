# API Kiwify - Documentação de Endpoints

## Visão Geral

Esta API fornece endpoints para acessar dados do dashboard Kiwify armazenados no MongoDB, incluindo vendas, financeiro, assinaturas, empresa, usuário e relatórios.

## Base URL

```
http://localhost:3001
```

## Autenticação

Esta API não requer autenticação - todos os endpoints são públicos.

## Endpoints Disponíveis

### Vendas

- `GET /kiwify/vendas/total` - Total de vendas
- `GET /kiwify/vendas/reembolso` - Total de reembolsos
- `GET /kiwify/vendas/kiwify-click` - Total de cliques
- `GET /kiwify/vendas/quantidade` - Quantidade de vendas
- `GET /kiwify/vendas/cartao/chargeback` - Chargebacks de cartão
- `GET /kiwify/vendas/cartao/total` - Total de vendas por cartão
- `GET /kiwify/vendas/boleto/gerados` - Boletos gerados
- `GET /kiwify/vendas/boleto/total` - Total de vendas por boleto

### Financeiro

- `GET /kiwify/financeiro/saldo-para-saque` - Saldo para saque
- `GET /kiwify/financeiro/total-vendido` - Total vendido

### Assinaturas

- `GET /kiwify/assinaturas/total` - Total de assinaturas
- `GET /kiwify/assinaturas/mrr` - MRR (Monthly Recurring Revenue)
- `GET /kiwify/assinaturas/churn` - Taxa de churn

### Empresa

- `GET /kiwify/empresa/nome` - Nome da empresa

### Usuário

- `GET /kiwify/usuario/nome` - Nome do usuário
- `GET /kiwify/usuario/email` - Email do usuário

### Relatório

- `GET /kiwify/relatorio/vendas` - Relatório histórico de vendas

## Variáveis de Ambiente

- `MONGODB_URI` - URI de conexão com MongoDB (padrão: mongodb://localhost:27017/kiwify-dashboard)
- `PORT` - Porta do servidor (padrão: 3001)

## Banco de Dados

A API usa MongoDB com Mongoose. Os dados são criados automaticamente com valores padrão quando não existem no banco.

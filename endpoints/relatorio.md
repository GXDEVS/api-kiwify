# Endpoints de Relatório

## GET /relatorio/vendas
Retorna o relatório de vendas com dados históricos.

**Resposta:**
```json
{
  "success": true,
  "data": [
    {
      "total": 152,
      "data": "05/14",
      "quantidade": 1
    },
    {
      "total": 512,
      "data": "05/15",
      "quantidade": 3
    },
    {
      "total": 320,
      "data": "05/16",
      "quantidade": 2
    }
  ]
}
``` 
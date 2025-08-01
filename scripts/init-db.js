/* ---- Imports ---- */

import dotenv from 'dotenv'
import mongoose from 'mongoose'
import VendasModel from '../models/vendas.js'
import FinanceiroModel from '../models/financeiro.js'
import AssinaturasModel from '../models/assinaturas.js'
import EmpresaModel from '../models/empresa.js'
import UsuarioModel from '../models/usuario.js'
import RelatorioModel from '../models/relatorio.js'

/* ---- Config ---- */

dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/kiwify-dashboard'

/* ---- Methods ---- */

async function initDatabase() {
  try {
    console.log('# Conectando ao MongoDB...')
    await mongoose.connect(MONGODB_URI)
    console.log('# MongoDB conectado!')

    console.log('# Inicializando dados padrão...')

    // Criar dados de vendas
    const vendas = await VendasModel.findOne()
    if (!vendas) {
      await VendasModel.create({})
      console.log('✅ Dados de vendas criados')
    } else {
      console.log('ℹ️  Dados de vendas já existem')
    }

    // Criar dados financeiros
    const financeiro = await FinanceiroModel.findOne()
    if (!financeiro) {
      await FinanceiroModel.create({})
      console.log('✅ Dados financeiros criados')
    } else {
      console.log('ℹ️  Dados financeiros já existem')
    }

    // Criar dados de assinaturas
    const assinaturas = await AssinaturasModel.findOne()
    if (!assinaturas) {
      await AssinaturasModel.create({})
      console.log('✅ Dados de assinaturas criados')
    } else {
      console.log('ℹ️  Dados de assinaturas já existem')
    }

    // Criar dados da empresa
    const empresa = await EmpresaModel.findOne()
    if (!empresa) {
      await EmpresaModel.create({})
      console.log('✅ Dados da empresa criados')
    } else {
      console.log('ℹ️  Dados da empresa já existem')
    }

    // Criar dados do usuário
    const usuario = await UsuarioModel.findOne()
    if (!usuario) {
      await UsuarioModel.create({})
      console.log('✅ Dados do usuário criados')
    } else {
      console.log('ℹ️  Dados do usuário já existem')
    }

    // Criar dados do relatório
    const relatorio = await RelatorioModel.findOne()
    if (!relatorio) {
      await RelatorioModel.create({})
      console.log('✅ Dados do relatório criados')
    } else {
      console.log('ℹ️  Dados do relatório já existem')
    }

    console.log('# Banco de dados inicializado com sucesso!')
    process.exit(0)
  } catch (error) {
    console.error('# Erro ao inicializar banco:', error)
    process.exit(1)
  }
}

/* ---- Execute ---- */

initDatabase() 
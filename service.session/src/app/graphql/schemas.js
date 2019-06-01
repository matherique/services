import { gql } from 'apollo-server';

/* eslint-disable */

export default gql`
  type Cliente {
    id: ID!
    nome: String!
    nascimento: String!
    email: String!
    usuario: String!
    status: String!
    classificacao: String
    foto_perfil: String
  }

  type Categoria {
    id: ID!
    nome_categoria: String!
    conselho_federal: String!
    ramo_atuacao: String!
    valor_medio_hora: String!  
  }

  type Servico {
    id: ID!
    natureza: String!
    data: String!
    status: String!
    profissional_id: String!
    cliente: Cliente!
    categoria: Categoria!
  }

  type Documento {
    id: ID!
    comprovante_residencia: String!
    foto_camera: String!
    documento_identificado: String!
    cliente: Cliente!
  }

  type Response {
    mensagem: String
    status: Boolean!
  }

  type Query {
    cliente(id: ID!): Cliente
    clientes: [Cliente]!
    documento(id: ID!): Documento
    documentos: [Documento]!
    categoria(id: ID!): Categoria
    categorias: [Categoria]!
    servico(id: ID!): Servico
    servicos: [Servico]!
  }

  type Mutation {
    cadastrarCliente(nome: String! nascimento: String! email: String! usuario: String! senha: String! status: String! classificacao: String foto_perfil: String ): Cliente!
    atualizarCliente(id: ID! nome: String! nascimento: String! email: String! usuario: String! senha: String! status: String! classificacao: String foto_perfil: String ): Response!
    deletarCliente(id: ID!): Response!

    cadastrarDocumento(comprovante_residencia: String! foto_camera: String! documento_identificado: String! cliente_id: ID! ): Documento!
    atualizarDocumento(id: ID! comprovante_residencia: String! foto_camera: String! documento_identificado: String! cliente_id: ID! ): Documento!
    deletarDocumento(id: ID!): Response!

    cadastrarServico(natureza: String! data: String! status: String! profissional_id: String! cliente_id: Int! categoria_id: Int! ): Servico! 
    atualizarServico(id: ID! natureza: String! data: String! status: String! profissional_id: String! cliente_id: Int! categoria_id: Int! ): Response!
    deletarServico(id: ID!): Response!

    cadastrarCategoria(nome_categoria: String! conselho_federal: String! ramo_atuacao: String! valor_medio_hora: String!): Categoria!
    atualizarCategoria(id: ID! nome_categoria: String! conselho_federal: String! ramo_atuacao: String! valor_medio_hora: String!): Response!
    deletarCategoria(id: ID!): Response!
  }
`;




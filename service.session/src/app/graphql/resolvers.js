import ClienteController from '../controllers/ClienteController';
import DocumentoController from '../controllers/DocumentoController';

export default {
  Query: {
    cliente: async (_, { id }) => {
      const resul = await ClienteController.one(id);
      return resul;
    },
    clientes: async () => {
      const result = await ClienteController.all();
      return result;
    },
    documentos: async () => {
      const result = await DocumentoController.all();
      console.log(result);
      return result;
    },
    documento: async (_, { id }) => {
      const resul = await DocumentoController.one(id);
      return resul;
    },
  },
  Mutation: {
    cadastrarCliente: async (_, dados) => {
      const result = await ClienteController.create(dados);
      return result;
    },
    atualizarCliente: async (_, dados) => {
      const result = await ClienteController.update(dados);
      return result;
    },
    deletarCliente: async (_, dados) => {
      const result = await ClienteController.delete(dados);
      return result;
    },
    cadastrarDocumento: async (_, dados) => {
      const result = await DocumentoController.create(dados);
      return result;
    },
    atualizarDocumento: async (_, dados) => {
      const result = await DocumentoController.update(dados);
      return result;
    },
    deletarDocumento: async (_, dados) => {
      const result = await DocumentoController.delete(dados);
      return result;
    },
  },
};

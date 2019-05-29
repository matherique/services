import DocumentoController from '../controllers/DocumentoController';

export default {
  query: {
    documentos: async () => {
      const result = await DocumentoController.all();
      return result;
    },
    documento: async (_, { id }) => {
      const resul = await DocumentoController.one(id);
      return resul;
    },
  },
  mutation: {
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

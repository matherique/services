import ClienteController from '../controllers/ClienteController';

export default {
  query: {
    cliente: async (_, { id }) => {
      const resul = await ClienteController.one(id);
      return resul;
    },
    clientes: async () => {
      const result = await ClienteController.all();
      return result;
    },
  },
  mutation: {
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
  },
};

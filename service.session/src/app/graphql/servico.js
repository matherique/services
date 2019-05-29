import ServicoController from '../controllers/ServicoController';

export default {
  query: {
    servico: async (_, { id }) => {
      const resul = await ServicoController.one(id);
      return resul;
    },
    servicos: async () => {
      const result = await ServicoController.all();
      return result;
    },
  },
  mutation: {
    cadastrarServico: async (_, dados) => {
      const result = await ServicoController.create(dados);
      return result;
    },
    atualizarServico: async (_, dados) => {
      const result = await ServicoController.update(dados);
      return result;
    },
    deletarServico: async (_, dados) => {
      const result = await ServicoController.delete(dados);
      return result;
    },
  },
};

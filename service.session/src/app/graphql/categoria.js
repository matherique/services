import CategoriaController from '../controllers/CategoriaController';

export default {
  query: {
    categoria: async (_, { id }) => {
      const resul = await CategoriaController.one(id);
      return resul;
    },
    categorias: async () => {
      const result = await CategoriaController.all();
      return result;
    },
  },
  mutation: {
    cadastrarCategoria: async (_, dados) => {
      console.log(dados);
      const result = await CategoriaController.create(dados);
      return result;
    },
    atualizarCategoria: async (_, dados) => {
      const result = await CategoriaController.update(dados);
      return result;
    },
    deletarCategoria: async (_, dados) => {
      const result = await CategoriaController.delete(dados);
      return result;
    },
  },
};

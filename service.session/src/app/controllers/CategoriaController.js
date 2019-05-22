import db from '../models';

const { categoria: Categoria } = db;

class CategoriaController {
  async all() {
    const dados = await Categoria.findAll().catch(err => new Error(err));
    return dados;
  }

  async one(id) {
    const dados = await Categoria.findOne({ where: { id } }).catch(
      err => new Error(err)
    );
    return dados;
  }

  async create(categoria) {
    const result = await Categoria.create(categoria).catch(
      err => new Error(err)
    );
    return result;
  }

  async update({ id, ...categoria }) {
    const result = await Categoria.update(categoria, { where: { id } }).catch(
      err => new Error(err)
    );
    return { status: !!result[0] };
  }

  async delete({ id }) {
    const result = await Categoria.destroy({ where: { id } }).catch(
      err => new Error(err)
    );
    return { status: !!result };
  }
}

export default new CategoriaController();

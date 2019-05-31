import db from '../models';

const { cliente: Cliente } = db;

class ClienteController {
  async all() {
    const dados = await Cliente.findAll().catch(err => new Error(err));
    return dados;
  }

  async one(id) {
    const dados = await Cliente.findOne({ where: { id } }).catch(
      err => new Error(err)
    );
    return dados;
  }

  async create(cliente) {
    const result = await Cliente.create(cliente).catch(err => new Error(err));
    return result;
  }

  async update({ id, ...cliente }) {
    const result = await Cliente.update(cliente, { where: { id } }).catch(
      err => new Error(err)
    );
    return { status: !!result[0] };
  }

  async delete({ id }) {
    const result = await Cliente.destroy({ where: { id } }).catch(
      err => new Error(err)
    );
    return { status: !!result };
  }
}

export default new ClienteController();


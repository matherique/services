import db from '../models';

const { servico: Servico, cliente: Cliente, categoria: Categoria } = db;

class ServicoController {
  async all() {
    const dados = await Servico.findAll({
      include: [{ model: [Cliente, Categoria], as: ['cliente', 'categoria'] }],
    }).catch(err => new Error(err));
    return dados;
  }

  async one(id) {
    const dados = await Servico.findOne({
      where: { id },
      include: [{ model: [Cliente, Categoria], as: ['cliente', 'categoria'] }],
    }).catch(err => new Error(err));
    return dados;
  }

  async create(servico) {
    const result = await Servico.create(servico).catch(
      err => new Error(err)
    );
    return result;
  }

  async update({ id, ...servico }) {
    const result = await Servico.update(servico, { where: { id } }).catch(
      err => new Error(err)
    );
    return { status: !!result[0] };
  }

  async delete({ id }) {
    const result = await Servico.destroy({ where: { id } }).catch(
      err => new Error(err)
    );
    return { status: !!result };
  }
}

export default new ServicoController();

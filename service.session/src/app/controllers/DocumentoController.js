import db from '../models';

const { documento: Documento, cliente: Cliente } = db;

class DocumentoController {
  async all() {
    const dados = await Documento.findAll({
      include: [{ model: Cliente, as: 'cliente' }],
    }).catch(err => new Error(err));
    return dados;
  }

  async one(id) {
    const dados = await Documento.findOne({
      where: { id },
      include: [{ model: Cliente, as: 'cliente' }],
    }).catch(err => new Error(err));
    return dados;
  }

  async create(documento) {
    const result = await Documento.create(documento).catch(
      err => new Error(err)
    );
    return result;
  }

  async update({ id, ...documento }) {
    const result = await Documento.update(documento, { where: { id } }).catch(
      err => new Error(err)
    );
    return { status: !!result[0] };
  }

  async delete({ id }) {
    const result = await Documento.destroy({ where: { id } }).catch(
      err => new Error(err)
    );
    return { status: !!result };
  }
}

export default new DocumentoController();

export default (sequelize, DataType) => {
  const Categoria = sequelize.define('categoria', {
    nome_categoria: DataType.STRING(64),
    conselho_federal: DataType.STRING(64),
    ramo_atuacao: DataType.STRING(32),
    valor_media_hora: DataType.DOUBLE(10, 2),
  });

    return Categoria;
};

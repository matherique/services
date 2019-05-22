export default (sequelize, DataType) => {
  const Servico = sequelize.define('servico', {
    natureza: DataType.BOOLEAN,
    data: DataType.DATEONLY,
    status: DataType.BOOLEAN,
    profissional_id: DataType.INTEGER,
  });

  Servico.associate = ({ cliente, categoria }) => {
    Servico.belongsTo(cliente, { foreingKey: 'cliente_id' });
    Servico.belongsTo(categoria, { foreingKey: 'categoria_id' });
  };

  return Servico;
};

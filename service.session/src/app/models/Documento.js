export default (sequelize, DataType) => {
  const Documento = sequelize.define('documento', {
    comprovante_residencia: DataType.STRING(128),
    foto_camera: DataType.STRING(128),
    documento_identificado: DataType.STRING(128),
    cliente_id: DataType.INTEGER,
  });

  Documento.associate = ({ cliente }) => {
    Documento.belongsTo(cliente, { foreingKey: 'cliente_id' });
  };

  return Documento;
};

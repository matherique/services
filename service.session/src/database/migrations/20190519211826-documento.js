export default {
  async up(queryInterface, Sequelize) {
    const up = await queryInterface.createTable('documento', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      comprovante_residencia: {
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      foto_camera: {
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      documento_identificado: {
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      cliente_id: {
        type: Sequelize.INTEGER,
        references: { model: 'cliente', key: 'id' },
        onDelete: 'CASCADE',
        allowNull: false,
      },
    });
    return up;
  },
  async down(queryInterface, Sequelize) {
    const drop = await queryInterface.dropTable('documento');
    return drop;
  },
};

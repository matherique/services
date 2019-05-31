export default {
  async up(queryInterface, Sequelize) {
    const up = await queryInterface.createTable('categoria', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome_categoria: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      conselho_federal: {
        type: Sequelize.STRING(64),
        allowNull: true,
      },
      ramo_atuacao: {
        type: Sequelize.STRING(32),
        allowNull: false,
      },
      valor_medio_hora: {
        type: Sequelize.DOUBLE(10, 2),
        allowNull: true,
      },
    });
    return up;
  },
  async down(queryInterface, Sequelize) {
    const drop = await queryInterface.dropTable('categoria');
    return drop;
  },
};

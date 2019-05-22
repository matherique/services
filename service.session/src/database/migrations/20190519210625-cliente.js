export default {
  async up(queryInterface, Sequelize) {
    const up = await queryInterface.createTable('cliente', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      nascimento: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(128),
        allowNull: false,
        unique: true,
      },
      usuario: {
        type: Sequelize.STRING(16),
        allowNull: false,
        unique: true,
      },
      senha: {
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      classificacao: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      foto_perfil: {
        type: Sequelize.STRING(128),
        allowNull: true,
      },
    });
    return up;
  },
  async down(queryInterface, Sequelize) {
    const drop = await queryInterface.dropTable('cliente');
    return drop;
  },
};

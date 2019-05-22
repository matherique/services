export default {
  async up(queryInterface, Sequelize) {
    const up = await queryInterface.createTable('servico', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      natureza: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      data: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      profissional_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cliente_id: {
        type: Sequelize.INTEGER,
        references: { model: 'cliente', key: 'id' },
        onDelete: 'CASCADE',
        allowNull: false,
      },
      categoria_id: {
        type: Sequelize.INTEGER,
        references: { model: 'categoria', key: 'id' },
        onDelete: 'CASCADE',
        allowNull: false,
      },
    });

    return up;
  },
  async down(queryInterface, Sequelize) {
    const drop = await queryInterface.dropTable('servico');
    return drop;
  },
};

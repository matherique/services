import bcrypt from 'bcryptjs';

async function formatUserData(client) {
  client.senha = await bcrypt.hash(client.senha, 8);
  return client;
}

export default (sequelize, DataType) => {
  const Client = sequelize.define(
    'cliente',
    {
      nome: DataType.STRING(128),
      nascimento: DataType.DATEONLY,
      email: DataType.STRING(128),
      usuario: DataType.STRING(16),
      senha: DataType.STRING(128),
      status: DataType.BOOLEAN,
      classificacao: DataType.BOOLEAN,
      foto_perfil: DataType.STRING(128),
    },
    {
      hooks: {
        beforeCreate: async client => {
          const formated = await formatUserData(client);
          return formated;
        },
        beforeBulkUpdate: async ({ attributes: client }) => {
          const formated = await formatUserData(client);
          return formated;
        },
      },
    }
  );

  return Client;
};

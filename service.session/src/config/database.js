export default {
  username: 'root',
  password: 'root',
  database: 'service',
  host: 'database',
  dialect: 'mysql',
  define: {
    timestamps: false,
    underscored: true,
    underscoredAll: true,
    upperCase: false,
    freezeTableName: true,
  },
};

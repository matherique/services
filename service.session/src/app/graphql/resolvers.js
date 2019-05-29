import cliente from './cliente';
import documento from './documento';
import servico from './servico';

export default {
  Query: {
    ...cliente.query,
    ...documento.query,
    ...servico.query,
  },
  Mutation: {
    ...cliente.mutation,
    ...documento.mutation,
    ...servico.mutation,
  },
};

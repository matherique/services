import cliente from './cliente';
import documento from './documento';
import servico from './servico';
import categoria from './categoria';

export default {
  Query: {
    ...cliente.query,
    ...documento.query,
    ...servico.query,
    ...categoria.query,
  },
  Mutation: {
    ...cliente.mutation,
    ...documento.mutation,
    ...servico.mutation,
    ...categoria.mutation,
  },
};

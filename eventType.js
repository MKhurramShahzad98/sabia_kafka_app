import avro from 'avsc';

export default avro.Type.forSchema({
  type: 'record',
  fields: [
    {
      name: 'category',
      type: { type: 'enum', symbols: ['VEHICALS', 'ELECTRONICS'] }
    },
    {
      name: 'name',
      type: 'string',
    }
  ]
});

module.exports = {
  'test' : [
      // 'scsslint',
      'concat:test',
      'mochacli',
  ],
  'default': [
      'json_to_sass:data',
      'test',
      'concat:dist',
      'sassdoc'
  ]
};

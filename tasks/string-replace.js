'use strict';
//string-replace config

module.exports = {
  precompiled: {
    files: {
      'src/scss/can-i-use/': 'features/**/*.scss',
    },
    options: {
      replacements: [{
        pattern: /\$+(categories|stats|bugs|links|title|notes_by_num)+\:+\((..*)\)+;/gmi,
        replacement: ''
      },
      {
        pattern: /\$+(title|description|notes|spec|parent|keywords)+\:+(["'])(\\?.)*?\";/gmi,
        replacement: ''
      },
      {
        pattern: /\s/g,
        replacement: ''
      }]
    }
  }
};

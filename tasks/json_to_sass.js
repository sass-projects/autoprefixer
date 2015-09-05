'use strict';
//json_to_sass config

module.exports = {
  data: {
    files: [
      {
        src: [
          'node_modules/caniuse-db/data.json'
        ],
        dest: 'src/scss/can-i-use/_data.scss'
      }
    ]
  },
};

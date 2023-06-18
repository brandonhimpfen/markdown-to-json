const fs = require('fs');
const marked = require('marked');

function markdownToJson(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return callback(err);
    }

    const json = {
      content: marked.parse(data)
    };

    callback(null, json);
  });
}

module.exports = markdownToJson;

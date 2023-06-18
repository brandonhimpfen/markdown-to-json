const markdownToJson = require('./markdownToJson');

const filePath = 'example.md';

markdownToJson(filePath, (err, json) => {
  if (err) {
    console.error('An error occurred:', err);
    process.exit(1);
  }

  // Perform your test assertions here
  console.log(json);
});
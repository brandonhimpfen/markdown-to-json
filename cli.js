const markdownToJson = require('./markdownToJson');

if (process.argv.length < 3) {
  console.error('Please provide a Markdown file path.');
  process.exit(1);
}

const filePath = process.argv[2];

markdownToJson(filePath, (err, json) => {
  if (err) {
    console.error('An error occurred:', err);
    process.exit(1);
  }

  console.log(json);
});
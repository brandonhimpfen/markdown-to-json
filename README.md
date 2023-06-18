# markdown-to-json

## Usage

### Command Line

To convert a Markdown file to JSON, use the following command-line interface:

```
npx markdown-to-json path/to/markdown-file.md
```

Replace path/to/markdown-file.md with the actual file path of your Markdown file. The resulting JSON will be displayed in the console.

### Programmatically

You can also use the markdown-to-json package programmatically in your Node.js projects.

Here's an example of how to convert a Markdown file to JSON in your JavaScript code:

```
const markdownToJson = require('markdown-to-json');

const filePath = 'path/to/markdown-file.md';

markdownToJson(filePath, (err, json) => {
  if (err) {
    console.error('An error occurred:', err);
  } else {
    console.log(json);
  }
});
```

Replace 'path/to/markdown-file.md' with the actual file path of your Markdown file. The resulting JSON object will be passed to the callback function.

## Features

* Converts Markdown files to JSON format.
* Preserves the structure and content of the Markdown file.
* Supports headings, paragraphs, lists, and other Markdown elements.

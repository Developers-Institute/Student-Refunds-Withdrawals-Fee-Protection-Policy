const fs = require('fs');
const showdown = require('showdown');

// Showdown options
// https://github.com/showdownjs/showdown#valid-options
const convertOpts = {
  ghCompatibleHeaderId: true,
  strikethrough: true,
  tables: true,
  simpleLineBreaks: true,
  openLinksInNewWindow: true,
  emoji: true,
  // completeHTMLDocument: true
};

const converter = new showdown.Converter(convertOpts);

const policyDoc = fs.readFileSync('README.md', 'UTF-8');
const html = converter.makeHtml(policyDoc);

fs.writeFileSync('index.html', html);

process.exit(0);

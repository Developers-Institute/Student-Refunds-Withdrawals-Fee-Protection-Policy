const fs = require('fs');
const showdown = require('showdown');

const convertOpts = {
  ghCompatibleHeaderId: true,
  strikethrough: true,
  tables: true,
  simpleLineBreaks: true,
  openLinksInNewWindow: true,
  emoji: true,
  completeHTMLDocument: true
};

const converter = new showdown.Converter(convertOpts);

const policyDoc = fs.readFileSync('README.md', 'UTF-8');
const html = converter.makeHtml(policyDoc);

console.log(html);

fs.writeFileSync('index.html', html);

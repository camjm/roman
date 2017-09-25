var fs = require('fs');

fs.readFile('numerals.txt', 'utf-8', function(err, data) {
  if(err) {
      return console.log(err);
  }
  
  var lines = data.split('\n');
  console.log(lines.length);
  lines.forEach(function(line) {
    var items = line.split('\t');
    items.forEach(function(item) {
      var a = `{item}`;
      console.log(`${item}, length ${item.length}`);
    });
  });
}); 
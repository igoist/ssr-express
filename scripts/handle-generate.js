const fs = require('fs');

const filePath = './map.json';

let res = {
};

let obj = {
  title: 'test'
};

let list = [];
for (let i = 0; i < 10; i++) {
  list.push(obj);
}

res.list = list;

fs.writeFile(filePath, JSON.stringify(res, null, 2), err => {
  if (err) throw err;
  console.log('The file has been saved!');
});

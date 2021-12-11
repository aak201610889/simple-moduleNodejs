const st = require('./students')
console.log(st);
st.myAge(25);
st.myName('Souvik');
st.mySchool('Coding');
// -----------fs--------
const fs = require('fs');
fs.writeFileSync('notes.txt', 'My name is Souvik');
fs.appendFileSync('notes.txt', '\nI am a student');
fs.copyFileSync('notes.txt', 'notes2.txt');
x = fs.readFileSync('notes.txt', 'utf8');

console.log(x);
// -----------os--------
const os = require('os');
console.log(os.platform());
console.log(os.homedir());
console.log(os.userInfo());
console.log(os.uptime());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.cpus());
// -----------path--------
const path = require('path');
console.log(path.parse('notes.txt'));
// -----------express--------
const express = require('express');
const app = express();
const port = 7070;
app.get('/', (req, res) => res.send('Hello World!'));
app.post('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
//--------http--------
const http = require('http');
const server = http.createServer((req, res) => {
    res.write('Hello World');
    res.end();
}
);

server.listen(8070);
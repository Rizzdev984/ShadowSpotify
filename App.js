const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.status(404).send('Halaman Url Tidak Valid.');
});

app.get('/', (req,res)=>{
  res.sendFile(path.join(__dirname, 'Home.html'))
})

app.listen(PORT, () => {
  console.log(`Server Is Running In Port ${PORT}`);
});

module.exports = app;
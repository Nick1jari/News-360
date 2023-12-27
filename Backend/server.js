require('./db/mongoose.js');
const cors = require('cors');
const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
const userRoute = require('./routes/user');
const noteRoute= require('./routes/note');
app.use(userRoute);
app.use(noteRoute);
app.listen(port, () => console.log(`[+] Server is running on http://localhost:${port} `)); //
app.get('/express_backend', (req, res) => {
  res.send({ express: 'Helloworld' });
});
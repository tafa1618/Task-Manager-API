const express = require('express');

const app = express();

const PORT = 5000;

//Route

app.get('/hello', (req, res) => {
  res.send('Task manager App');
});

app.listen(PORT, console.log(`Server running on port ${PORT}`));

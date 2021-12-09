const express = require('express');
const tasks = require('./routes/tasks');

const app = express();

const PORT = 5000;

//middleware
app.use(express.json());

//Route

app.get('/hello', (req, res) => {
  res.send('Task manager App');
});

app.use('/api/v1/tasks', tasks);

app.listen(PORT, console.log(`Server running on port ${PORT}`));

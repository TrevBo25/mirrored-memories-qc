const express = require('express');

const app = express();

app.use( express.static( `${__dirname}/../build` ) );

const port = 3333;
app.listen(port, () => console.log(`listening on port ${port}`));
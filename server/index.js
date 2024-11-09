const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 4000



app.get('/', (req, res) => res.send('Hello, World! This is your Express server.'));

app.post('/', (req, res) => {
   console.log(req.body)
   res.json({ message: 'Data received successfully'})
})

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));

mongoose.connect("mongodb://localhost:27017/jwt", {})
.then(() => {
    console.log("DB Connected successfully");
})
.catch(err=>{console.log(err.message);    
});


app.use(cors({
    origin: [`https://localhost${port}`],
    method: ['GET', 'POST'],
    credentials: true,
})
);

app.use(express.json());
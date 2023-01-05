import express from 'express';
import cors from 'cors';

import mongoose from 'mongoose';

const PORT = 4000;
const app = express();
app.use(cors);

await mongoose.connect(
    "mongodb+srv://gerdo:gerdo123@mern.kwxunqk.mongodb.net/?retryWrites=true&w=majority"
    );
 console.log(`MongoDB connection is successful`)


app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
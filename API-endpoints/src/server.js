
import express from 'express';
import router from './routers/router';
import bodyParser from 'body-parser';

export const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1/auth/',router);


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

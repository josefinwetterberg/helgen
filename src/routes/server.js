import express from "express";
import path from "path"
import url from "url";

const port = 3000;
const app = express();

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, '..', '..', 'public');
app.use(express.static(filePath))

app.use('/', (req, res) => {
    res.status(200),
    res.sendFile(filePath)
})


app.listen(port, () => {
    console.log(`Servern körs på ${port}`)
})
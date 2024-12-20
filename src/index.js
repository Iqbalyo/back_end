const router = require("./router/router")
const express = require("express")
const app = express()
const port = 3000
const cors = require("cors")
const morgan = require('morgan');


app.use(morgan('dev'));
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
}))
app.use(router)



app.use("/", (req, res) => {
    res.json({
        respone: "haloo"
    })
})
app.listen(port, () => {
    console.log(`Lansung berjalan http://localhost:${port}`)
})
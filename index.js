const express = require('express')
const cors  = require ('cors')
const bodyParser = require('body-parser')
const path  = require('path')
const app = express();
const dashboardRouter = require('./routes/dashboard-Router')

app.set('view engine', 'ejs')
app.set('views' , 'views')

app.use(cors());
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,'public')));
app.use(dashboardRouter.routes)


app.listen(9999, ()=>console.log("Run"))
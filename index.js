const express= require( 'express')
const app = express()

const path= require('path')
const route = require('./routes')
const db = require('./config/DB')
const cors = require('cors')
const paypal = require('paypal-rest-sdk');
const dotenv=require('dotenv')
const port = process.env.PORT || 5000   
dotenv.config()
app.use(cors())
app.use(express.urlencoded())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));
route(app)
db.connect()
paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'ASZ91y8f7XsqthMtkh45eMk43bZbUyBmlgfJuzjPct4RvIbDZhtS_91AYes-fekVfeGFebj1-uKa23m6',
    'client_secret': 'ECnb0_tfdx-ShtajQ6xEuwWRFGk_MCXGM2BVzkCp0M6zKyipH84KLG3W0WJXP8kaOZkfMmayNeWpUgPQ'
});
app.listen(port,()=>{
    console.log(`lang nghe port ${port} `)
})


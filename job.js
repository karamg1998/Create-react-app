const express=require('express');
const sequelize=require('./database/db');
const bodyParser=require('body-parser');
const cors=require('cors');

const userRoutes=require('./routes/userRoutes');
const personalRoutes=require('./routes/personalRoutes');
const recRoutes=require('./routes/recRoutes');

const User=require('./models/user');
const info=require('./models/personalinfo');
const forgot=require('./models/forgotPass');
const Jobs=require('./models/jobs');
const rec=require('./models/recruiter');

const app=express();
app.use(cors());
app.use(bodyParser.json());


app.use(userRoutes);
app.use(personalRoutes);
app.use(recRoutes);

User.hasOne(info);
User.hasOne(rec);
User.hasMany(forgot);
User.hasMany(Jobs);

sequelize.sync().then(res=>{
    app.listen(4000);
}).catch(err=>console.log(err));
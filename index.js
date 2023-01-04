const express = require('express')
const app = express()
const port = 5000

// const bodyParser = require('body-parser');
const { User } = require("./models/User");
const config = require("./config/key");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://juni:gkxm7535@boilerplate.tkclma9.mongodb.net/?retryWrites=true&w=majority'
).then(()=> console.log('MongoDB Connected...'))
 .catch(err=>console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 반갑수다 ㅋㅋㅋㅋ신기하누')
})

app.post('/register', (req, res)=> {
    //회원가입 시 필요 정보들을 클라이언트에서 가져오면 그것들을 디비에 넣어준다.

    const user = new User(req.body)

    user.save((err, userInfo)=> {
        if(err) return res.json({ success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
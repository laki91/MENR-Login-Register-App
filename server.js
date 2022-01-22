const express = require('express');
const cors = require('cors');
const mongojs = require('mongojs')

const db = mongojs('login-register', ['users'])

const app = express()

app.use(express.json())
app.use(cors())

app.post('/register', (req, res) => {
    db.users.find({
        email: req.body.email
    }, (err, docs) => {
        if(docs.length == 1){
            res.send({message: 'User already registred'})
        }else{
            db.users.insert({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                pass: req.body.pass,
                role: req.body.role
            }, (err, data) => {
                if(err){
                    console.log(err);
                }else{
                    res.send('User successfully registred')
                }
            })
        }
    })
})


app.post('/login', (req, res) => {
    db.users.find({
        email: req.body.email
    }, (err, docs) => {
        if(docs.length == 1){
            if(req.body.pass === docs[0].pass){
                res.send({
                    firstName: docs[0].firstName,
                    lastName: docs[0].lastName,
                    email: docs[0].email,
                    role: docs[0].role,
                    id: docs[0]._id
                })
            }else{
                res.send({message: 'Password did not match'})
            }
        }else{
            res.send({message: 'User not registred'})
        }
    })
})

app.listen(5000, ()=> {
    console.log('Server running on port 5000');
})
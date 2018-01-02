'use strict';
const express = require('express');
const router = express.Router();


    //Hello world.
    router.get('/', function (req, res) {
        return res.send('Hello World!');
    })

    //Get an existing account details
    router.get('/account', function (req, res) {
        var accountMock = {
            username: "oluwapelumi",
            password: "ifeoluwakitan",
            twitter_username: "O_Ifeoluwakitan"
        }

        if(!req.query.username) {
            return res.send({
                "status": "error",
                "message": "missing username"
            });
        }
        else if (req.query.username !== accountMock.username) {
            return res.send({
                "status": "error",
                "message": "wrong username"
            });
        }

        return res.send(accountMock);

    });

    //Create a new account
    router.post("/account_put", function(req, res) {
        console.log(req.query);
        if(!req.body.username || !req.body.password || !req.body.twitter_username) {
            if(!req.body.username){
                return res.send({
                    "status": "error",
                    "message": "Username field is missing"
                });
            } else if(!req.body.password) {
                return res.send({
                    "status": "error",
                    "message": "Password field is missing"
                });
            } else if(!req.body.twitter_username) {
                return res.send({
                    "status": "error",
                    "message": "Twitter username field is missing"
                });
            }

        } else {
            return res.send(req.body);
        }
    });


module.exports = router;



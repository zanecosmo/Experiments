const express = require("express");
require("dotenv").config();
const http = require("http");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const app = express();
const bodyParser = require("body-parser");

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const refreshToken = process.env.REFRESH_TOKEN;
const redirectURI = "https://developers.google.com/oauthplayground";

const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectURI);

const buildEmail = async (messageText) => {
    try {
        oAuth2Client.setCredentials({refreshToken: refreshToken});
        const accessToken = oAuth2Client.getAccessToken();

        const transportData = {
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: "zanecosmo@gmail.com",
                clientId: clientId,
                clientSecret: clientSecret,
                refreshToken: refreshToken,
                accessToken: accessToken
            }
        };
        
        let transporter = nodemailer.createTransport(transportData);

        const message = {
            from: "zanecosmo <zanecosmo@gmail.com>",
            to: "zanecosmo@gmail.com",
            subject: "TEST EMAIL",
            text: messageText
        }

        const result = transporter.sendMail(message);
        return result;

    } catch (error) {return error};
}

app.use("/", express.static(`${__dirname}/public`));
app.use(bodyParser.json());

app.post("/send-email", (req, res) => {
    buildEmail(req.body.textValue)
        .then((result) => console.log(result))
        .catch((error) => console.log(error.message));
    res.send(req.body);
});

const server = http.createServer(app);
const port = 4000;

server.listen(port, () => console.log(`LISTENING on PORT ${port}`));


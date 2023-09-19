const express = require("express");
const bodyParser = require('body-parser');


const { CLIENT_RENEG_LIMIT } = require("tls");

const app = express ();
app.use(bodyParser.json());


app.get('/bfhl', (request, response) => {
    const status = {
        "operation": 1
    };

    response.json(status);
});

let requestData;


app.post('/bfhl', (req, res) => {
    requestData = req.body.data;

    console.log(requestData);

    const integerRegex = /^\d+$/;


    const numbersData = requestData.filter((data)=>integerRegex.test(data))

    const alphabeticStringRegex = /^[a-zA-Z]+$/;

    const aplhabetData = requestData.filter((data)=>alphabeticStringRegex.test(data))

    const highestAlphabet = aplhabetData.reduce((highest, current) => (current > highest ? current : highest), 'A');

    const highest_alphabet = [highestAlphabet];

    const response = {
        is_sucess: true,
        user_id: 'dhruv_aggarwal_28022002',
        college_email: 'dhruv.aggarwal2020@vitbhopal.ac.in',
        college_roll_number: '20BCG10011',
        number_array: numbersData,
        alphabet_array: aplhabetData,
        highest_alphabet: highest_alphabet,
      };

      res.json(response);
});




let port = process.env.PORT;
if(port == null || port == ""){
  port = 10000;
}


app.listen(port, function() {
  console.log("Server started successfully");
});

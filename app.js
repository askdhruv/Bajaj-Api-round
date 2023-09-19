const express = require("express");
const bodyParser = require('body-parser');


const { CLIENT_RENEG_LIMIT } = require("tls");

const app = express ();
app.use(bodyParser.json());


const PORT = process.env.PORT || 3000;

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

    const numbersData = requestData.filter((data)=>typeof(data)==="number")
    const aplhabetData = requestData.filter((data)=>typeof(data)==="string")

    const highestAlphabet = aplhabetData.reduce((highest, current) => (current > highest ? current : highest), 'A');

    const highest_alphabet = [highestAlphabet];

    const response = {
        is_sucess: true,
        user_id: 'dhruv_aggarwal_BCG11',
        college_email: 'dhruv.aggarwal2020@vitbhopal.ac.in',
        college_roll_number: '20BCG10011',
        number_array: numbersData,
        alphabet_array: aplhabetData,
        highest_alphabet: highest_alphabet,
      };

      res.json(response);
});






app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });

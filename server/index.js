const express = require ('express');

const app = express();

app.get('/', (req,res) => {
    res.json({
        mg: "mega"
    });

});

app.listen(process.env.PORT || 3001, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT || 3001}`);
});
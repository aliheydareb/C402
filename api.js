const express = require("express");
const mysql = require("mysql2");

const app = express();
app.use(express.json());

let db = [
  {
    id: 1,
    ad: "aliheydar",
    soyad: "babayev",
    password: "123456",
    adress: "1",		
  },
  {
    id: 2,
    ad: "hasan",
    soyad: "hasanov",
    password: "123456",
    adress: "2",		
  },
  {
    id: 3,
    ad: "ali",
    soyad: "aliyev",
    password: "1234",
    adress: "3",
  },
  {
    id: 4,
    ad: "kerim",
    soyad: "kerimov",
    password: "123",
    adress: "4",
  },
  {
    id: 5,
    ad: "camal",
    soyad: "agayev",
    password: "6789",
    adress: "5",
  },
];
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "users",
});


// // api get method

app.get("/users", function (req, res) {
  connection.query("select * from users", function (err, result, fields) {
    //   console.log(err);
    //   console.log(result);
    //   console.log(fields);
    res.send(result);
  });
});



// id get
app.get("/users/:id", (req, res) => {
  const elem = req.params;
  // sql id get method
  connection.query("select * from users", function (err, result, fields) {
    // console.log(result);
    for (let i = 0; i < result.length; i++) {
      if (elem.id == result[i].id) {
        res.send(result[i]);
      }
    }
  });
});
// delete method
app.delete("/users/:id", (req, res) => {
  const elem = req.params.id;
  const silininenElementArray = db.filter(
    (element) => element.id != elem
  );
  connection.query(
    `DELETE FROM student WHERE id=${elem}`,
    function (err, result, fields) {
      console.log(result);
    }
  );
});

// post method
app.post("/users/", (req, res) => {
  let obj = req.body;
  connection.query(
    `INSERT INTO users (id, ad, soyad, password, adress )
    VALUES ("${obj.id}", "${obj.ad}", "${obj.soyad}", "${obj.password}", "${obj.adress)",
    (err, result, fields) => {
          //   console.log(result);
          //   app.get("/student", function (req, res) {
          //     res.send(result);
          //   });
      }
  );
  connection.query("select * from users", function (err, result, fields) {
    //   console.log(err);
    console.log(result);
    res.send(result);
  });
});

app.listen(3000);
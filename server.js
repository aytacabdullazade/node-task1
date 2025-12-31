const express = require("express");
const app = express()
const workers = [
  { id: 1, ad: "Aytac", yas: 20 },
  { id: 2, ad: "Cavid", yas: 22 },
  { id: 3, ad: "Afiq", yas: 21 }
]
app.get("/workers", (req, res) => {
  res.json(workers);
});

app.listen(3000, () => {
  console.log("===================================");
  console.log("Server işləyir: http://localhost:3000");
  console.log("Ctrl+C ilə dayandır");
  console.log("===================================");
});

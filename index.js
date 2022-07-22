const express = require('express')
const app = express()
const path = require('path')
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())



// MongoDB
// let db,
//     dbConnectionStr = 'mongodb+srv://demo:demo@cluster0
//     .2wapm.mongodb.net/rap?retryWrites=true&w=majority',
//     dbName = 'rap'

// MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
//     .then(client => {
//         console.log(`Connected to ${dbName} Database`)
//         db = client.db(dbName)
//     })
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://volbass92:<BraveNewWorld57>@cluster0.p5txzro.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

let notes = [

]

// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
  // db.collection('Trails').find().toArray()
  // .then(data => {
  //   response.render('index.ejs', { info: data})
  // })
  // .catch(error => console.error(error))
  response.sendFile(__dirname + '/index.html')
})

app.get('/api/notes', (request, response) => {
  response.json(notes)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
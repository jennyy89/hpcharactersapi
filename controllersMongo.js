import Character from './models/Character.js'

const landingAPI = (req, res) => res.send(
    `<h1>Welcome to the HP world</h1><br/>
    <p>Check out our neat API's:</p>
    <ul>
    <li >with PostgreSQL @ <a href="http://localhost:3007/api/characters" className="h">api/characters</a> , and </li>
    <li >with MongoDB @ <a href="http://localhost:3007/apiMDB/characters"> apiMDB/characters </a></li>
    </ul>
  `)

const getAll = (req, res) => {
Character.find({})
    .then((result) => res.send(result))
    .catch((e) => res.send(e.message))
}

const addEntry = (req, res) => {
console.log(req.body);
Character.create({
    name: req.body.name,
    image: req.body.image,
    ancestry: req.body.ancestry,
    house: req.body.house,
    dateOfBirth: req.body.dateOfBirth,
}
)
.then((result) => res.send(result))
.catch((e) => res.send(e.message))
}

const getOne = (req, res) => {
Character.findById(req.params.id)
    .then((result) => res.send(result))
    .catch((e) => {
    console.log(e);
    res.send({ Error});
    })
}

const edit = (req, res) => {
Character.findByIdAndUpdate(
    req.params.id,
    {   name: req.body.name,
        image: req.body.image,
        ancestry: req.body.ancestry,
        house: req.body.house,
        dateOfBirth: req.body.dateOfBirth,
    },
    { returnDocument: "after" }
    )
    .then((result) => {
    res.send(`Updated entry. Entry's title: ${result.name}`)})
    .catch((e) => {
    console.log(e);
    res.send({ Error });
    });
}

const delOne = (req, res) => {
Character.findByIdAndDelete(req.params.id)
    .then((result) => {
    res.send(`Entry Deleted. Entry's title: ${req.params.id}`)})
    .catch((e) => {
    console.log(e);
    res.send({ Error });
    });
}

export {
    getAll , 
    addEntry, 
    getOne, 
    edit, 
    delOne,
    landingAPI
}
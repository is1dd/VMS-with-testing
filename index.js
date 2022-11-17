const app = require("./app")
const connect = require("../voucher-management-system-main/config/db");
const Employee = require("./models/Employee");
const router = require("./routes/index")
const port = process.env.PORT || 8000;

// Initializing routes:
router(app);

app.get('/', (req, res) => {
    res.send("Home page!")
})



app.listen(port, () => {
   
    connect();
    console.log(`App is listening on port ${port}...`);
})
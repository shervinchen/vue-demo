const express = require('express')
const multer = require('multer')
const upload = multer({dest: 'uploads/'})
const cors = require('cors')

const app = express()


app.get('/', (req, res) => {
    res.send('hello nodejs')
})

app.options('/upload', cors())
app.post('/upload', cors(), upload.single('file'), (req, res) => {
    res.send(req.file.filename)
})

// app.get('/preview/:key', (req, res) => {
//     res.sendFile(`uploads/${req.params.key}`, {
//         root: __dirname,
//         headers: {
//             'Content-Type': 'image/jpeg'
//         }
//     }, (error) => {
//         res.status(404).send('file not found')
//     })
// })

app.get('/preview/:key', cors(), function (req, res, next) {
    var options = {
        root: __dirname,
        headers: {
            'Content-Type': 'image/jpeg'
        }
    }
    res.sendFile(`uploads/${req.params.key}`, options, function (err) {
        if (err) {
            res.status(404).send('file not found')
            next(err)
        } else {
            console.log('Sent:', req.params.key)
        }
    })
})

var port = process.env.PORT || 3000
app.listen(port)
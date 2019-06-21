const express = require('express')
const multer = require('multer')
const upload = multer({dest: 'uploads/'})

const app = express()

app.get('/', (req, res) => {
    res.send('hello nodejs')
})

app.post('/upload', upload.single('avatar'), (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
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

app.get('/preview/:key', function (req, res, next) {
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

app.listen(3000)
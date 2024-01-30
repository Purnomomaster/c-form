//html-pdf
const pdf = require('html-pdf')
const path = require('path')
const page1 = require("./doc/page1")
const page2 = require('./doc/page2')

exports.creates = (req,res) =>{
    pdf.create(page1(req.body),{}).toFile('page1.pdf',(err)=>{
        if(err){
            console.log(err);
        }
        res.send('p1 created')
    })
    pdf.create(page2(req.body),{}).toFile('page2.pdf',(err)=>{
        if(err){
            console.log(err);
        }
        res.send('p2 created')
    })
}

exports.fetchs = (req,res)=>{
    res.sendFile(path.join(__dirname, 'page1.pdf'))
    res.sendFile(path.join(__dirname, 'page2.pdf'))
}
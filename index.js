
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello this is my dokan')
  })



    const vegetables =[
        {
            id:1,
            name:'tometo',
            color:'red',
            price:100,
        },
        {
            id:2,
            name:'poteto',
            color:'light',
            price:50,
        }
        ,{
            id:3,
            name:'carret',
            color:'red',
            price:30,
        },
        {
            id:4,
            name:'latos',
            color:'green',
            price:60,
        },{
            id:5,
            name:'fainfal',
            color:'light',
            price:30,
        },{
            id:6,
            name:'orang',
            color:'yellow',
            price:130,
        }
    ]
       




app.get('/vegetables',(req,res)=>{
    res.send(vegetables)
})

app.get('/vegetables/:id',(req,res)=>{
    const id =req.params.id
    const vegetable = vegetables[id];
    res.send(vegetable)
})



// ************



    const stor =[
      {
        id:0,
        name:'Shahadat',
        father:'MdShahALam',
        Mother:'ShamsunNaher',
        Address:'RohimajiVari',
      },
      
      {
        id:1,
        name:'MDShahadatALam',
        father:'MdShahALam',
        Mother:'ShamsunNaher',
        Address:'RohimajiVari',
      },
      {
        id:2,
        name:'MDShahadatALam',
        father:'MdShahALam',
        Mother:'ShamsunNaher',
        Address:'RohimajiVari',
      },
      {
        id:3,
        name:'MDShahadatALam',
        father:'MdShahALam',
        Mother:'ShamsunNaher',
        Address:'RohimajiVari',
      },
      {
        id:4,
        name:'MDShahadatALam',
        father:'MdShahALam',
        Mother:'ShamsunNaher',
        Address:'RohimajiVari',
      },
      {
        id:5,
        name:'MDShahadatALam',
        father:'MdShahALam',
        Mother:'ShamsunNaher',
        Address:'RohimajiVari',
      },
      {
        id:6,
        name:'MDShahadatALam',
        father:'MdShahALam',
        Mother:'ShamsunNaher',
        Address:'RohimajiVari',
      },

    ]


    app.get('/stor',(req,res)=>{
        res.send(stor)
    })

    app.get('/stor/:id', (req,res)=>{
        const id = req.params.id;
        const owner =  stor[id];
        res.send(owner)
    })




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
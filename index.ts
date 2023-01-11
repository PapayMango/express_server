import express, {Application,Request,Response} from 'express'
import mysql from 'mysql2'

const app:Application = express()
const PORT:number = 4000

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/wako',async (req:Request,res:Response) => {
    return res.status(200).send({
        message:'hello'
    })
})

try{
    app.listen(PORT,() =>{
        console.log('dev server runnning at: http://localhost:${PORT}/');
    })
} catch(e){
    if(e instanceof Error){
        console.error(e.message);
    }
}

import app from "./app"
import { connectDB } from "./services/dbConnection";
const port: number = 3000

async function main() {
    await connectDB()
    app.listen(port, () => {
        console.log(`server corriendo en el puerto ${port}`);
    })    
}

main()
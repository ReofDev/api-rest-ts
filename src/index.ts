import "reflect-metadata"
import 'dotenv/config'

import { AppDataSource } from './config/dataSource'

import  app  from './app'

const PORT = process.env.PORT || 3001

async function main () {
    try {
        await AppDataSource.initialize()
        .then(() => {
            console.log("Data Source has been initialized!")
        })
        .catch((err) => {
            console.error("Error during Data Source initialization", err)
        })
        app.listen(PORT, () => {
            console.log(`listening on port http://localhost:${PORT}`)
        })
        
    } catch (error) {
        console.log(error)
    }
}

main()
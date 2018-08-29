/**
 * Database Configuration
 */
import  mongoose =  require("mongoose");

class Database {
    private uri = 'mongodb://localhost:27017/catho';
    private connection: any;

    constructor(mongoose: mongoose.Mongoose) { 
        mongoose.Promise = global.Promise;
        this.connection = mongoose.connect(this.uri, { useMongoClient: true });
    }

    closeConnection(message: string, callback: any) {
        this.connection.close(() => {
            console.log(`Mongoose was desconeted by: ${message}`)
            callback();
        });
    }

}

export default Database;

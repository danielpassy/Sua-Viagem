import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let server: MongoMemoryServer;

const connectMongo = async () => {
    server = await MongoMemoryServer.create();
    const uri = server.getUri();

        await mongoose.connect(uri, {
        connectTimeoutMS: 1000,
        socketTimeoutMS: 1000,
    });
}

const disconnect = async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await server.stop();
}

const eraseDatabase = async () => {
    const collections = mongoose.connection.collections;

    for (const key in collections) {
        const collection = collections[key];
        await collection.deleteMany();
    }
}
export default {
    connect: connectMongo,
    disconnect,
    eraseDatabase
}
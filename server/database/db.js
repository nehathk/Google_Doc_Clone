import mongoose  from 'mongoose';

const Connection = async (username = 'nehathk', password = 'helloneha') => {
    const URL = `mongodb://${username}:${password}@ac-l5ootxt-shard-00-00.nvtlntg.mongodb.net:27017,ac-l5ootxt-shard-00-01.nvtlntg.mongodb.net:27017,ac-l5ootxt-shard-00-02.nvtlntg.mongodb.net:27017/?ssl=true&replicaSet=atlas-vaw0h9-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {   
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;

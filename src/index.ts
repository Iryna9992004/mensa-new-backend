import { AppDataSource } from './db/data-source';

AppDataSource.initialize()
  .then(() => {
    console.log(
      'Here you can setup and run express / fastify / any other framework.',
    );
  })
  .catch((error) => console.log(error));

import { AppDataSource } from './db/entity/data-source';

AppDataSource.initialize()
  .then(() => {
    console.log(
      'Here you can setup and run express / fastify / any other framework.',
    );
  })
  .catch((error) => console.log(error));

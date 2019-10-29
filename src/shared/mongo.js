/* @flow */

import { MongoClient } from 'mongodb';

let client: Object;
class Mongo {
  constructor() {
    client = {};
    this.connect();
  }

  async connect() {
    const uri =
      'mongodb+srv://kevin:JfOdMMsN2BgE4wGo@velasca-wodrm.mongodb.net/test?retryWrites=true&w=majority';
    client = await new MongoClient(uri, { useNewUrlParser: true });
  }

  async getValues(db: string = 'test', collection: string = 'devices') {
    let result = {};
    await this.connect();
    client.connect(err => {
      result = client.db(db).collection(collection);

      client.disconnect();
    });
    return result;
  }
}

export default Mongo;

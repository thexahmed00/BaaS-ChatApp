import { Client,Databases,Account} from 'appwrite';

export const PROJECT_ID = '64e99e2a6f083eaca059';
export const DATABASE_ID = '64e9a3b43d45e4738335';
export const COLLECTION_ID = '64e9a3bc9f2757d56258';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('64e99e2a6f083eaca059');

export const databases= new Databases(client);

export default client;

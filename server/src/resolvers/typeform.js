import { createClient } from '@typeform/api-client';
import _ from 'lodash';


const typeformAPI = createClient({
  token: process.env.TYPEFORM_KEY,
});

export default {
  Query: {
    responses: async () => {
      const responses = await typeformAPI
        .responses.list({ uid: 'kDQzo7' });
      return JSON.stringify(responses);
    },
    response: async (parent, { email }) => {
      const responses = await typeformAPI
        .responses.list({ uid: 'kDQzo7' });
      return JSON.stringify(responses.items.filter(form => _.get(form, 'hidden.email', '') === email));
    },
  },

};

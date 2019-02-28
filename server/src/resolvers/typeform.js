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
    typeformResponse: async (parent, { email }) => {
      const responses = await typeformAPI
        .responses.list({ uid: 'kDQzo7' });
      const response = responses.items.filter(form => _.get(form, 'hidden.email', '') === email);
      const survey = await typeformAPI.forms.get({ uid: 'kDQzo7' });
      console.log(survey);
      return JSON.stringify({ response, survey });
    },
  },

};

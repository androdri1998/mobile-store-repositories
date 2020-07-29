/**
 * @format
 */

import 'react-native';
import React from 'react';

import {createLike} from '../src/services/httpFunction';
import api from '../src/services/api';

it('should add a like to the like counter of the repository', async () => {
  const responseRepository = await api.post('/repositories', {
    title: 'Test name',
    url: 'test link',
    techs: ['technology'],
  });
  const response = await createLike(responseRepository.data.id);
  expect(response.status).toBe(201);
});

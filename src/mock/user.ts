import _ from 'lodash'
import mock from './mock';
import { getRandomString } from '../util'

mock.onGet('/user').reply(200, {
    user: {
        id: 1,
        name: `Moka用户${getRandomString(4)}`,
        birth: _.random(1985, 2002)
    }
})
import _ from 'lodash'
import mock from './mock';
import { getRandomString } from '../util'

mock.onGet('/theme').reply(200, {
    theme: {
        id: 1,
        name: `主题${getRandomString(2)}`,
        config: {
            background: `#${getRandomString()}`
        }
    }
})
import _ from 'lodash'
import mock from './mock';
import { getRandomString } from '../util'

function getList(nums = 30) {
    return new Array(nums).fill(true).map((v, i) => {
        return {
            id: i,
            name: `报表${i}`,
            info: `描述${getRandomString(10)}`,
            type: _.random(0, 5)
        }
    })
}

mock.onGet('/report/list').reply(200, {
    list: getList()
})
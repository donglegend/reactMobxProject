import { fetch } from '../../util'

function getUser(params?: Record<string, any>) {
    return fetch.request({
        url: '/user',
        params: {
            ...params
        }
    }).then(({ data }) => {
        return data
    })
}

export default getUser
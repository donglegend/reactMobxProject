import { fetch } from '../../util'

function getTheme(params?: Record<string, any>) {
    return fetch.request({
        url: '/theme',
        params: {
            ...params
        }
    }).then(({ data }) => {
        return data
    })
}

export default getTheme
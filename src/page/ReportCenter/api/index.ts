import _ from "lodash"
import { fetch, getRandomString } from "../../../util"

function getReportList(params?: Record<string, any>) {
    return fetch.request({
        url: '/report/list',
        params: {
            ...params
        }
    }).then(({ data }) => {
        return data
    })
}

function createReport(): Record<string, any> {
    return new Promise((resolve, reject) => {
        resolve({
            id: Date.now(),
            name: getRandomString(),
            info: `${new Date().toLocaleTimeString()}`,
            type: _.random(0, 5)

        })
    })
}

export  { getReportList, createReport }
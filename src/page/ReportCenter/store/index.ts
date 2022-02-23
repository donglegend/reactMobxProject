import { action, flow, flowResult, makeObservable, observable, runInAction } from 'mobx'
import { getReportList, createReport} from '../api'



class ReportCenter {

    list: Record<string, any>[] = []

    constructor() {
        makeObservable(this, {
            list: observable,
            load: action.bound,
            delete: action.bound,
            add: action.bound
        })
    }

    get counts() {
        return this.list.length;
    }

    load() {
        getReportList().then(({ list }) => {
                this.list = list;
        })
    }

    delete(id: number) {
        const index = this.list.findIndex((item) => item.id === id);
        if (index > -1) {
            this.list.splice(index, 1)
        }
    }

    async add(params:any) {
        const report = await createReport();
        runInAction(() => {
            this.list.unshift(report)
        })
    }

}

export default new ReportCenter()
import { action, computed, makeObservable, observable } from 'mobx';
import { getUser } from '../../api'

interface IUser {
    id: number;
    name: string;
    birth: number
}

class UserStore {
    user: IUser = {
        id: -1,
        name: '',
        birth: -1,
    }

    constructor() {
        makeObservable(this, {
            user: observable,
            age: computed,
            load: action.bound
        })
    }

    get age() {
        if (this.user.birth === -1) {
            return -1;
        }
        const curYear = new Date().getFullYear();
        return curYear - this.user.birth;
    }

    load() {
        getUser().then(( { user } ) => {
            this.user = { ...user }
        }) 
    }
}


export default new UserStore()


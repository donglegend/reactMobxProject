import { action, autorun, makeObservable, observable, reaction, toJS } from 'mobx';
import { getTheme } from '../../api'
import { getRandomString } from '../../util';

interface ITheme {
    id: number;
    name: string;
    config: Record<string, any>
}

let _id = -1;

class themeStore {
    theme: ITheme = {
        id: _id,
        name: '',
        config: {
            background: '#fff'
        }
    }

    constructor() {
        makeObservable(this, {
            theme: observable,
            load: action.bound,
            update: action.bound
        })
    }

    load() {
        getTheme().then(( { theme } ) => {
            this.theme = { ...theme }
        }) 
    }

    update() {
        const newTheme = {
            id: ++_id,
            name: `主题${getRandomString(2)}`,
            config: {
                background: `#${getRandomString(4)}`
            }
        }
        this.theme = newTheme
    }
}


export default new themeStore()


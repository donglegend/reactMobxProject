import { useEffect } from "react";
import store from '../store'

function useInit() {
    useEffect(() => {
        store.userStore.load();
        store.themeStore.load();
    } ,[])
}

export default useInit;
import { createContext } from "react"

const storeContext = createContext<Record<string, any>>({})

export default storeContext;
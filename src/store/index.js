import { legacy_createStore as createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import reducer from "./reducers/reduser"

const rootStore = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(thunk))
)

export default rootStore

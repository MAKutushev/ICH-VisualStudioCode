import { createStore } from 'redux'
import { counterReducer } from '../reducers/reducer'

const store = createStore(counterReducer) // Step 3 -> action попадает в Store (в коде не выражено)

// Step 6 -> redux меняет state внутри store на newState из reducer'а
export default store

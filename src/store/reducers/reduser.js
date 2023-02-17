import { defaultVisibleFields } from "../../shared/shared"
import { ACTION_TYPES } from "../../shared/shared"

const initialState = {
	rows: [],
	page: 1,
	isError: false,
	limit: 10,
	isLoading: false,
	showSettingsDlg: false,
	visibleFields: defaultVisibleFields,
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_TYPES.FETCH_DATA:
			return { ...state, isLoading: true }
		case ACTION_TYPES.FETCH_DATA_SUCCESS:
			return { ...state, isLoading: false, isError:false, rows: action.payload }
		case ACTION_TYPES.FETCH_DATA_ERROR:
			return { ...state, isLoading: false, isError: true }
		case ACTION_TYPES.SET_DATA_PAGE:
			return { ...state, page: action.payload }
		case ACTION_TYPES.FIELDS_SETTING:
			return { ...state, showSettingsDlg: action.payload }
		case ACTION_TYPES.SET_VISIBLE_FIELDS:
			return { ...state, visibleFields: action.payload }
		default:
			return state
	}
}

export default reducer

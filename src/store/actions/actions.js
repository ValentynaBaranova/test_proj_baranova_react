import { ACTION_TYPES } from "../../shared/shared"
import axios from "axios"

const setData = (data) => {
	return { type: ACTION_TYPES.FETCH_DATA_SUCCESS, payload: data }
}
const setIsFetching = (bool) => {
	return { type: ACTION_TYPES.FETCH_DATA, payload: bool }
}
export const setCurrentPage = (page) => {
	return { type: ACTION_TYPES.SET_DATA_PAGE, payload: page }
}
const setFetchError = (error) => {
	return { type: ACTION_TYPES.FETCH_DATA_ERROR, payload: error }
}
export const activateSettings = (isActivate) => {
	return { type: ACTION_TYPES.FIELDS_SETTING, payload: isActivate }
}

export const setVisibleField = (visibleFields) => {
	return { type: ACTION_TYPES.SET_VISIBLE_FIELDS, payload: visibleFields }
}

export const getdata = (page, limit) => {
	console.log(page, limit)
	return async (dispatch) => {
		try {
			dispatch(setIsFetching(true))
			const response = await axios.get(
				`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`
			)
			let data = response.data
			data.forEach((item) => {
				item.address = item.address.city + " " + item.address.street
				item.company = item.company.name
			})
			dispatch(setData(data))
			dispatch(setCurrentPage(page))
		} catch (e) {
			console.log(e)
			dispatch(setFetchError(true))
		}
	}
}

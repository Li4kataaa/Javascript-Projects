import { render } from '../node_modules/lit-html/lit-html.js'
import { PageLayout } from '../Components/PageLayout.js'

const container = document.getElementById('container')
const renderView = (view) => render(PageLayout(view), container)

const isUserLogged = () => sessionStorage.getItem('accessToken') ? true : false

const createFormObject = (form) => {
	const formData = new FormData(form)

	return Object.fromEntries([...formData.entries()])
}

const saveUserInStorage = data => {
	sessionStorage.setItem('username', data.username)
	sessionStorage.setItem('id', data._id)
	sessionStorage.setItem('accessToken', data.accessToken)

	return data
}

const clearForm = (formObj) => {
	console.log(Object.values(formObj))
	Object.values(formObj).forEach(x => x = '')
}


const showNotification = (view, msg) => {
	renderView(view(msg))

	setTimeout(() => renderView(view(msg)), 3000)
}

export {
	isUserLogged,
	createFormObject,
	saveUserInStorage,
	renderView,
	showNotification,
	clearForm
}
import Cookies from 'js-cookie'
const TokenKey = 'token'
export function geTtoken() {
	return Cookies.get(TokenKey)
}
export function setToken(token) {
	Cookies.set(TokenKey, token)
}
export function removetoken() {
	Cookies.remove(TokenKey)
}

/**
 * 
 * @authors YafullyZhao (yafully@gmail.com)
 * @date    2019-02-10 12:27:49
 */
let defaultUser = 'Guest'
try {
	if (localStorage.user) {
		defaultUser = localStorage.user
	}
} catch (e) {

}

export default {
	user: defaultUser
}

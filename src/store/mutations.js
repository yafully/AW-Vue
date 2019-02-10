/**
 * 
 * @authors YafullyZhao (yafully@gmail.com)
 * @date    2019-02-10 12:28:36
 */
 export default {
	changeUser (state, user) {
		state.user = user
		try {
			localStorage.user = user
		} catch (e) {

		}
	}
}

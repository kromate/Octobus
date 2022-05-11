const functions = require('firebase-functions')

// auth trigger (new user signup)
exports.newUserSignUp = functions.auth.user().onCreate((user) => {
	// for background triggers you must return a value/promise
	return admin.firestore().collection('users').doc(user.uid).set({
		id: user.uid,
		email: user.email,
		phone: '',
		photo:''

	})
})

// auth trigger (user deleted)
exports.userDeleted = functions.auth.user().onDelete((user) => {
	const doc = admin.firestore().collection('users').doc(user.uid)
	return doc.delete()
})
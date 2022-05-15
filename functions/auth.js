const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({
	extended: true
}))

require('dotenv').config()
const CLIENT_ID = '27001174362-pm1iko4vr9r79plujgc0domhiul3pakk.apps.googleusercontent.com'
const CLIENT_URL = 'http://localhost:3000'
const port = process.env.PORT || 3001

const cors = require('cors')

const corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
	methods: 'POST',
}

// enable pre-flight request for verify-token request
app.options('/verify-token', cors(corsOptions))

// * Routes *

// This route is just for testing, comment out or remove in production if desired
app.get('/', cors(), (req, res) => {
	if (process.env.NODE_ENV === 'production') {
		res.send('Server is up!')
	} else {
		res.json({
			message: 'Server is up!', 
			clientUrl: CLIENT_URL,
			clientId: CLIENT_ID
		})
	}
})

// Main Route, route name can be changed as desired
app.post('/verify-token', cors(corsOptions), (req, res) => {
	const CLIENT_ID = '27001174362-pm1iko4vr9r79plujgc0domhiul3pakk.apps.googleusercontent.com'
	const { OAuth2Client } = require('google-auth-library')
	const client = new OAuth2Client(CLIENT_ID)

	async function verify() {
		const token = req.body.credential

  	const ticket = await client.verifyIdToken({
  		idToken: token,
			audience: CLIENT_ID,
			scope: 'openid email profile https://www.googleapis.com/auth/calendar'
			// Specify the CLIENT_ID of the app that accesses the backend
  		// Or, if multiple clients access the backend:
  		//[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  	})

	
  	const payload = ticket.getPayload()
  	// const userid = payload['sub']

  	// If request specified a G Suite domain:
  	// const domain = payload['hd']

		res.json({
			email: payload.email,
			email_verified: payload.email_verified,
			picture: payload.picture,
			name: payload.name,
			payload
		})
	}

	verify().catch(console.error)
})

app.listen(port, () => {
	console.log(`Google One-Tap Signin Server is listening on port ${port}`)
})

module.exports = app
const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()

functions.runWith({
	timeoutSeconds: 540,
	memory: '2GB'
})
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



exports.deleteUser = functions.https.onRequest((data, res) => {
	//get user and add custom claim
	console.log(data.query.email)
	return admin.auth().getUserByEmail(data.query.email).then((user) => {
		console.log(user)
		const uid = user.uid
		return admin.auth().deleteUser(uid)
	}).then(() => {
		res.status(200).send(`Success <br> user ${data.email} has been deleted`)
		return{
			message: `Success <br> user ${data.query.email} has been deleted`
		}
	}).catch((err)=>{return err})
})
exports.test = functions.https.onRequest((data, res) => {
	getAccessToken()
})





// // Require google from googleapis package.
// const { google } = require('googleapis')

// // Require oAuth2 from our google instance.
// const { OAuth2 } = google.auth

// // Create a new instance of oAuth and set our Client ID & Client Secret.
// const oAuth2Client = new OAuth2(
// 	'YOUR CLIENT ID GOES HERE',
// 	'YOUR CLIENT SECRET GOES HERE'
// )

// // Call the setCredentials method on our oAuth2Client instance and set our refresh token.
// oAuth2Client.setCredentials({
// 	refresh_token: 'YOUR REFRESH TOKEN GOES HERE',
// })

// // Create a new calender instance.
// const calendar = google.calendar({ version: 'v3', auth: oAuth2Client })

// // Create a new event start date instance for temp uses in our calendar.
// const eventStartTime = new Date()
// eventStartTime.setDate(eventStartTime.getDay() + 2)

// // Create a new event end date instance for temp uses in our calendar.
// const eventEndTime = new Date()
// eventEndTime.setDate(eventEndTime.getDay() + 4)
// eventEndTime.setMinutes(eventEndTime.getMinutes() + 45)

// // Create a dummy event for temp uses in our calendar
// const event = {
// 	summary: 'Meeting with David',
// 	location: '3595 California St, San Francisco, CA 94118',
// 	description: 'Meet with David to talk about the new client project and how to integrate the calendar for booking.',
// 	colorId: 1,
// 	start: {
// 		dateTime: eventStartTime,
// 		timeZone: 'America/Denver',
// 	},
// 	end: {
// 		dateTime: eventEndTime,
// 		timeZone: 'America/Denver',
// 	},
// }

// // Check if we a busy and have an event on our calendar for the same time.
// calendar.freebusy.query(
// 	{
// 		resource: {
// 			timeMin: eventStartTime,
// 			timeMax: eventEndTime,
// 			timeZone: 'America/Denver',
// 			items: [{ id: 'primary' }],
// 		},
// 	},
// 	(err, res) => {
// 		// Check for errors in our query and log them if they exist.
// 		if (err) return console.error('Free Busy Query Error: ', err)

// 		// Create an array of all events on our calendar during that time.
// 		const eventArr = res.data.calendars.primary.busy

// 		// Check if event array is empty which means we are not busy
// 		if (eventArr.length === 0)
// 		// If we are not busy create a new calendar event.
// 			return calendar.events.insert(
// 				{ calendarId: 'primary', resource: event },
// 				(err) => {
// 					// Check for errors and log them if they exist.
// 					if (err) return console.error('Error Creating Calender Event:', err)
// 					// Else log that the event was created.
// 					return console.log('Calendar event successfully created.')
// 				}
// 			)

// 		// If event array is not empty log that we are busy.
// 		return console.log('Sorry I\'m busy...')
// 	}
// )



/**
 * @license
 * Copyright Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// [START calendar_quickstart]
const fs = require('fs')
const readline = require('readline')
const {google} = require('googleapis')

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly']
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json'

// Load client secrets from a local file.
fs.readFile('credentials.json', (err, content) => {
	if (err) return console.log('Error loading client secret file:', err)
	// Authorize a client with credentials, then call the Google Calendar API.
	authorize(JSON.parse(content), listEvents)
})

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
	const { client_secret, client_id, redirect_uris } = credentials.installed
	console.log(credentials)
	console.log(client_secret, client_id, redirect_uris)
	const oAuth2Client = new google.auth.OAuth2(
		client_id, client_secret, redirect_uris[0])

	// Check if we have previously stored a token.
	fs.readFile(TOKEN_PATH, (err, token) => {
		if (err) return getAccessToken(oAuth2Client, callback)
		oAuth2Client.setCredentials(JSON.parse(token))
		callback(oAuth2Client)
	})
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getAccessToken(oAuth2Client, callback) {
	const authUrl = oAuth2Client.generateAuthUrl({
		access_type: 'offline',
		scope: SCOPES,
	})
	console.log('Authorize this app by visiting this url:', authUrl)
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	})
	rl.question('Enter the code from that page here: ', (code) => {
		rl.close()
		oAuth2Client.getToken(code, (err, token) => {
			if (err) return console.error('Error retrieving access token', err)
			oAuth2Client.setCredentials(token)
			// Store the token to disk for later program executions
			fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
				if (err) return console.error(err)
				console.log('Token stored to', TOKEN_PATH)
			})
			callback(oAuth2Client)
		})
	})
}

/**
 * Lists the next 10 events on the user's primary calendar.
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function listEvents(auth) {
	const calendar = google.calendar({version: 'v3', auth})
	calendar.events.list({
		calendarId: 'primary',
		timeMin: (new Date()).toISOString(),
		maxResults: 10,
		singleEvents: true,
		orderBy: 'startTime',
	}, (err, res) => {
		if (err) return console.log('The API returned an error: ' + err)
		const events = res.data.items
		if (events.length) {
			console.log('Upcoming 10 events:')
			events.map((event, i) => {
				const start = event.start.dateTime || event.start.date
				console.log(`${start} - ${event.summary}`)
			})
		} else {
			console.log('No upcoming events found.')
		}
	})
}
// [END calendar_quickstart]

module.exports = {
	SCOPES,
	listEvents,
}
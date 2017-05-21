import {Meteor} from 'meteor/meteor'
import ReactDOM from 'react-dom'
import { Tracker } from 'meteor/tracker'

import { routes, onAuthChange } from '../imports/routes/routes'
import { Links } from '../imports/api/links'

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId()
  onAuthChange(isAuthenticated)
})

Meteor.startup(() => {
  Meteor.call('greetUser', 'Mike', (err, res) => {
    console.log('Greet User Arguents', err, res)
  })
  Meteor.call('addNumbers', 2, 3, (err, res) => {
    console.log('addNumbers', err, res)
  })
  ReactDOM.render(routes, document.getElementById('app'))
})
 
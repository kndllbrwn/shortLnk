import { Meteor } from 'meteor/meteor'
import SimpleSchema from 'simpl-schema'

Meteor.startup(() => {
  // code to run on server at startup

  // const petSchema = new SimpleSchema({
  //   name: {
  //     type: String,
  //     min: 1,
  //     max: 200
  //   },
  //   age: {
  //     type: Number,
  //     min: 0
  //   },
  //   contactNumber: {
  //     type: String,
  //     optional: true,
  //     regEx: SimpleSchema.RegEx.Phone
  //   }
  // })

  // petSchema.validate({
  //   name: 'Ken',
  //   age: 3,
  //   contactNumber: 'ab24#'
  // })

  // const employeeSchema = new SimpleSchema({
  //   name: {
  //     type:String,
  //     min: 1,
  //     max: 200
  //   },
  //   hourlyWage: {
  //     type: Number,
  //     min: 0
  //   },
  //   email: {
  //     type: String,
  //     regEx: SimpleSchema.RegEx.Email
  //   }
  // })

  // employeeSchema.validate({
  //   name: 'Kb',
  //   hourlyWage: 20,
  //   email: 'test@example.com'
  // })
})


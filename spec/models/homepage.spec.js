const mongoose = require('mongoose')

require('../mongodb_helper')
const User = require('../../models/user')

describe('User model', () => {
  beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
      done()
    })
  })

  it('has an email address', () => {
    const user = new User({
      email: 'someone@example.com',
      password: 'pasSword!2'
    })
    expect(user.email).toEqual('someone@example.com')
  })
})
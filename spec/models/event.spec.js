const mongoose = require('mongoose')

require('../mongodb_helper')
const Event = require('../../models/event')

describe('Event model', () => {
  beforeEach((done) => {
    mongoose.connection.collections.events.drop(() => {
      done()
    })
  })

  it('event has a name', () => {
    const event = new Event({
      eventName: 'Christmas Lunch',
      eventDate: '2022-12-25',
    })
    expect(event.eventName).toEqual('Christmas Lunch')
  })

  it('event has a date', () => {
    const event = new Event({
      eventName: 'Christmas Lunch',
      eventDate: '2022-12-25',
    })
    expect(event.eventDate).toEqual('2022-12-25')
  })

  
})
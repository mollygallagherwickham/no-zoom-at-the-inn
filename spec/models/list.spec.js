const mongoose = require('mongoose')

require('../mongodb_helper')
const List = require('../../models/list')

describe('List model', () => {
  beforeEach((done) => {
    mongoose.connection.collections.lists.drop(() => {
      done()
    })
  })

  it('list has a title', () => {
    const list = new List({
      listName: 'Gift List',
      tasks: [{task: 'Slippers', isComplete: false}, {task: 'Toy', isComplete: true}]
    })
    expect(list.listName).toEqual('Gift List')
  })

  it('can save a list', (done) => {
    const list = new List({
      listName: 'Gift List',
      tasks: [{task: 'Slippers', isComplete: false}, {task: 'Toy', isComplete: true}]
    })

    list.save((err) => {
      expect(err).toBeNull()

      List.find((err, lists) => {
        expect(err).toBeNull()
        expect(lists[0]).toMatchObject({
          listName: 'Gift List',
          tasks: [{task: 'Slippers', isComplete: false}, {task: 'Toy', isComplete: true}]
        });
        done()
      })
    })
  })
})
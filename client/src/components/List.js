import React, { Component } from 'react'
import ListContext from './ListContext'
import ListTable from './ListTable'
import ListForm from './ListForm'

class List extends Component {
  render() {
    return (
      <ListContext.Consumer>
        {todo => (
          <div className="col-md-12">
            <ListForm />
            <ListTable todo={todo} />
          </div>
        )}
      </ListContext.Consumer>
    )
  }
}

export default List

import React, { Component } from 'react'
import ListContext from './ListContext'

class ListForm extends Component {
  render() {
    return (
      <ListContext.Consumer>
        {todo => (
          <form onSubmit={todo.onSubmit}>
            <div className="form-group">
              <div>
                <label htmlFor="date">Date</label>
                <div className="col-md-9">
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    value={todo.term || ''}
                    onChange={todo.onChange.bind(this)}
                  />
                </div>
                <label htmlFor="status">Status</label>
                <div className="col-md-9">
                  <input
                    type="text"
                    className="form-control"
                    id="status"
                    value={todo.term || ''}
                    onChange={todo.onChange.bind(this)}
                  />
                </div>
              
                                <label htmlFor="title">Title</label>
                <div className="col-md-9">
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={todo.term || ''}
                    onChange={todo.onChange.bind(this)}
                  />
                </div>
                {/* <div className="col-md-2">
                  <button
                    className="btn btn-primary"
                    onClick={todo.onUpdate.bind(this)}
                  >
                    Update
                  </button>
                </div> */}
              </div>
            </div>
            <button
              type="submit"
              onClick={todo.onSubmit.bind(this)}
              className="btn btn-success btn-block"
            >
              Submit
            </button>
          </form>
        )}
      </ListContext.Consumer>
    )
  }
}

export default ListForm

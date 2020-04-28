import React, { Component } from 'react'
import ListContext from './ListContext'
import { getList, addToList, deleteItem, updateItem } from './ListFunctions'
import ListTable from './ListTable'
import ListForm from './ListForm'
import jwt_decode from 'jwt-decode'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      term: '',
      editDisabled: false,
      items: [],
      getAll: () => {
        getList().then(data => {
          this.setState(
            {
              term: '',
              items: [...data]
            },
            () => {
              console.log(this.state.items)
            }
          )
        })
      },

      onChange: event => {
        this.setState({ term: event.target.value, editDisabled: 'disabled' })
      },

      onSubmit: e => {
        e.preventDefault()
        addToList(this.state.term).then(() => {
          this.state.getAll()
        })
        this.setState({ editDisabled: false })
      },
      onUpdate: e => {
        e.preventDefault()
        updateItem(this.state.term, this.state.id).then(() => {
          this.state.getAll()
        })
        this.setState({ editDisabled: false })
      },

      onEdit: (item, itemid, e) => {
        e.preventDefault()
        this.setState({
          id: itemid,
          term: item
        })
      },

      onDelete: (val, e) => {
        e.preventDefault()
        deleteItem(val).then(() => {
          this.state.getAll()
        })
      }
    }
  }

  componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
        email: decoded.email
        })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h1 className="text-center">TODO </h1>
            <ListContext.Provider value={this.state}>
              <ListForm />
              <ListTable getAll={this.state.getAll} />
            </ListContext.Provider>
          </div>
        </div>
      </div>
    )
  }
}

export default App

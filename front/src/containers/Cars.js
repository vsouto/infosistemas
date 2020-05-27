import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TodoActions from '../actions'
import Cars from '../components/Cars'
import { getAllCars } from '../selectors'
import fetch from 'cross-fetch'
import { trackPromise } from 'react-promise-tracker';
import { Spinner } from '../components/spinner'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

class CarsContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      loading: true,
      searchTerm: ''
    };
    this.cars = []
  }

  handleChange(event){
    const term = event.target.value

    this.setState({ searchTerm: term });
    this.cars = this.state.cars.filter(h => h.modelo.includes(term))
  };

  componentDidMount() {
    this.retrieveCars()
  }

  async retrieveCars() {

    return trackPromise(
      fetch(`http://localhost:3001/car`)
        .then(function(response){
          if (!response.ok) {
            console.log('error on api request')
          }
          return response.json();
        })
        .then(response => {

          console.log('resp ', response); //eslint-disable-line
          this.defineCars(response)
          return response;
        })
        .catch(error => {
          console.log('error on api fetch', error); //eslint-disable-line
        })
    );
  }

  defineCars(data) {
    this.cars = data
    this.setState({cars: data});
  }

  render() {
    const cars = this.cars

    return (
      <div>
        <Spinner />
        <FormControl fullWidth>
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            value={this.state.searchTerm}
            onChange={(e) => this.handleChange(e)}
          />
        </FormControl>
        <Cars cars={cars}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cars: getAllCars(state)
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarsContainer)

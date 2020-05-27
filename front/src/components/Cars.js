import React from 'react'
import PropTypes from 'prop-types'
import Car from './Car'

class Cars extends React.Component {

  getCars() {
    return this.props.cars || []
  }

  render() {

    return (
      <div style={{margin: 2+'em'}}>
        <h4>List of Cars</h4>
        <ul className="todo-list">
          {this.getCars().map(car =>
            <Car key={car._id} car={car} />
          )}
        </ul>
      </div>
    )
  }
}

Cars.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  }).isRequired)
}

export default Cars

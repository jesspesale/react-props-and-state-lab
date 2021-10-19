import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const pets = this.props.pets.map(pet => {
      // console.log(pet)
      return <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
    })
    return <div className="ui cards">
      PET COMPONENT SHOULD GO HERE
      {pets}
    </div>
  }
}

export default PetBrowser

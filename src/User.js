import React, { Component } from 'react'
import PropTypes from 'prop-types'

class User extends Component {
    state = {
        isVisible : false
    }
    static defaultProps = {
        name :"Bilgi yok",
        salary :"Bilgi yok",
        department :"Bilgi yok"
    }
  //  onClickEvent = (number,e) =>{
  //      console.log(number);}
  onClickEvent = (e) =>{
      this.setState({
          isVisible : !this.state.isVisible // State i değiştir o anki durumun tersi
      })
  }
    render() {
        const {name,department,salary}=this.props;
        const {isVisible}= this.state;
        return (
            <div className="col-md-8 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <h4 className="d-inline" onClick={this.onClickEvent}>{name}</h4><p>State değisimi için isme tıklayınız</p>
                        <i className="fa fa-home" style={{cursor : "pointer"}}></i>
                    </div>
                    { isVisible ?
                    <div className="card-body">
                        <p className="card-text">Maaş : {salary}</p>
                        <p className="card-text">Department : {department}</p>
                    </div> : null }
                </div>
              
            </div>
        )
    }
}

User.propTypes = {
    name :PropTypes.string.isRequired,
    salary :PropTypes.string.isRequired,
    department :PropTypes.string.isRequired
}
export default User;

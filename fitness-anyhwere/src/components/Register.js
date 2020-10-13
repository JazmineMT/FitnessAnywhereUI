import React from 'react'
import {useState, useEffect} from 'react'
import {TextField,Button} from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox';
import {connect} from  'react-redux'
import {signup} from '../actions/index'

const initalFormValues = {
    username: '',
    password: '',
    name: '' ,
    email: '',
    authCode: '1',
 

};
const initalFormErrors = {
    username: '',
    password: '',
    name: '' ,
    email: '',
    authCode: '1',
    showPassword: false
}


const Register = props => {
    const [formValues , setFormValues] = useState(initalFormValues)
    const [formErrors , setFormErrors] = useState(initalFormErrors)



    const onInputChange = evt =>{
        const {name , value} = evt.target
        setFormValues({
          ...formValues,
          [name]:value,
          
        })
      
      } 
    const onSumbit = evt => {
        evt.preventDefault()
        props.signup(formValues)


    }

    return (
        <div>
            <form onSubmit={onSumbit}>
            <label>
                <TextField
                      type='text'
                      name='name'
                      value={formValues.name}
                      variant='filled'
                      placeholder='Name'
                      onChange={onInputChange}
                      fullWidth = {true}
                />
            </label>
            <label>
                <TextField
                      type='text'
                      name='email'
                      value={formValues.email}
                      variant='filled'
                      placeholder='Email'
                      onChange={onInputChange}
                      fullWidth = {true}
                />
            </label>
            <label>
                <TextField
                      type='text'
                      name='username'
                      value={formValues.username}
                      variant='filled'
                      placeholder='Username'
                      onChange={onInputChange}
                      fullWidth = {true}
                />
            </label>
            <label>
                <TextField
                      type='text'
                      name='password'
                      value={formValues.password}
                      variant='filled'
                      placeholder='password'
                      onChange={onInputChange}
                      fullWidth = {true}
                />
            </label>
            <label> Check this box if you are an instructor
            <Checkbox
                name = 'authCode'
                value = {formValues.authCode}
                type = 'checkbox'
                size = 'medium'
                onChange={onInputChange}

                            />
            </label>
            <div className='btn'>
                <Button type='submit' 
                variant='contained'
                > Sign Up  </Button>

            </div>
            </form>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        allUsers: state.allUsers,
        allClasses: state.allClasses,
        classSearch: state.classSearch,
        body: state.body

    }
}

export default connect(mapStateToProps, {signup})(Register);
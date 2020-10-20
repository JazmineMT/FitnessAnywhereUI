import React from 'react'
import {useState, useEffect} from 'react'
import {TextField,Button} from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox';
import {connect} from  'react-redux'
import {newClass} from '../actions/index'
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker,MuiPickersUtilsProvider, KeyboardTimePicker, TimePicker} from '@material-ui/pickers';
import Select from '@material-ui/core/Select';

const initalFormValues = {
    name: '',
    type: '',
    duration: ' ',
    intensityLevel: '',
    location: '',
    currentRegistered: '',
    maxClassSize: '',
    Instructor: '',
    Gender: '',
    description: '',
    cost: '',
    equipment: '',
    arrivalTime: '',
    

};
const initalFormErrors = {
    name: '',
    type: '',
    duration: ' ',
    intensityLevel: '',
    location: '',
    currentRegistered: '',
    maxClassSize: '',
    Instructor: '',
    Gender: '',
    description: '',
    cost: '',
    equipment: '',
    arrivalTime: '',
}


const CreateAClass = props => {
    const [formValues , setFormValues] = useState(initalFormValues)
    const [selectedDate, handleDateChange] = useState(new Date());
    const [selectedTime, handleTimeChange] = useState(new Date());

    const onInputChange = evt =>{
        const {name , value} = evt.target
        setFormValues({
          ...formValues,
          [name]:value,
          
        })
      
      } 
    const onSumbit = evt => {
        evt.preventDefault()
        props.newClass(formValues,selectedDate, selectedTime)


    }

    return (
        <div>
            <form onSubmit={onSumbit}>
            
                <TextField
                      type='text'
                      name='name'
                      value={formValues.name}
                      variant='filled'
                      placeholder='Name'
                      onChange={onInputChange}
                      fullWidth = {true}
                />
            
            
                <TextField
                      type='text'
                      name='type'
                      value={formValues.type}
                      variant='filled'
                      placeholder='Type of Class ?'
                      onChange={onInputChange}
                      fullWidth = {true}
                />
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        clearable
                        value={selectedDate}
                        placeholder="10/10/2018"
                        onChange={date => handleDateChange(date)}
                        minDate={new Date()}
                        format="MM/dd/yyyy"
                    />
                      <TimePicker autoOk label="12 hours" value={selectedTime} onChange={handleTimeChange} 
                      />
                    </MuiPickersUtilsProvider>
            
            
                    <Select
                        native
                        value={formValues.intensityLevel}
                        onChange={onInputChange}
                        inputProps={{
                            name: 'intensityLevel',
                            id: 'age-native-simple',
                        }}
                        >
                        <option aria-label="None" value="" />
                        <option value={1}>Beginner</option>
                        <option value={2}>Intermediate</option>
                        <option value={3}>Advanced</option>
                     </Select>
                     <Select
                        native
                        value={formValues.Gender}
                        onChange={onInputChange}
                        inputProps={{
                            name: 'Gender',
                            id: 'age-native-simple',
                        }}
                        >
                        <option aria-label="None" value="" />
                        <option value={'Male'}>Male</option>
                        <option value={'Female'}>Female </option>
                        <option value={'Undefined'}>Undefined</option>
                     </Select>
            
            
            
              
                <TextField
                      type='text'
                      name='location'
                      value={formValues.location}
                      variant='filled'
                      placeholder='Location?'
                      onChange={onInputChange}
                      fullWidth = {true}
                />
            
      
                <TextField
                      type='text'
                      name='duration'
                      value={formValues.duration}
                      variant='filled'
                      placeholder='Duration of your class?'
                      onChange={onInputChange}
                      fullWidth = {true}
                />
            
            
            
            
                <TextField
                      type='text'
                      name='currentRegistered'
                      value={formValues.currentRegistered}
                      variant='filled'
                      placeholder='Any currently registered?'
                      onChange={onInputChange}
                      fullWidth = {true}
                />
            
            
            
            
                <TextField
                      type='text'
                      name='maxClassSize'
                      value={formValues.maxClassSize}
                      variant='filled'
                      placeholder='Max class size?'
                      onChange={onInputChange}
                      fullWidth = {true}
                />
            
            
            
            
                <TextField
                      type='text'
                      name='Instructor'
                      value={formValues.Instructor}
                      variant='filled'
                      placeholder='Instructor name?'
                      onChange={onInputChange}
                      fullWidth = {true}
                />
            
            
            
            
                {/* make a drop down for gender */}
            
            
            
                <TextField
                      type='text'
                      name='description'
                      value={formValues.description}
                      variant='filled'
                      placeholder='Tell us about your class?'
                      onChange={onInputChange}
                      fullWidth = {true}
                />
            
            
            
            
                <TextField
                      type='text'
                      name='cost'
                      value={formValues.cost}
                      variant='filled'
                      placeholder='Price per class?'
                      onChange={onInputChange}
                      fullWidth = {true}
                />
            
                <TextField
                      type='text'
                      name='equipment'
                      value={formValues.equipment}
                      variant='filled'
                      placeholder='Equipment requirements?'
                      onChange={onInputChange}
                      fullWidth = {true}
                />
            
            
            
            
                <TextField
                      type='text'
                      name='arrivalTime'
                      value={formValues.arrivalTime}
                      variant='filled'
                      placeholder='When should people arrive for class?'
                      onChange={onInputChange}
                      fullWidth = {true}
                />
            
                    <div className='btn'>
                        <Button type='submit' 
                        variant='contained'
                        > Create Class  </Button>

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
        body: state.body,
        user: state.body

    }
}

export default connect(mapStateToProps, {newClass})(CreateAClass);
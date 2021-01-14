import React, {Component,useState,useReducer} from 'react';
import Button from 'react-bootstrap/Button';
import {ButtonGroup} from 'react-bootstrap';
import {ToggleButton} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const formReducer = (state, event) => {
  return {
    ...state,
    [event.description]: event.value
  }
 }
 

function NewHabit() {
//   state = {
//     description: "",
//     radioValue: "",
//     checked: false
//   }
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("7");
  const [formData, setFormData] = useReducer(formReducer, {});

  const checkbox = [
    { name: 'Mon', value: '1' },
    { name: 'Tues', value: '2' },
    { name: 'Wed', value: '3' },
    { name: 'Thur', value: '4'},
    { name: 'Fri', value: '5'},
    { name: 'Sat', value: '6'},
    { name: 'Sun', value : '7'}

  ];

  const handleChange = event => {
    setFormData({
      name: event.target.description,
      value: event.target.value,
    });
  }

  return (
   
    
      <div className ="apple">
      <div className = "container">
        <div className = "child"> 
        
        <h1>Hello</h1>
        
        <div>
          You are submitting the following:
          <ul>
            {Object.entries(formData).map(([description, value]) => (
              <li key={description}><strong>{description}</strong>: {value.toString()}</li>
            ))}
          </ul>
        </div>

        <form>
        <div className = "textbox">
     <textarea name= "name" onChange ={handleChange}>add description</textarea>
     </div> 
     
    
      <ButtonGroup toggle>
        {checkbox.map((checkbox, idx) => (
          <ToggleButton
            key={idx}
            type="checkbox"
            variant="secondary"
            name="checkbox"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      <br/>
      <button>check all</button>
      <button type = "submit">Submit</button>
      </form>
      </div>
      </div>
      </div>
    
  );
  // render(<Habit/>);
}


export default NewHabit;
import React from 'react'
import {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';

import firebase from 'firebase'

import './Todo.css';

function Todo() {
    const [selectedDate, setSelectedDate] =useState(new Date());
    const useStyles = makeStyles((theme) => ({
        button: {
          margin: theme.spacing(1),
        },
      }));
      const classes = useStyles();
       
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

     
    const [text, setText] = useState('');


      const createTodo=()=>{
          let firestore=firebase.firestore();
          firestore.collection("todo-app").add({
              text:text,
              time:selectedDate
          }).then(function(){
              alert('success')
          }).catch(function(err){
              alert(err)
          })
      }  

    return (
        <div>
            
        <div className="create_todo">
            <div className="head"><h1>TODO APP !</h1></div>
               <TextField id="outlined-search" value={text} label="Add Todo" 
             onChange={event => setText(event.target.value)} label="Add Your Todo" type="search" variant="outlined"></TextField>
       
            <br/>
            <Button
                    style={{marginTop:'10px'}}
                    variant="contained"
                    color="primary"
                    onClick={createTodo}
                    className={classes.button}
                    endIcon={<Icon>add</Icon>}
                >
                    
            </Button>
            
        </div>
        </div>
    )
}

export default Todo

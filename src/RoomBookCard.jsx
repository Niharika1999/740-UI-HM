import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Form, Button } from 'react-bootstrap';
import { Card, CardContent, CardActions } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



function MyCard() {
  const [selectedOption, setSelectedOption] = React.useState('');
  const [startDate, setStartDate] = React.useState(new Date());
  const [numberInput, setNumberInput] = React.useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Selected option: ${selectedOption}`);
    console.log(`Selected date: ${startDate}`);
    console.log(`Number input: ${numberInput}`);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumberInput(e.target.value);
  };

  return (
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4} sm={6}>
            
              <Form.Group controlId="formOption">
                <Form.Label>Select an option:</Form.Label>
                <Form.Control as="select" value={selectedOption} onChange={handleOptionChange}>
                  <option value="">--Select--</option>
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </Form.Control>
              </Form.Group>
            
          </Grid>
          <Grid item xs={12} sm={6}>
            
              <Form.Group controlId="formDate">
                <Form.Label>Select a date:</Form.Label>
                <br />
                <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
              </Form.Group>
            
          </Grid>
          <Grid item xs={4} sm={6}>
            
              <Form.Group controlId="formNumber">
                <Form.Label>Enter a number:</Form.Label>
                <Form.Control type="number" value={numberInput} onChange={handleNumberChange} />
              </Form.Group>
            
          </Grid>
          <Grid item xs={4} sm={6}>
            
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
              </Button>
          </Grid>
          <br/>
        </Grid>
  );
}

export default function MyCard1() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <MyCard />
    </Card>
  );
}

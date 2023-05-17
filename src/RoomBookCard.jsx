import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Form, Button } from 'react-bootstrap';

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
  const [numNights, setNumNights] = React.useState(1);
  const [mealPlan, setMealPlan] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption && numberInput >= 1 && numNights >= 1) {
      console.log(`Selected option: ${selectedOption}`);
      console.log(`Selected date: ${startDate}`);
      console.log(`Number of guests: ${numberInput}`);
      console.log(`Number of nights: ${numNights}`);
      console.log(`Meal plan: ${mealPlan ? 'Yes' : 'No'}`); //meal plan
    } else {
      alert("Please fill in all the required fields.");
    }
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNumberChange = (e) => {
    const value = e.target.value;
    if (value >= 1) {
      setNumberInput(value);
    } else {
      alert("Number of Guests must be at least 1.");
    }
  };

  const handleNumNightsChange = (e) => {
    const value = e.target.value;
    if (value >= 1) {
      setNumNights(value);
    } else {
      alert("Number of Nights must be at least 1.");
    }
  };

  const handleMealPlanChange = (e) => { //meal plan
    setMealPlan(e.target.value === 'Yes');
  };

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={4} sm={6}>
        <Form.Group controlId="formOption">
          <Form.Label>Select an option:</Form.Label>
          <Form.Control as="select" value={selectedOption} onChange={handleOptionChange}>
            <option value="">--Select--</option>
            <option value="Single Room">Single Room</option>
            <option value="Standard Room">Standard Room</option>
            <option value="Superior Room">Superior Room</option>
            <option value="Family Room">Family Room</option>
            <option value="Deluxe Room">Deluxe Room</option>
            <option value="Ocean View Room">Ocean View Room</option>
            <option value="Junior Suite">Junior Suite</option>
            <option value="Executive Suite">Executive Suite</option>
            <option value="Garden View Room">Garden View Room</option>
            <option value="Presidential Suite">Presidential Suite</option>
            <option value="Penthouse Suite">Penthouse Suite</option>
            <option value="Luxury Suite">Luxury Suite</option>
            <option value="Royal Suite">Royal Suite</option>
          </Form.Control>
        </Form.Group>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Form.Group controlId="formDate">
          <Form.Label>Select a date:</Form.Label>
          <br />
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} minDate={new Date()} />
        </Form.Group>
      </Grid>
      <Grid item xs={4} sm={6}>
        <Form.Group controlId="formNumber">
          <Form.Label>No. of Guests</Form.Label>
          <Form.Control type="number" value={numberInput} onChange={handleNumberChange} />
        </Form.Group>
      </Grid>
      <Grid item xs={4} sm={6}>
        <Form.Group controlId="formNumNights">
          <Form.Label>Number of Nights:</Form.Label>
          <Form.Control type="number" min={1} value={numNights} onChange={handleNumNightsChange} />
        </Form.Group>
      </Grid>
      <Grid item xs={4} sm={6}> /
        <Form.Group controlId="formMealPlan">
          <Form.Label>Meal Plan:</Form.Label>
          <div>
            <Form.Check
              inline
              label="Yes"
              type="radio"
              name="mealPlan"
              value="Yes"
              checked={mealPlan}
              onChange={handleMealPlanChange}
            />
            <Form.Check
              inline
              label="No"
              type="radio"
              name="mealPlan"
              value="No"
              checked={!mealPlan}
              onChange={handleMealPlanChange}
            />
          </div>
        </Form.Group>
      </Grid>
      <Grid item xs={4} sm={6}>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Grid>
      <br />
    </Grid>
  );
}

export default function RoomBook() {
  return <MyCard />;
}

import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';

function MyCarousel(props) {
  var items = [
    {
      name: 'Random Name #1',
      description: 'Probably the most random thing you have ever seen!',
      background: '#ff0000',
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
      background: '#ffff00',
    },
    {
      name: 'Random Name #3',
      description: 'Working? really? wooo...its simple',
      background: '#ff0ff0',
    },
    {
      name: 'Random Name #4',
      description: 'Hello World! I am again with the item',
      background: '#ff00ff',
    },
  ];

  return (
    <Carousel animation='slide'>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}
export default MyCarousel;

function Item(props) {
  var style = {
    border: props.item.background,
    backgroundColor: props.item.background,
    padding: '20px',
  };

  return (
    <Paper style={style}>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className='CheckButton'>Check it out!</Button>
    </Paper>
  );
}

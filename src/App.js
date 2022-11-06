import { Container, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Item from './components/item/Item';
import Search from './components/search/Search';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const result = await fetch('https://front-test-api.herokuapp.com/api/product').then(resp => resp.json());
    setItems(result);
  }
  
  return (
    <>
      <Header />
      <Container style={{marginTop: '10px'}}>
        <Search />
        <Grid container spacing={2}>
          {items.length ? 
            items.map((item, index) => {
              return(
                <Grid item xs={3} key={index}>
                  <Item item={item} />
                </Grid>
              )
            })
          : null}
        </Grid>
        <br/>
      </Container>
    </>
  );
}

export default App;

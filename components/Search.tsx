import { useState, useEffect, ChangeEvent } from 'react';
import { Container, Input, Header, Menu } from 'semantic-ui-react';
import {
  useDispatch
} from 'react-redux';
import { AppDispatch } from '../store/store';
import { fetchPhotos } from '../store/photos';

const Search = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [query, setQuery] = useState('');
  const [activeItem, setActiveItem] = useState(10);

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (query) {
        dispatch(fetchPhotos({
          query,
          page: 1,
          per_page: activeItem,
        }));
      }
    }, 1000);
    return () => {clearTimeout(debounce)};
  }, [query]);

  useEffect(() => {
    if (query) {
      dispatch(fetchPhotos({
        query, 
        page: 1, 
        per_page: activeItem
      }))
    }
  }, [activeItem])

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <Container
      style={{padding: '3rem'}}
    >
      <Header as="h1" textAlign='center' style={{marginBottom: '3rem'}}>
        Search for free photos shared by talented creators
      </Header>
      <Input
        fluid
        icon='search'
        placeholder='Search...'
        value={query}
        onChange={(e) => onInputChange(e)}
      />
       <Menu
        secondary
        floated="right"
        style={{padding: '1rem'}}
      >
        <Menu.Item
            content='Results per page'
        />
        <Menu.Item
            name='10'
            active={activeItem === 10}
            content='10'
            onClick={() => setActiveItem(10)}
          />

          <Menu.Item
            name='25'
            active={activeItem === 25}
            content='25'
            onClick={() => setActiveItem(25)}
          />

          <Menu.Item
          position="right"
            name='50'
            active={activeItem === 50}
            content='50'
            onClick={() => setActiveItem(50)}
          />
      </Menu>
    </Container>
  )
};

export default Search;  
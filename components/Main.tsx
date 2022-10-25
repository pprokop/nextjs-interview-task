import Search from './Search';
import { Photo } from '../interfaces/photos';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Container, Pagination } from 'semantic-ui-react';

const Main = ({ defaultPhotos }) => {
  const {
    data: {
      photos,
    },
  } = useSelector((state: RootState) => state.photos);

  const renderList = () => {
    if (photos.length) {
      return (
      <ul>
        {photos.map((el: Photo) => (
          <li key={el.id}><img src={el.src.small}/></li>
        ))}
      </ul>
      )
    } else {
      return (
        <ul>
        {defaultPhotos && defaultPhotos.photos.map((el: Photo) => (
          <li key={el.id}><img src={el.src.small}/></li>
        ))}
      </ul>
      )
    }
  };

  return (
    <div>
      <Search />
      {renderList()}
    </div>
  )
};

export default Main;
import { Photo } from '../interfaces/photos';

const Main = ({ photos }) => {
  return (
    <div>
      <ul>
        {photos && photos.photos.map((el: Photo) => (
          <li key={el.id}><img src={el.src.small}/></li>
        ))}
      </ul>
    </div>
  )
};

export default Main;
import { Container, Grid, Image } from 'semantic-ui-react';
import { Photo, PhotosResponse } from '../interfaces/photos';
import Modal from './Modal';

const Main = ({ photos }: PhotosResponse) => {
  return (
    <div>
      <Container>
        <Grid
          centered
          columns={5}
        >
          {photos && photos.map((photo: Photo) => (
          <Grid.Column
            key={photo.id}
            textAlign="center"
            >
            <Modal
              trigger={<Image src={photo.src.small} alt="" wrapped centered rounded style={{cursor: "pointer"}}/>}
              photo={photo}
            />
          </Grid.Column>
          ))}
        </Grid>
      </Container>
    </div>
  )
};

export default Main;
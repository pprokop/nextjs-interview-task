import { useState } from 'react';
import { Button, Image, Modal, Segment } from 'semantic-ui-react';
import { Photo } from '../interfaces/photos';

interface IProps {
  photo: Photo,
  trigger: React.ReactNode,
};

const ModalElement = ({trigger, photo}: IProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={trigger}
      style={{width: 'auto'}}
    >
      <Modal.Actions>
        <Button
          basic
          icon="close"
          onClick={() => setOpen(false)}
        >
      </Button>
      </Modal.Actions>
      <Modal.Content style={{padding: 0}}>
        <Image
          size='big'
          src={photo.src.large}
          alt=""
        />
      </Modal.Content>
      <Modal.Description>
        <Segment
          basic
          textAlign="right">{photo.photographer}</Segment>
      </Modal.Description>
    </Modal>
  )
};

export default ModalElement;

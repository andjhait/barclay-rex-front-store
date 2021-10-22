import React, { useState } from 'react';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const Gallery = ({ gallery }) => {
  const [isOpen, setOpen] = useState(false);
  const [photoIndex, setphotoIndex] = useState(0);
  const images = []

  return (
    <>
      <ImageList variant="masonry" cols={2} gap={8}>
        {gallery[0]?.gallery?.map((item) => (
          <ImageListItem key={item?.image[0]?.url} cols={item?.cols || 1}>
            {images.push(item?.image[0]?.url)}
            <img
              onClick={() => setOpen(true)}
              srcSet={`${item?.image[0]?.url}?w=161&fit=crop&auto=format 1x,
                ${item?.image[0]?.url}?w=161&fit=crop&auto=format&dpr=2 2x`}
              alt={item?.title}
              style={{cursor: 'pointer'}}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      {isOpen && images.length && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() => setphotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setphotoIndex((photoIndex + 1) % images.length)}
        />
      )}
    </>
  );
}

export default Gallery;
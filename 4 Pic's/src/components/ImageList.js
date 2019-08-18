import React from "react";

const ImageList = props => {
  // console.log(props.images);
  const pictures = props.images.map(image => {
    return (
      <img alt={image.description} key={image.id} src={image.urls.small} />
    );
  });
  return <span>{pictures}</span>;
};

export default ImageList;

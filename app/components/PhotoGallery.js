import React from 'react';
import Photo from './Photo';

const PhotoGallery = ({imagesArray, padding = 0, columns = [1, 2, 3]}) => {
    const imageNodes = imagesArray.map((arr, index) => {
        return (
            <Photo key={index} url={arr.url} columns={columns} padding={padding} clickHandler={arr.clickHandler}/>
        );
    });

    const cssBreakpoints = `
    .imageGridItem { width: ${Math.floor(100 / columns[0])}%; }
    @media only screen and (min-width : 480px) {
      .imageGridItem { width: ${Math.floor(100 / columns[1])}%; }
    }
    @media only screen and (min-width : 992px) {
      .imageGridItem { width: ${Math.floor(100 / columns[2])}%; }
    }
  `;

    return (
        <div className="imageGrid">
            <style dangerouslySetInnerHTML={{ __html: cssBreakpoints }}/>
            {imageNodes}
        </div>
    );
};

PhotoGallery.propTypes = {
    imagesArray: React.PropTypes.array.isRequired,
    columns: React.PropTypes.array,
    padding: React.PropTypes.number,
};

PhotoGallery.defaultProps = {
    imagesArray: [],
    columns: [1, 2, 3],
    padding: 0,
};

export default PhotoGallery;
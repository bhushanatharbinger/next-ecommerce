type GalleryCourseType = {
  images: string[]
}

const Gallery = ({ images }: GalleryCourseType) => {
  const featImage = images[0];

  return (
    <section className="course-gallery">
      <div className="course-gallery__thumbs">
        {images.map(image => (
          <div key={image} className="course-gallery__thumb">
            <img src={image} alt="" />
          </div>
        ))}
      </div>

      <div className="course-gallery__image">
        <img src={featImage} alt="" />
      </div>
    </section>
  );
};
  
export default Gallery;
  
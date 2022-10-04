import './Image.css';

const photoOfTheDay = 'https://loremflickr.com/320/240';

const Image = () => {
  return (
    <div className="imageContainer">
      <img className="actual-image" src={photoOfTheDay} alt="photoOfTheDay" />
    </div>
  );
};
export default Image;

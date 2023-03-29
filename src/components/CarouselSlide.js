import Carousel from 'react-bootstrap/Carousel';
import Slide1 from '../images/futu9.jpg'
import Slide2 from '../images/futu1.jpg'
import Slide3 from '../images/futu77.jpg'


function CarouselSlide(Info) {

  console.log('Info.synopsis :>> ', Info.Info.synopsis);
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slide1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{Info.Info.yearsAired}</h3>
          <p>{Info.Info.synopsis}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slide2}
          alt="Second slide"
        />

        <Carousel.Caption>
              <h3>{Info.Info.yearsAired}</h3>
          <p>{Info.Info.synopsis}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slide3}
          // src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
             <h3>{Info.Info.yearsAired}</h3>
          <p>{Info.Info.synopsis}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSlide;
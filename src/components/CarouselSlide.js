import Carousel from 'react-bootstrap/Carousel';
import Slide1 from '../images/desktop-1920x1080.jpg'
import Slide2 from '../images/919054_154683788038711_549329048_o.jpg'
import Slide3 from '../images/493497.jpg'


function CarouselSlide(Info) {


  if (Info) {
                                           // console.log('Info :>> ', Info);

    let stringCompleto = Info.Info.synopsis;
    const longitudTrozo = 406;
    const arrayDeTrozos = [];
                                         // console.log('stringCompleto :>> ', stringCompleto);


    for (let i = 0; i < stringCompleto.length; i += longitudTrozo) {
        const trozo = stringCompleto.substring(i, i + longitudTrozo);
        arrayDeTrozos.push(trozo);
}

                                       // console.log('Info.synopsis :>> ', Info.Info.synopsis);
    return (
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={Slide1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Synopsis</h1>
            <h5>{arrayDeTrozos[0]}</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={Slide2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1>Creators: {Info.Info.creators[0].name} & {Info.Info.creators[1].name}</h1>
            <h5>{arrayDeTrozos[1]}</h5>
           </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={Slide3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1>Futurama was on TV between {Info.Info.yearsAired}</h1>
           <h5>{arrayDeTrozos[2]}</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
 
}
export default CarouselSlide;
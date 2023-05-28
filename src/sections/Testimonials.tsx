import Carousel from "../components/Carousel";
import Testimonial from "../components/Testimonial";
import Data from "../data";

const Testimonials = () => (
  <section id="testimonials">
    <h1>Testimonials</h1>
    <Carousel>
      {Data.testimonials.map((testimonial) => (
        <Testimonial
          key={testimonial.name}
          name={testimonial.name}
          subheading={testimonial.subheading}
          body={testimonial.body}
        />
      ))}
    </Carousel>
  </section>
);

export default Testimonials;

import React from 'react'
import peopleImage from '../../assets/images/people-image.jpg'
import TestimonialCard from './TestimonialCard'
import './styles.css'

function TestimonialsSection() {
  const testimonials = [
    {
      rating: '***',
      name: 'Lalo Landa',
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quas voluptates ipsa mollitia recusandae, ad itaque expedita dignissimos nam laboriosam voluptate. Rem reprehenderit ad nesciunt porro omnis repellendus veritatis necessitatibus.',
      image: peopleImage,
    },
    {
      rating: '****',
      name: 'Pepe Lepoo',
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quas voluptates ipsa mollitia recusandae, ad itaque expedita dignissimos nam laboriosam voluptate. Rem reprehenderit ad nesciunt porro omnis repellendus veritatis necessitatibus.',
      image: peopleImage,
    },
    {
      rating: '***',
      name: 'Maximo Cozzetti',
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quas voluptates ipsa mollitia recusandae, ad itaque expedita dignissimos nam laboriosam voluptate. Rem reprehenderit ad nesciunt porro omnis repellendus veritatis necessitatibus.',
      image: peopleImage,
    },
  ]

  return (
    <section
      className="testimonials-section breakpoint"
      aria-labelledby="testimonials-title"
    >
      <h2 id="testimonials-title">Testimonials</h2>
      <div
        className="cards-wrapper"
        role="list"
        aria-label="Customer testimonials"
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            {...testimonial}
            aria-label={`Testimonial from ${testimonial.name}`}
          />
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection

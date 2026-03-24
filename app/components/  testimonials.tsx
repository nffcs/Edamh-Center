type Testimonial = {
  name: string;
  role: string;
  image: string;
  content: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Aisha Alharbi",
    role: "Lower Back Pain Recovery",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
    content:
      "The care I received was thoughtful, professional, and incredibly effective. After a few sessions, my pain reduced significantly and my movement felt much more natural.",
  },
  {
    name: "Omar Hassan",
    role: "Post-Surgery Rehabilitation",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
    content:
      "The treatment plan was clear, supportive, and tailored to my condition. The team helped me rebuild strength and confidence step by step throughout recovery.",
  },
  {
    name: "Lina Mohammed",
    role: "Sports Injury Treatment",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
    content:
      "What stood out most was how personalized everything felt. The therapists listened carefully, explained every stage, and helped me return to daily activity with much less discomfort.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container testimonials-grid">
        <div className="testimonials-left">
          <div className="pill secondary-pill">Patient Experiences</div>
          <h2>What our patients are saying about their recovery</h2>
          <p>
            Real experiences from patients who trusted our clinic for pain
            relief, rehabilitation, and improved mobility through personalized
            physiotherapy care.
          </p>
        </div>

        <div className="testimonials-right">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="testimonial-card">
              <div className="quote-mark">”</div>
              <div className="testimonial-body">
                <p className="testimonial-text">{testimonial.content}</p>
                <div className="testimonial-user">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div>
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

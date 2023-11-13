import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ContactPageContactForm`.
 */
export type ContactPageContactFormProps =
  SliceComponentProps<Content.ContactPageContactFormSlice>;

/**
 * Component for "ContactPageContactForm" Slices.
 */
const ContactPageContactForm = ({
  slice,
}: ContactPageContactFormProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="ContactPageContactForm"
    >
      <div className="container">
        <h2>{slice.primary.header_h2}</h2>
        <h3>{slice.primary.header_h3_black_text} <span className="gold">{slice.primary.header_h3_gold_text}</span></h3>

        <form className="flex">
          <div className="fname">
            <label htmlFor="fname">First Name*</label>
            <input placeholder="Enter Your First Name" type="text" id="fname" name="fname"/>
          </div>
          <div className="lname">
            <label htmlFor="lname">Last Name*</label>
            <input placeholder="Enter Your Last Name" type="text" id="lname" name="lname"/>
          </div>
            
          <label htmlFor="email">Email Address*</label>
          <input placeholder="Enter Your Email Address" type="text" id="email" name="email"/>

          <label htmlFor="phone">Phone Number</label>
          <input placeholder="Enter Your Phone Number" type="text" id="phone" name="phone"/>

          <label htmlFor="message">Message</label>
          <textarea placeholder="Enter Your Message" name="message" />
          <input className="blue-button" type="submit" value="Send"></input>
        </form>
      </div>
      
    </section>
  );
};

export default ContactPageContactForm;

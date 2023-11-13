import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `GetInTouch`.
 */
export type GetInTouchProps = SliceComponentProps<Content.GetInTouchSlice>;

/**
 * Component for "GetInTouch" Slices.
 */
const GetInTouch = ({ slice }: GetInTouchProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="GetInTouch"
    >
      <div className="container">
        <div className="padding">
          <h2>Get In <span className="gold">Touch</span></h2>
          <p>{slice.primary.paragraph}</p>
          <form className="flex">
            <input placeholder="Email Address" type="text" id="email-get-in-touch" name="email"/>
            <button className="submit-button" type="submit">
                <img alt="Submit" src="/images/footer-contact-form-arrow.svg"/>
            </button>
        </form>
        </div>        
      </div>
    </section>
  );
};

export default GetInTouch;

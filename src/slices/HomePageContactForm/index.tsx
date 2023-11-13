import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink} from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Link from "next/link";

/**
 * Props for `TwoImagesWithCtaOnRight`.
 */
export type HomePageContactFormProps =
  SliceComponentProps<Content.HomePageContactFormSlice>;

/**
 * Component for "TwoImagesWithCtaOnRight" Slices.
 */
const HomePageContactForm = ({
  slice,
}: HomePageContactFormProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="HomePageContactForm"
      style={{backgroundImage : 'url(' + slice.primary.background_image.url + ')'}}
    >

  
      <div className="container flex">
        <div className="left">
          <h1>{slice.primary.first_heading}</h1>
            <h2>{slice.primary.second_heading}</h2>
            <PrismicRichText field={slice.primary.paragraph} />
            <Link className="cta blue-button" href="/contact">Contact Us &nbsp;&nbsp;<img className="arrow" src="./images/blue-button-arrow.svg"/></Link>
            
        </div>
        <div className="right">
          <form className="flex">
            <input placeholder="First name" type="text" id="fname" name="fname"/>
            <input placeholder="Last name" type="text" id="lname" name="lname"/>
            <input placeholder="Email Address" type="text" id="email" name="email"/>
            <input placeholder="Phone Number" type="text" id="phone" name="phone"/>
            <textarea placeholder="Message" name="message" />
            <input className="blue-button" type="submit" value="Submit"></input>
          </form>
        </div>
      </div>
    
    </section>
  );
};

export default HomePageContactForm;
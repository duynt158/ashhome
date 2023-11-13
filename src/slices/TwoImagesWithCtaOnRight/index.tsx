import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink} from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Link from "next/link";

/**
 * Props for `TwoImagesWithCtaOnRight`.
 */
export type TwoImagesWithCtaOnRightProps =
  SliceComponentProps<Content.TwoImagesWithCtaOnRightSlice>;

/**
 * Component for "TwoImagesWithCtaOnRight" Slices.
 */
const TwoImagesWithCtaOnRight = ({
  slice,
}: TwoImagesWithCtaOnRightProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="container TwoImagesWithCtaOnRight flex"
    >
      <div className="left">
        <PrismicNextImage className="image1" field={slice.primary.image_1} />
        <PrismicNextImage className="image2" field={slice.primary.image_2} />
      </div>
      <div className="right">
        <PrismicRichText 
          field={slice.primary.first_header} 
          components={{
            heading1: ({children}) => <h1 className="first-header">{children}</h1>,
            heading2: ({children}) => <h2 className="first-header">{children}</h2>,
          }}
        />

        <h3 className="second-header">
          <span>{slice.primary.second_header_black_text}&nbsp;</span>
          <span className="gold">{slice.primary.second_header_gold_text}</span>
        </h3>

        <PrismicRichText field={slice.primary.paragraph} />    
        
        <Link className="cta blue-button" href="/contact">Contact Us
        &nbsp;&nbsp;<img className="arrow" src="./images/blue-button-arrow.svg"/></Link>
        
      </div>
    
    </section>
  );
};

export default TwoImagesWithCtaOnRight;

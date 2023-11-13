import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink} from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Link from "next/link";

/**
 * Props for `HomepageBeforeAndAfter`.
 */
export type HomepageBeforeAndAfterProps =
  SliceComponentProps<Content.HomepageBeforeAndAfterSlice>;

/**
 * Component for "HomepageBeforeAndAfter" Slices.
 */
const HomepageBeforeAndAfter = ({
  slice,
}: HomepageBeforeAndAfterProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="HomepageBeforeAndAfter"
    >
      <div className="container">
        <h2>{slice.primary.header}</h2>
        <h3>Before / <span className="gold">After</span></h3>
        <PrismicRichText field={slice.primary.description} />
        <Link href="/beforeandafter" className="blue-button">{slice.primary.cta_text} 
        &nbsp;&nbsp;<img className="arrow" src="./images/blue-button-arrow.svg"/></Link>
        <div className="images flex">
          <div className="left flex">
            <PrismicNextImage field={slice.primary.image_1} />
            <PrismicNextImage field={slice.primary.image_2} />
          </div>
          <div className="right flex">
            <PrismicNextImage field={slice.primary.image_3} />
            <PrismicNextImage field={slice.primary.image_4} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomepageBeforeAndAfter;

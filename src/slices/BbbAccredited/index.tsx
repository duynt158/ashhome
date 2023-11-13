import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BbbAccredited`.
 */
export type BbbAccreditedProps =
  SliceComponentProps<Content.BbbAccreditedSlice>;

/**
 * Component for "BbbAccredited" Slices.
 */
const BbbAccredited = ({ slice }: BbbAccreditedProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="BbbAccredited"
    >
      <div className="container">
        <div className="padding">
          <div className="top flex">
            <div className="bbb">
              <img alt="Better Business Bureau Accredited Business" src="/images/bbb-accredited-large.png"/>
            </div>
            <div className="divider">&nbsp;</div>
            <div className="angi">
              <img alt="Angi" src="/images/Angi-logo.png"></img>
            </div>
          </div>
          <p>{slice.primary.paragraph}</p>
          </div>
      </div>
    </section>
  );
};

export default BbbAccredited;

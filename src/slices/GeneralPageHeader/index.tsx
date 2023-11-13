import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink} from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `GeneralPageHeader`.
 */
export type GeneralPageHeaderProps =
  SliceComponentProps<Content.GeneralPageHeaderSlice>;

/**
 * Component for "GeneralPageHeader" Slices.
 */
const GeneralPageHeader = ({ slice }: GeneralPageHeaderProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="GeneralPageHeader"
      
    >
      <div className="background background-desktop" 
        style={{backgroundImage : 'url(' + slice.primary.background_desktop.url + ')'}}
        
        >
        <div className="background background-mobile" 
          style={{backgroundImage : 'url(' + slice.primary.background_mobile.url + ')'}}
          >
           


          <div className="container">
            <h1>{slice.primary.header_text}</h1>
            <p>Home &gt; <span className="gold-text">{slice.primary.breadcrumb_text}</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralPageHeader;

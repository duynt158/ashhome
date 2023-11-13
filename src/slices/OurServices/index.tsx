import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink} from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Link from "next/link";

/**
 * Props for `OurServices`.
 */
export type OurServicesProps = SliceComponentProps<Content.OurServicesSlice>;

/**
 * Component for "OurServices" Slices.
 */
const OurServices = ({ slice }: OurServicesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="OurServicesSlice"
    >
      <div className="flex container">
        <div className="description">
          <h2>{slice.primary.first_header}</h2>
          <h3>
            <span>{slice.primary.second_header_1st_black_text}</span>
            <span className="gold">{slice.primary.second_header_gold_text}</span>
            <span>{slice.primary.second_header_2nd_black_text}</span>
          </h3>
        </div>
        {slice.items.map((item, i)=>(
                      
            <div className={((i + 1) % 4 == 2 ? 'last' : '') + " service" + ' ' + ((i + 1) % 2 == 0 ? 'even' : '')} key={item.service_header}>
              <PrismicNextImage field={item.service_image} />
              <h4>{item.service_header}</h4>
              <p>{item.service_description}</p>
              <Link href="/services" className="read-more">Read More
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M14 16L18 12M18 12L14 8M18 12L6 12" stroke="#DCBD7C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </Link>
            </div>
        ))}
        </div>
    </section>
  );
};

export default OurServices;

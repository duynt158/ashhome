import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";

/**
 * Props for `Service`.
 */
export type ServiceProps = SliceComponentProps<Content.ServiceSlice>;

/**
 * Component for "Service" Slices.
 */
const Service = ({ slice }: ServiceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="Service"
    >
      <div className="container flex">
        <div className="left">
          <h2>{slice.primary.header_h2}</h2>
          <h3>
            <span className="gold">{slice.primary.header_h3}</span>
          </h3>
          <PrismicRichText field={slice.primary.paragraph} />
          <Link className="cta blue-button" href="/contact">Contact Us &nbsp;&nbsp;<img className="arrow" src="./images/blue-button-arrow.svg"/></Link>
          <h4>{slice.primary.header_h4}</h4>
          <ul className="flex">

          
          {slice.items.map((item, i)=>(
                          
            <li key={item.service}>
              <div className="icon">
                <img alt="" src="./images/Service-Icon.svg" />
              </div>
              <h5>{item.service}</h5>
              
              
            </li>
          ))}
          </ul>
        </div>
        <div className="right flex">
          <div className="left-images">
            <PrismicNextImage className="image1" field={slice.primary.image_1} />
            <PrismicNextImage className="absolute image3" field={slice.primary.image_3} />
          </div>
          <div className="right-images">
            <PrismicNextImage className="image2" field={slice.primary.image_2} />
            <PrismicNextImage className="image4" field={slice.primary.image_4} />
          </div>
          <img className="frame" alt="frame" src="/images/Service-Frame.svg"/>
        </div>
      </div>
    </section>
  );
};

export default Service;

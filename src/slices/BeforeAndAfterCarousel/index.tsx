"use client"

import React from 'react';
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import CarouselNavigator from '@/components/CarouselNavigator';

/**
 * Props for `BeforeAndAfterCarousel`.
 */
export type BeforeAndAfterCarouselProps =
  SliceComponentProps<Content.BeforeAndAfterCarouselSlice>;

/**
 * Component for "BeforeAndAfterCarousel" Slices.
 */
const BeforeAndAfterCarousel = ({
  slice,
}: BeforeAndAfterCarouselProps): JSX.Element => {
  const [length1, setLength1] = React.useState(0);
  const [length2, setLength2] = React.useState(0);

  React.useEffect(() => {
    let count1 = 0;
    let count2 = 0;

    for (let i = 0; i < slice.items.length; i++) {
      if (Object.keys(slice.items[i].before_carousel_images).length > 0) {
        count1++;
      }
      if (Object.keys(slice.items[i].after_carousel_images).length > 0) {
        count2++;
      }
    }

    setLength1(count1);
    setLength2(count2);
  }, [slice]);
  
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="BeforeAndAfterCarousel container flex"
    >
      <h2>
        <span className="gold">{slice.primary.header}</span>
      </h2>
      <PrismicRichText field={slice.primary.description} />
      
      <div className="left">
        <h3 className="carousel-header">
          <span>{slice.primary.before_black_text}&nbsp;</span>
          <span className="gold">{slice.primary.image_gold_text}</span>
        </h3>
        <PrismicNextImage field={slice.items[0].before_carousel_images} />
        <div className="carousel-navigator">
          <CarouselNavigator total={length1} current={1} />
        </div>
      </div>
      <div className="right">
        <h3 className="carousel-header">
          <span>{slice.primary.after_black_text}&nbsp;</span>
          <span className="gold">{slice.primary.image_gold_text}</span>
        </h3>
        <PrismicNextImage field={slice.items[0].after_carousel_images} />
        <div className="carousel-navigator">
          <CarouselNavigator total={length1} current={0} />
        </div>
      </div>
    </section>
  );
};

export default BeforeAndAfterCarousel;

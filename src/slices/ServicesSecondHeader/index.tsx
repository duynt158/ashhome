import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ServicesSecondHeader`.
 */
export type ServicesSecondHeaderProps =
  SliceComponentProps<Content.ServicesSecondHeaderSlice>;

/**
 * Component for "ServicesSecondHeader" Slices.
 */
const ServicesSecondHeader = ({
  slice,
}: ServicesSecondHeaderProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for services_second_header (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default ServicesSecondHeader;

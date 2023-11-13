import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { createClient } from '@/prismicio';

/**
 * Props for `ContactPhoneAndEmail`.
 */
export type ContactPhoneAndEmailProps =
  SliceComponentProps<Content.ContactPhoneAndEmailSlice>;



/**
 * Component for "ContactPhoneAndEmail" Slices.
 */
const ContactPhoneAndEmail = ({
  slice,
}: ContactPhoneAndEmailProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="ContactPhoneAndEmail"
    >
      <div className="container">
        <h2>{slice.primary.header_h2}</h2>
        <div className="flex">
          <a className="phone">
            <img alt="phone" src="/images/Contact-Icon-Phone.svg" />
            <h3>{slice.primary.phone_text}</h3>
            <p>1-937-555-5555</p>
          </a>
          <a className="email">
            <img alt="phone" src="/images/Contact-Icon-Email.svg" />
            <h3>{slice.primary.email_text}</h3>
            <p>test@test.com</p>
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default ContactPhoneAndEmail;

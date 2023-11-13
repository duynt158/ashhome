import { Content } from "@prismicio/client";
import { createClient } from '@/prismicio';
import { PrismicNextImage, PrismicNextLink} from "@prismicio/next";
import { PrismicRichText ,SliceComponentProps } from "@prismicio/react";
import Link from "next/link";


export default async function Header() {
    const client = createClient();
    const settings = await client.getSingle("settings");

    return <footer>
        <div className="top container flex">
            <div className="div-1">
                <a href="">
                    <img alt="Logo" src="./images/large-logo.svg" />
                    <span className="oswald">
                        A.S.H. Home Improvements
                    </span>
                </a>
                <PrismicRichText field={settings.data.paragraph_on_left} />
            </div>
            <div className="div-2">
                
                <h2>About</h2>
                <ul>
                {settings.data.footer_navigation.map((item, i)=>(
                    
                    <li key={item.footer_nav_label}>
                        <PrismicNextLink field={item.footer_nav_link}>
                            {item.footer_nav_label}
                        </PrismicNextLink>
                    </li>
                ))}
                </ul>
            </div>
            <div className="div-3">
                <h2>Contact us</h2>
                <ul>
                    <li>
                        <a href={'tel:' + settings.data.contact_phone_number}>{settings.data.contact_phone_number}</a>
                    </li>
                    <li>
                        <a className="contact-email" href={'mailto:' + settings.data.contact_email_address}>{settings.data.contact_email_address}</a>
                    </li>
                </ul>
            </div>
            <div className="div-4">
                <h2>{settings.data.get_in_touch_header}</h2>
                
                <PrismicRichText field={settings.data.get_in_touch_paragraph} />                    
                
                <form className="flex">
                    <input placeholder="Email Address" type="text" id="email-footer" name="email"/>
                    <button className="submit-button" type="submit">
                        <img alt="Submit" src="/images/footer-contact-form-arrow.svg"/>
                    </button>
                </form>
            </div>
        </div>
        <div className="bottom">
            <div className="container flex">
                <div className="left">
                    Copyright © {new Date().getFullYear()} A. S. H. Home Improvements. All Right Reserved
                </div>
                <div className="right">
                    Website built by <a href="http://www.newlandwebsites.com" target="_blank">Newland Websites</a>.
                </div>
            </div>
        </div>

    </footer>;
}
import { createClient } from '@/prismicio';
import { PrismicNextLink } from '@prismicio/next';
import Link from "next/link";


export default async function Header() {
    const client = createClient();
    const settings = await client.getSingle("settings");

    return <header>
        <div className="container flex-nowrap">
        <div className="logo oswald">
            
            <Link href="/">
                <img alt="Logo" src="./images/large-logo.svg" />
                <span>
                    A.S.H. Home Improvements
                </span>
            </Link>
        </div>
        <div className="hamburger">
            <img src="images/hamburger.svg" />                
        </div>
        <div className="nav-overlay"></div>
        <nav>

            <div className="mobile-message flex">
                <div>Navigation</div>
                <div className="x"><img className="open" src="images/hamburger-open.svg"/></div>
            </div>
            <ul>
                {settings.data.general_navigation.map((item, i)=>(
                    
                    <li className={settings.data.general_navigation.length == i + 1 ? 'last' : ''} key={item.label}>
                        <PrismicNextLink field={item.link}>
                            <span>{item.label}</span>
                            <img src="images/nav-a-line.svg"></img>
                        </PrismicNextLink>
                    </li>
                ))}

               
               
                <li className="contact-us">
                    <PrismicNextLink field={settings.data.cta_link}>{settings.data.cta_label}</PrismicNextLink>
                </li>
            </ul>
        </nav>
        
        </div>
    </header>
}
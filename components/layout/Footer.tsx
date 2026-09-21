import Link from "next/link";
import { Brand } from "@/components/layout/Brand";
import { NewsletterForm } from "@/components/layout/NewsletterForm";
import { footerExplore, legalLinks } from "@/lib/data/nav";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const { address, phone, email } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-top">
          <div>
            <Brand />
            <p>
              A wood-fired kitchen and wine bar on East Green Street, cooking over California live
              oak since {siteConfig.foundingYear}.
            </p>
          </div>
          <div>
            <h4>Visit</h4>
            <ul>
              <li>{address.street}</li>
              <li>
                {address.locality}, {address.region} {address.postalCode}
              </li>
              <li>
                <a href={phone.href}>{phone.display}</a>
              </li>
              <li>
                <a href={`mailto:${email}`}>{email}</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              {footerExplore.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
              <li>
                <a href={siteConfig.instagramUrl} rel="noopener noreferrer" target="_blank">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>The Ember Letter</h4>
            <ul>
              <li>Monthly notes on new dishes, winemaker dinners and the odd last-minute table.</li>
            </ul>
            <NewsletterForm />
          </div>
        </div>
        <div className="foot-bottom">
          <span>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </span>
          <span>
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}

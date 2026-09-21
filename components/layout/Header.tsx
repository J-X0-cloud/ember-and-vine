import { Brand } from "@/components/layout/Brand";
import { MobileNav } from "@/components/layout/MobileNav";
import { NavLinks } from "@/components/layout/NavLinks";
import { ButtonLink } from "@/components/ui/Button";
import { primaryNav, RESERVE_HREF } from "@/lib/data/nav";
import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap bar">
        <Brand />
        <nav className="nav" aria-label="Primary">
          <NavLinks links={primaryNav} />
        </nav>
        <div className="header-cta">
          <a className="header-phone" href={siteConfig.phone.href}>
            {siteConfig.phone.display}
          </a>
          <ButtonLink href={RESERVE_HREF}>Reserve</ButtonLink>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

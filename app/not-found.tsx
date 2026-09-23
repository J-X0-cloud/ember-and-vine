import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RESERVE_HREF } from "@/lib/data/nav";

export default function NotFound() {
  return (
    <section className="band on-dark not-found">
      <div className="wrap">
        <Eyebrow>Page not found</Eyebrow>
        <h2>
          That page has gone <em>up in smoke</em>
        </h2>
        <p>
          Our site moved recently, so an old link may have brought you here. The menus, hours and
          reservations are all a click away.
        </p>
        <div className="actions">
          <ButtonLink href={RESERVE_HREF}>Reserve a table</ButtonLink>
          <ButtonLink href="/menus" variant="ghost">
            See the menus
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

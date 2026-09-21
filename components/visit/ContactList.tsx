import { siteConfig } from "@/lib/site";

export function ContactList() {
  const { address, phone, email } = siteConfig;

  return (
    <ul className="contact-list">
      <li>
        <span>Address</span>
        <div>
          {address.street}
          <br />
          {address.locality}, {address.region} {address.postalCode}
        </div>
      </li>
      <li>
        <span>Phone</span>
        <a href={phone.href}>{phone.display}</a>
      </li>
      <li>
        <span>Email</span>
        <a href={`mailto:${email}`}>{email}</a>
      </li>
      <li>
        <span>Parking</span>
        <div>Valet on Green St. after 5 pm ($12), or the public structure on S. Lake Ave.</div>
      </li>
    </ul>
  );
}

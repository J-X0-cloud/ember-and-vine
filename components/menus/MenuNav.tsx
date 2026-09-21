import { menuNav } from "@/lib/data/menus";

export function MenuNav() {
  return (
    <nav className="menu-nav" aria-label="Menu sections">
      <ul>
        {menuNav.map((entry) => (
          <li key={entry.id}>
            <a href={`#${entry.id}`}>{entry.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

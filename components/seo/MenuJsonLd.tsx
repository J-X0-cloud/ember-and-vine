import { JsonLd } from "@/components/seo/JsonLd";
import { buildMenuSchema } from "@/lib/schema";

export function MenuJsonLd() {
  return <JsonLd data={buildMenuSchema()} />;
}

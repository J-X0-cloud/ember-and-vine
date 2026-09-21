import { JsonLd } from "@/components/seo/JsonLd";
import { buildRestaurantSchema } from "@/lib/schema";

export function RestaurantJsonLd() {
  return <JsonLd data={buildRestaurantSchema()} />;
}

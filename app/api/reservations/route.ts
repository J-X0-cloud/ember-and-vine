import { siteConfig } from "@/lib/site";
import { fail, ok, readJson, validationFailed } from "@/lib/http";
import { reservationService, SlotUnavailableError } from "@/lib/reservations";
import { reservationSchema } from "@/lib/validation/reservation";

export async function POST(request: Request) {
  const body = await readJson(request);
  if (body === null) return fail("Request body must be JSON.", 400);

  const parsed = reservationSchema.safeParse(body);
  if (!parsed.success) return validationFailed(parsed.error);

  try {
    const confirmation = await reservationService.request(parsed.data);
    return ok(confirmation, 201);
  } catch (error) {
    if (error instanceof SlotUnavailableError) {
      return fail("That time is fully booked online. Try one of these instead.", 409, {
        time: error.alternatives,
      });
    }
    console.error("reservation request failed", error);
    return fail(`We couldn’t send your request. Please call us on ${siteConfig.phone.display}.`, 502);
  }
}

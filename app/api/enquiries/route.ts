import { siteConfig } from "@/lib/site";
import { submitEnquiry } from "@/lib/enquiries";
import { fail, ok, readJson, validationFailed } from "@/lib/http";
import { enquirySchema } from "@/lib/validation/enquiry";

export async function POST(request: Request) {
  const body = await readJson(request);
  if (body === null) return fail("Request body must be JSON.", 400);

  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) return validationFailed(parsed.error);

  try {
    const receipt = await submitEnquiry(parsed.data);
    return ok(receipt, 201);
  } catch (error) {
    console.error("event enquiry failed", error);
    return fail(`We couldn’t send your enquiry. Please email ${siteConfig.email}.`, 502);
  }
}

import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    revalidatePath("/(Main)/blog", "page");
    revalidatePath("/(Main)/[title]", "page");
    revalidatePath("/sitemap.xml");
    return NextResponse.json({ message: "Revalidation done" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "internal Error" }, { status: 500 });
  }
}

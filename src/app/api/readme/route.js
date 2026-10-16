export async function GET(request) {
  const source = new URL(request.url).searchParams.get("url");
  let downloadUrl;

  try {
    downloadUrl = new URL(source);
  } catch {
    return new Response("Invalid README URL.", { status: 400 });
  }

  if (
    downloadUrl.protocol !== "https:" ||
    downloadUrl.hostname !== "firebasestorage.googleapis.com"
  ) {
    return new Response("Unsupported README URL.", { status: 400 });
  }

  try {
    const fileResponse = await fetch(downloadUrl, { cache: "no-store" });
    if (!fileResponse.ok) {
      return new Response("README file not found.", {
        status: fileResponse.status === 404 ? 404 : 502,
      });
    }

    return new Response(fileResponse.body, {
      headers: {
        "Content-Disposition": 'attachment; filename="README.md"',
        "Content-Type": "text/markdown; charset=utf-8",
        "Cache-Control": "private, no-store",
      },
    });
  } catch (error) {
    console.error("Failed to download README from Firebase Storage.", error);
    return new Response("Unable to download README.", { status: 502 });
  }
}
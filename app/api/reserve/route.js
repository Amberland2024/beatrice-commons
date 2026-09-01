// Receives reservation-list form submissions and creates a row in the
// "BC Website Leads" Notion database. Requires two environment variables
// (set in Vercel → Project → Settings → Environment Variables):
//   NOTION_TOKEN       — internal integration secret (starts with "ntn_")
//   NOTION_DATABASE_ID — the BC Website Leads database ID

export async function POST(req) {
  if (!process.env.NOTION_TOKEN || !process.env.NOTION_DATABASE_ID) {
    console.error("Missing NOTION_TOKEN or NOTION_DATABASE_ID");
    return Response.json({ error: "Server not configured" }, { status: 500 });
  }

  let data;
  try {
    data = await req.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  const name = String(data.name || "").trim().slice(0, 200);
  const email = String(data.email || "").trim().slice(0, 200);
  const phone = String(data.phone || "").trim().slice(0, 50);
  const message = String(data.message || "").trim().slice(0, 2000);

  if (!name || !email) {
    return Response.json({ error: "Name and email are required" }, { status: 400 });
  }

  const properties = {
    Name: { title: [{ text: { content: name } }] },
    Email: { email },
    Status: { select: { name: "New" } },
  };
  if (phone) properties.Phone = { phone_number: phone };
  if (message) properties.Message = { rich_text: [{ text: { content: message } }] };

  const res = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      parent: { database_id: process.env.NOTION_DATABASE_ID },
      properties,
    }),
  });

  if (!res.ok) {
    console.error("Notion API error", res.status, await res.text());
    return Response.json({ error: "Could not save submission" }, { status: 502 });
  }

  return Response.json({ ok: true });
}

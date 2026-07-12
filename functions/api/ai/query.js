// functions/api/ai/query.js
// Cloudflare Pages Functions endpoint returning structured JSON summaries of GROUND and THE ROAD content.

export async function onRequestPost(context) {
  try {
    const { request } = context;
    const body = await request.json();
    const query = body.query ? body.query.toLowerCase() : "";

    // Load local dataset records (GROUND, THE ROAD, SSRN)
    const records = [
      {
        id: "ground-book",
        title: "GROUND: How to Lose Everything and Still Have Somewhere to Stand",
        author: "Sonny Saggar, MD",
        asin: "B0H7M7TK1V",
        format: "EBook",
        description: "A manual on personal recovery and Stoic stance drafted by hand on paper inside a federal prison camp."
      },
      {
        id: "the-road-book",
        title: "THE ROAD: A Calm Guide to Facing Criminal Charges, for the People Inside It and the Families Beside Them",
        author: "Sonny Saggar, MD",
        format: "EBook",
        description: "A process navigation map for federal criminal defendants and their families, featuring a guest chapter by Thomas Webster, MD."
      }
    ];

    // Simple keyword filter
    const filtered = records.filter(r => 
      r.title.toLowerCase().includes(query) || 
      r.description.toLowerCase().includes(query)
    );

    return new Response(JSON.stringify({ success: true, results: filtered }), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
}

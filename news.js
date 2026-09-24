const { createClient } = supabase;

const db = createClient(
  "https://mfxslywkifmdnptkzsui.supabase.co",
  "sb_publishable_vLkGBUUlU3Haq6_w9pcOnQ_X5PXoMQe"
);

async function loadArticles() {
  const { data: articles, error } = await db
    .from("articles")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Supabase Fehler:", error);
    return;
  }

  console.log(articles);

  const container = document.querySelector(".articles");

  articles.forEach(article => {
    const element = document.createElement("article");

element.innerHTML = `
  <h2>${article.title}</h2>

  <div class="article-content">
    ${article.content ?? ""}
  </div>

  <p>${article.category ?? ""}</p>
`;

    container.append(element);
  });
}

loadArticles();

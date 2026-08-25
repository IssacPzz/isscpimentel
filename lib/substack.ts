const FEED_URL = "https://issacpimentel.substack.com/feed";

export interface SubstackPost {
  title: string;
  link: string;
  date: string;
  excerpt: string;
}

function decodeEntities(str: string): string {
  return str
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&");
}

function stripTags(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}

function extractTag(xml: string, tag: string): string {
  const match = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
  if (!match) return "";
  const raw = match[1].trim();
  const cdata = raw.match(/^<!\[CDATA\[([\s\S]*?)\]\]>$/);
  return decodeEntities(stripTags(cdata ? cdata[1] : raw)).trim();
}

function extractItems(xml: string): string[] {
  const items: string[] = [];
  const regex = /<item>([\s\S]*?)<\/item>/g;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(xml))) {
    items.push(match[1]);
  }
  return items;
}

export async function getSubstackPosts(): Promise<SubstackPost[]> {
  try {
    const res = await fetch(FEED_URL);
    if (!res.ok) return [];
    const xml = await res.text();

    return extractItems(xml)
      .map((item) => {
        const pubDate = extractTag(item, "pubDate");
        const parsed = pubDate ? new Date(pubDate) : null;
        return {
          title: extractTag(item, "title"),
          link: extractTag(item, "link"),
          date: parsed && !isNaN(parsed.getTime()) ? parsed.toISOString().slice(0, 10) : "",
          excerpt: extractTag(item, "description"),
        };
      })
      .filter((post) => post.title && post.link);
  } catch {
    return [];
  }
}

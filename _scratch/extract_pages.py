"""
Extract clean text from One Community Global HTML pages.
Strategy:
1. Find main content (article, main, .entry-content, .post-content)
2. Strip scripts, styles, nav, footer, comments
3. Convert to Markdown-like plain text with headings preserved
"""
import os
import re
import sys
from pathlib import Path
from bs4 import BeautifulSoup

PAGES_DIR = Path(r"C:\Users\Isaacko0\HSCSG_v15_OS\_scratch\pages")
OUT_DIR = Path(r"C:\Users\Isaacko0\HSCSG_v15_OS\_scratch\extracted_en")
OUT_DIR.mkdir(exist_ok=True)

# Tags to remove entirely
REMOVE_TAGS = ["script", "style", "nav", "header", "footer", "aside", "form",
               "iframe", "noscript", "button", "svg", "input", "select", "textarea",
               ".comment", ".comments-area", ".sidebar", ".menu", ".breadcrumb",
               ".pagination", ".share", ".social", ".navigation", "#tabs-",
               ".tabs-1", ".tab-content", ".related-posts", ".post-meta",
               ".post-navigation"]

def extract_main(html_text):
    soup = BeautifulSoup(html_text, "lxml")

    # Remove unwanted tags/classes
    for sel in REMOVE_TAGS:
        try:
            for el in soup.select(sel):
                el.decompose()
        except Exception:
            pass

    # Find main content
    main = (
        soup.find("article")
        or soup.find("main")
        or soup.find(class_="entry-content")
        or soup.find(class_="post-content")
        or soup.find(id="content")
        or soup.find(id="main-content")
        or soup.find(class_="content-area")
        or soup.body
    )

    if not main:
        return ""

    # Get title
    title = ""
    h1 = soup.find("h1")
    if h1:
        title = h1.get_text(strip=True)

    # Walk the content
    lines = []
    if title:
        lines.append(f"# {title}\n")

    for el in main.descendants:
        if getattr(el, "name", None) is None:
            continue
        if el.name in ("h1", "h2", "h3", "h4", "h5", "h6"):
            level = int(el.name[1])
            text = el.get_text(" ", strip=True)
            if text:
                lines.append(f"\n{'#' * level} {text}\n")
        elif el.name == "p":
            text = el.get_text(" ", strip=True)
            if text and len(text) > 10:
                lines.append(text + "\n")
        elif el.name == "li":
            text = el.get_text(" ", strip=True)
            if text and len(text) > 3:
                lines.append(f"- {text}\n")
        elif el.name in ("strong", "b"):
            text = el.get_text(" ", strip=True)
            if text:
                lines.append(f"**{text}**\n")
        elif el.name in ("em", "i"):
            text = el.get_text(" ", strip=True)
            if text:
                lines.append(f"*{text}*\n")
        elif el.name == "a":
            text = el.get_text(" ", strip=True)
            href = el.get("href", "")
            if text and href and href.startswith("http") and "onecommunity" not in href:
                lines.append(f"[{text}]({href})\n")
        elif el.name == "img":
            alt = el.get("alt", "")
            src = el.get("src", "")
            if alt and src:
                lines.append(f"![{alt}]({src})\n")
        elif el.name == "blockquote":
            text = el.get_text(" ", strip=True)
            if text:
                lines.append(f"> {text}\n")
        elif el.name == "br":
            lines.append("\n")
        elif el.name == "hr":
            lines.append("\n---\n")

    # Collapse multiple blank lines
    text = "\n".join(lines)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def main():
    if len(sys.argv) > 1:
        files = [Path(sys.argv[1])]
    else:
        files = sorted(PAGES_DIR.glob("*.html"))

    for html_file in files:
        out_file = OUT_DIR / (html_file.stem + ".md")
        try:
            with open(html_file, "r", encoding="utf-8", errors="ignore") as f:
                html_text = f.read()
            content = extract_main(html_text)
            with open(out_file, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"OK  {html_file.name} → {out_file.name} ({len(content)} chars)")
        except Exception as e:
            print(f"ERR {html_file.name}: {e}", file=sys.stderr)


if __name__ == "__main__":
    main()

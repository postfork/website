# postfork.org

Static website for Postfork: Bitcoin Core with BIP-119 (`OP_CHECKTEMPLATEVERIFY`) and BIP-348 (`OP_CHECKSIGFROMSTACK`) active from genesis, and pBTC (Postfork), a BitVM2-backed bitcoin peg whose design is based on [zkBTC](https://github.com/zk-BTC/zkbtc).

**Status:** Postfork is a pre-launch design specification. There is no code and nothing described on this site is live. The site must never say otherwise. "Can I use it today?" — **No.**

**Domain:** `postfork.org` is the **planned** primary domain and `postfork.io` the **planned** redirect domain. Neither is registered or live yet. Canonical URLs, Open Graph URLs and the sitemap already use `https://postfork.org` so that nothing has to change once the domain is attached. The X handle `@postfork` is likewise planned.

**Source of truth:** the Postfork specification (edition `spec-v1.0`, draft) is the single normative document; its publication in a public repository under [github.com/postfork](https://github.com/postfork) is planned. This site and the whitepaper are **informative only**: where they simplify, the specification governs. The site never says more than the specification and is updated in the same change as the specification text it reflects.

When is pBTC safe (specification §9.3, verbatim):

> *pBTC is safe for you if you (or an operator you trust) were admitted to the operator set of the first mint-eligible epoch, as verified on your own node, and refuse malicious graphs, at least one honest challenger watches both chains and acts in time, the cryptography and the Postfork validity proof are sound, Bitcoin's hashrate majority is honest and no Bitcoin reorganization deeper than the mint depth occurs, Postfork block producers include honest Bitcoin headers, and the block-production class in force is one that §11.2 permits for pBTC and its canonicity assumption holds (under BP-O1V: an honest merge-mining majority) — and even then, the worst case is a freeze, which is not theft but may never be recoverable.*

Prominent claim (specification §11.3, verbatim):

> *pBTC is effectively trustless only in the self-operator sense of §1.1.1, only for the block-production class in force and while its assumptions hold, including that block producers include honest Bitcoin headers, and only after all gates clear. Under the stated assumptions, including that no Bitcoin reorganization deeper than the mint depth occurs and no Attack H, F or V succeeds, the worst case is freeze, not theft, and a freeze may be permanent.*

## Structure

| Path | Role |
| --- | --- |
| `/` (`index.html`) | English homepage: what Postfork is, why real money, CTV + CSFS, the pBTC peg, use cases, principles, open questions (block production), status and launch gates, sources |
| `/de/` (`de/index.html`) | German homepage (same structure) |
| `/white-paper/` | English whitepaper PDF via a 200 proxy in `_redirects` (the address bar keeps `/white-paper/`); `white-paper/index.html` is a minimal PDF fallback for hosts that ignore `_redirects` |
| `/de/white-paper/` | German whitepaper PDF, same pattern |
| `/faq/`, `/de/faq/` | FAQ in English and German |
| `404.html` | Not-found page (Cloudflare Pages serves it automatically) |
| `files/` | Whitepaper PDFs, copies of the current papers |
| `styles.css` | The only stylesheet; design tokens as CSS custom properties at the top, with contrast ratios |
| `site.js` | The only script: copy-to-clipboard for FAQ anchors (progressive enhancement) |
| `favicon.svg`, `og.png` | Icon and 1200×630 share image |
| `brand/` | Sources: `postfork-icon.svg` (mark), `og.svg` (source of `og.png`) |
| `_redirects` | 200 proxies for paper URLs and 301 aliases (`/whitepaper`, `/FAQ`, `/de/whitepaper`, …) |
| `_headers` | Security headers (CSP without `unsafe-inline`; detached for the PDF paths) |
| `robots.txt`, `sitemap.xml` | Crawl rules and sitemap with `hreflang` alternates incl. `x-default` |
| `.nojekyll` | Disables Jekyll processing on hosts that would apply it |

Conventions: plain HTML and CSS, no build step, no package manager, no framework, no external fonts, CDNs, iframes, analytics or trackers. No inline `style` attributes and no inline scripts (JSON-LD data blocks only), so the CSP stays strict. Dark-first design with a light theme via `prefers-color-scheme`; no animation; smooth scrolling only under `prefers-reduced-motion: no-preference`. Every page has a canonical link, `hreflang` alternates and Open Graph/Twitter tags. English and German pages are kept in parity; a change to one language is a change to both.

The mark shows a chain that continues after a fork: grey blocks with a dashed path that is not yet taken, and an orange branch that continues. Postfork is nevertheless **not** a fork of Bitcoin's chain history (own genesis, empty UTXO set); the site says so wherever it matters.

## Local preview

Any static file server from the repository root works, for example:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000/>. A plain local server does not apply `_redirects` or `_headers`, so `/white-paper/` shows the HTML fallback that embeds the PDF; on Cloudflare Pages the same URL serves the PDF directly.

## Deploy (Cloudflare Pages)

The repository root is the site; there is no build command and the output directory is `/`.

1. Create a Cloudflare Pages project from this repository (Git integration or Direct Upload, for example `wrangler pages deploy . --project-name=<project>`). Build command: none. Output directory: `/`.
2. Once `postfork.org` is registered, attach it as the custom domain of the project.
3. Host-level redirects cannot live in `_redirects` (Cloudflare Pages supports only relative paths there; see <https://developers.cloudflare.com/pages/configuration/redirects/>). Redirect `www.postfork.org` and `postfork.io` (planned) to `https://postfork.org` with a 301 that preserves path and query, using a Cloudflare redirect rule on the zone or a Pages Function.
4. Credentials (API tokens, account IDs) never go into this repository.

This repository has no CI workflow. Before merging, check every page with a local static server, confirm the `_redirects` 200 lines for the paper URLs, and confirm that `files/*.pdf` match the current papers. When the whitepaper changes, replace `files/*.pdf` in the same pull request.

## License

MIT — see [LICENSE](./LICENSE).

# Contributing

This repository is the static website for Postfork. Changes land through pull requests into `main`. Do not push directly to `main`.

## Rules

- **Signed commits.** Every commit must be verifiably signed (SSH or GPG; GitHub must show `verified`). Do not override the signing identity per repository or per commit.
- **Public-repo text is English** (commit messages, README, this file). Page content exists in English and German; German text uses Swiss spelling (`ss`, never `ß`).
- **The specification governs.** The site is informative and derives from the Postfork specification. It never says more than the specification and never lags behind it. If a page disagrees with the specification, fix the page. If the specification is ambiguous, fix the specification first.
- **Status honesty.** Never describe Postfork or pBTC (Postfork) as live, launched, on mainnet or usable. "Can I use it today?" — No. Domains and handles that are not registered and live are called "planned".
- **Defined terms.** "Effectively trustless" is used only with its definition (you are an operator; you run your own nodes; you trust no other operator with your bitcoin) and its conditions in the same breath. Never use bare "trustless" in titles, headings or Open Graph text. Freeze is not theft; "not theft" is not "recoverable": always say both halves together, and state the event assumptions with every "freeze, not theft" or "cannot steal" claim (no Bitcoin reorganization deeper than the mint depth, no successful Attack H, F or V). A "no redirect" or "front-running gains nothing" claim is always conditional on a mint authorization that commits to all outputs.
- **Naming.** Write `Postfork` exactly. Write "pBTC (Postfork)" at first mention on every page. pBTC (Postfork) has no relation to the pTokens/pNetwork token with the same ticker.
- **Open decisions stay open.** Block production is an open decision. No page may describe it as decided.
- **Sources.** Every external factual claim carries a source URL.
- **Hygiene.** No names of private persons (cite BIPs and papers by number, title and URL), no secrets, no internal infrastructure names.
- **Parity.** A change to an English page is made to the German page in the same pull request, and vice versa.
- **Papers.** When the whitepaper changes, replace `files/*.pdf` in the same pull request. `/white-paper/` and `/de/white-paper/` stay the canonical paper URLs (200 proxy in `_redirects`).
- **No build, no dependencies.** Plain HTML, one stylesheet, one small script. No frameworks, package managers, external fonts, CDNs, iframes, analytics or trackers. No inline `style` attributes or inline scripts (the CSP forbids them).
- **Accessibility.** Keep semantic structure, visible focus, sufficient contrast (ratios documented in `styles.css`), text alternatives for diagrams, and `prefers-reduced-motion` support.

## Before opening a pull request

Check every changed page with any local static file server (see `README.md`), in light and dark mode and at a narrow width. Confirm internal links, `hreflang` pairs and the `_redirects` lines.

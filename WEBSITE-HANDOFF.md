# Cloud Practitioner website implementation handoff

Reviewed against the local repositories and LiveSync configuration on **2026-10-10**.

## Objective

Turn the existing CLF-C02 Markdown notes into a static reading website hosted on GitHub Pages. Use the completed AIF-C01 application as the implementation reference, while adapting content discovery and navigation to this repository. Keep the original notes, attachment locations, and Obsidian editing workflow unchanged.

**Agree the visual theme with the user for this project.** AIF-C01's colors, illustrations, fonts, and space theme are examples, not requirements for Cloud Practitioner.

The ongoing publishing workflow must be: **edit or add Markdown → commit → push to the publishing branch → automated checks, build, search indexing, and GitHub Pages deployment**. New notes must not require manual route registration or a fixed note-count update.

## 1. Exact locations and current state

### AIF-C01 reference

Repository root:

```text
C:\Users\jun_w\Desktop\Obsidian Vault\俊伟的保险库\02-领域知识\职业\AWS Certified AI Practitioner (AIF-C01)
```

Website application:

```text
C:\Users\jun_w\Desktop\Obsidian Vault\俊伟的保险库\02-领域知识\职业\AWS Certified AI Practitioner (AIF-C01)\site
```

GitHub Pages workflow:

```text
C:\Users\jun_w\Desktop\Obsidian Vault\俊伟的保险库\02-领域知识\职业\AWS Certified AI Practitioner (AIF-C01)\.github\workflows\deploy.yml
```

- Repository: [AdmiJW/AIF-C01-AWS-Certified-AI-Practitioner-Notes](https://github.com/AdmiJW/AIF-C01-AWS-Certified-AI-Practitioner-Notes).
- Published reference: [AIF-C01 Study Notes](https://admijw.github.io/AIF-C01-AWS-Certified-AI-Practitioner-Notes/).
- Publishing branch: `main`.

### CLF-C02 target

Repository root:

```text
C:\Users\jun_w\Desktop\Obsidian Vault\俊伟的保险库\02-领域知识\职业\AWS Certified Cloud Practitioner (CLF-C02)
```

- Repository: [AdmiJW/CLF-C02-AWS-Certified-Cloud-Practitioner-Notes](https://github.com/AdmiJW/CLF-C02-AWS-Certified-Cloud-Practitioner-Notes).
- Expected website: `https://admijw.github.io/CLF-C02-AWS-Certified-Cloud-Practitioner-Notes/`.
- **Local branch and GitHub default branch are currently `master`.** A copied AIF workflow targeting only `main` will not publish normal pushes here. Use `master` unless the user explicitly chooses a branch migration.
- Currently seven numbered Markdown files, `00` through `06`, directly in the repository root. Discover these dynamically; seven is an initial inventory, not a permanent validation constant.
- Two images: `Attachments/Architecture.png` and `Attachments/AWS-Architecture.png`. Both are referenced from `01 - AWS Cloud Overview.md` using relative Markdown image URLs.
- Notes contain multiple top-level headings. The website must normalize them during rendering.
- `06 - Foundation - Amazon EC2.md` had an existing uncommitted modification when this handoff was created. Preserve the user's changes and re-check Git status before starting.

### Obsidian vault and settings

Vault root:

```text
C:\Users\jun_w\Desktop\Obsidian Vault\俊伟的保险库
```

LiveSync settings:

```text
C:\Users\jun_w\Desktop\Obsidian Vault\俊伟的保险库\.obsidian\plugins\obsidian-livesync\data.json
```

The inspected LiveSync version is **0.25.56**. Settings can contain credentials: inspect only necessary fields, do not print the complete configuration, and never copy it into Git.

## 2. What was implemented for AIF-C01

The AIF website was implemented using this sequence:

1. Kept its 24 existing Markdown notes in place and created an isolated `site/` application. The Markdown remains the source of truth, without required frontmatter or rewritten note text.
2. Used Astro's content loader with `base: '..'` to read notes from the parent repository. Its glob patterns select the introduction, numbered topic folders, and question collections.
3. Built a shared catalogue that derives titles, course order, source links, routes, homepage counts, navigation, and previous/next links. Route collisions fail the build.
4. Generated static article pages with `getStaticPaths()` and `render()` from `astro:content`. Custom layouts provide article navigation, page outlines, heading links, responsive menus, and print styles.
5. Shifted headings in the question collections during Markdown processing so the layout supplies the single article-title H1. This transformation does not edit the source Markdown.
6. Added Pagefind search over article content, excluding repeated navigation. Search opens from the header or Ctrl/Cmd+K, includes excerpts and section links, and provides keyboard, loading, error, and empty-result behavior.
7. Configured Astro's GitHub Pages origin and repository base. Applied that base to ordinary links, assets, canonical URLs, and Pagefind bundle/result URLs. Added sitemap, favicon, robots configuration, and a 404 page.
8. Committed application source and the npm lockfile; ignored dependencies and generated output.
9. Added a GitHub Actions workflow that installs locked dependencies, checks Astro/TypeScript, builds HTML, indexes search, validates output, and uploads/deploys the Pages artifact. Pull requests validate without deploying; successful pushes to `main` and manual runs publish.
10. Selected GitHub Actions as the Pages publishing source and verified the deployed repository-subpath URL.

### Reference stack

| Component | Installed reference version or choice |
| --- | --- |
| Static framework | Astro `7.3.5`, static output |
| Language | TypeScript `5.9.3`, Astro strict configuration |
| UI | Custom `.astro` layouts/components, ordinary CSS, small browser scripts |
| Search | Pagefind `1.5.2` |
| Sitemap | `@astrojs/sitemap` `3.7.4` |
| Markdown processing | `@astrojs/markdown-remark` `7.3.1`, with a custom remark plugin |
| Checking | `@astrojs/check` `0.9.6` |
| Runtime/tooling | Node.js 22, minimum `22.12`; npm and `package-lock.json` |
| Hosting | GitHub Pages through GitHub Actions |

There is no backend or React application. Font packages in the reference are part of its design and can change with the new theme. Treat these versions as the verified reference snapshot, not a claim about the latest releases. Use Context7 for current framework, search, and deployment documentation before changing versions or APIs.

### Files to inspect before adapting

All paths in this table are relative to the **absolute AIF-C01 repository root above**.

| Reference path | Purpose and target adaptation |
| --- | --- |
| `site/package.json`, `site/package-lock.json`, `site/tsconfig.json` | Scripts, locked versions, and strict TypeScript configuration; change package identity. |
| `site/astro.config.mjs` | Static output, sitemap, Markdown processor, origin, and repository base. |
| `site/src/content.config.ts` | AIF-specific grouped-file glob loader; replace for CLF root-level numbered notes. |
| `site/src/lib/catalog.ts` | Ordering, grouping, titles, routes, source URLs, and `withBase()`; replace AIF-specific domain/question assumptions. |
| `site/src/lib/markdown.mjs` | Currently adjusts only `/99 - Questions/`; extend normalization for CLF notes with H1 sections. |
| `site/src/pages/notes/[...slug].astro` | Static paths, article rendering, and previous/next data. |
| `site/src/layouts/BaseLayout.astro`, `site/src/layouts/ArticleLayout.astro` | Metadata, reader structure, and article search-index boundaries. |
| `site/src/components/SearchDialog.astro`, `site/src/components/SidebarNav.astro`, `site/src/components/PageOutline.astro` | Search, navigation, and outlines; preserve accessibility while adapting content. |
| `site/src/pages/index.astro`, `site/src/components/Brand.astro`, `site/src/styles/global.css` | Homepage, identity, and design; confirm the new theme with the user. |
| `site/public/robots.txt`, `site/public/favicon.svg`, `site/src/pages/404.astro` | Public metadata/assets and error page; update AIF identity and URLs. |
| `site/scripts/validate-build.mjs` | Currently hard-codes `expectedNotes = 24`, AIF title, and base path; replace these assumptions. |
| `.github/workflows/deploy.yml`, `.gitignore`, `README.md` | Publishing workflow, generated-file exclusions, and maintenance instructions. |

## 3. Mandatory LiveSync preflight

### Shared rule already saved on this PC

```regex
^02-领域知识/职业/(?:[^/]+/)*site(?:/|$)
```

This matches a directory named `site` at any depth beneath `02-领域知识/职业`, including directly beneath `职业`. It skips matching normal-file changes in both directions. It does not exclude ordinary course notes, attachments, similarly named `website` folders, or `site` folders elsewhere in the vault. See the [LiveSync selector documentation](https://github.com/vrtmrz/obsidian-livesync/blob/main/docs/settings.md).

The setting belongs to this vault on this device. It is not an Obsidian-wide setting for every vault and must be verified independently on future devices before their first sync.

### How the exclusion was applied and verified

1. Backed up the current LiveSync configuration outside the vault.
2. Used the running plugin's settings-tab save mechanism through the enabled Obsidian CLI, so the plugin received the change. Existing exclusion patterns were preserved.
3. Appended the shared expression to **Settings → Self-hosted LiveSync → Selector → Normal Files → Non-Synchronising files**.
4. Appended the same expression to **Selector → Hidden Files → Ignore patterns**, retaining existing `node_modules`, `.git`, and LiveSync exclusions. Hidden-file syncing was not enabled as part of this change.
5. Checked the running plugin's normal and hidden selectors against direct, course-level, and deeply nested `site` paths, plus eligible notes and images.
6. Reloaded the vault and confirmed both saved settings persisted, live syncing remained enabled, and file watching remained active.
7. Created a unique temporary folder in CLF-C02 containing a normal control note and a file under `nested/site/`. The control note appeared in both databases; the excluded file appeared in neither.
8. Removed the temporary files and folder. Verified the control-note deletion propagated and the excluded file remained absent from both databases.

The UI locations in steps 3–4 are the supported way to configure another device. Do not edit `data.json` behind a running plugin. In the installed version, the normal regex list uses `|[]|` as its separator and the hidden ignore list uses commas; preserve existing entries. Its regex parser strips literal spaces, so use `\x20` in any future expression that must match spaces. The shared rule above contains no literal spaces.

### What the new agent must verify before creating `site/` or installing dependencies

1. Open this vault in Obsidian and check that the shared rule is present in both selector lists. It is already present on this PC; do not add duplicates or remove the existing AIF-specific rule.
2. If the rule is missing, save it through LiveSync settings before generating application files. Reload and recheck the running plugin.
3. Verify these boundaries:

   | Vault-relative path | Expected |
   | --- | --- |
   | `02-领域知识/职业/site/package.json` | Excluded |
   | `02-领域知识/职业/AWS Certified Cloud Practitioner (CLF-C02)/site/node_modules/astro/package.json` | Excluded |
   | `02-领域知识/职业/AWS/Cloud/deeper/site/.astro/content.json` | Excluded |
   | `02-领域知识/职业/AWS Certified Cloud Practitioner (CLF-C02)/06 - Foundation - Amazon EC2.md` | Eligible |
   | `02-领域知识/职业/AWS Certified Cloud Practitioner (CLF-C02)/Attachments/Architecture.png` | Eligible |
   | `02-领域知识/职业/AWS/website/readme.md` | Eligible |
   | `elsewhere/site/note.md` | Eligible |

4. If configuration or device state has changed since this verification, repeat the small control/excluded-file test before installing packages. Inspect both databases using the configured plugin connection without exposing credentials, then remove the probes and confirm the control deletion syncs.

For a read-only inspection of the running **0.25.56** plugin, the enabled CLI is located at `C:\Users\jun_w\AppData\Local\Programs\Obsidian\Obsidian.com`. Leave Obsidian open and run:

```powershell
$obsidianCli = 'C:\Users\jun_w\AppData\Local\Programs\Obsidian\Obsidian.com'
$inspection = @'
(async () => {
  const core = app.plugins.plugins['obsidian-livesync'].core;
  const hidden = core.addOns.find(addon => addon.constructor.name === 'HiddenFileSync');
  const paths = [
    '02-领域知识/职业/AWS Certified Cloud Practitioner (CLF-C02)/site/package.json',
    '02-领域知识/职业/AWS/Cloud/deeper/site/.astro/content.json',
    '02-领域知识/职业/AWS Certified Cloud Practitioner (CLF-C02)/06 - Foundation - Amazon EC2.md'
  ];
  const checks = await Promise.all(paths.map(async path => ({
    path,
    normalAllowed: await core.localDatabase.isTargetFile(path),
    hiddenPatternAllowed: hidden.isTargetFileInPatterns(path)
  })));
  return JSON.stringify({
    normalRule: core.settings.syncIgnoreRegEx,
    hiddenRule: core.settings.syncInternalFilesIgnorePatterns,
    liveSync: core.settings.liveSync,
    fileWatchingSuspended: core.settings.suspendFileWatching,
    checks
  });
})()
'@
& $obsidianCli 'vault=俊伟的保险库' eval ('code=' + $inspection)
```

Both selector checks must return `false` for the first two paths; the normal-note check must return `true`. These are internal plugin inspection APIs verified for the installed version; re-inspect their availability if the plugin has changed. This script does not modify settings or database content.

## 4. Step-by-step CLF-C02 implementation

### Step 1 — Inspect and agree the project design

Read this repository's applicable agent instructions and inspect Git status, notes, headings, images, branch, and remote. Keep the user's existing changes intact. Confirm the visual theme with the user; do not assume AIF's theme or fonts.

Keep the functional reader features: one page per file, responsive navigation, page outline, breadcrumbs, heading permalinks, previous/next links, original-source links, search, light/dark support, readable tables, print styles, and ordinary reading/navigation without JavaScript. Respect keyboard focus, reduced motion, and zoom. Do not add accounts, analytics, comments, quizzes, or saved progress unless requested; existing question answers remain readable.

### Step 2 — Complete the LiveSync preflight

Complete section 3 before application scaffolding, copying source, or running npm. `.gitignore` protects Git; it does not replace the LiveSync selector rule.

### Step 3 — Reuse only the application source and workflow

Use the following PowerShell commands as a starting point **only if the target has no existing `site/` application or deployment workflow**. They copy application source and the lockfile without bringing over dependencies or generated output. They do not copy the AIF notes or its `.git` directory.

```powershell
$aifRoot = 'C:\Users\jun_w\Desktop\Obsidian Vault\俊伟的保险库\02-领域知识\职业\AWS Certified AI Practitioner (AIF-C01)'
$clfRoot = 'C:\Users\jun_w\Desktop\Obsidian Vault\俊伟的保险库\02-领域知识\职业\AWS Certified Cloud Practitioner (CLF-C02)'
$targetSite = Join-Path $clfRoot 'site'
$targetWorkflow = Join-Path $clfRoot '.github\workflows\deploy.yml'

if ((Test-Path -LiteralPath $targetSite) -or (Test-Path -LiteralPath $targetWorkflow)) {
    throw 'Existing application or workflow found; review and adapt it instead of overwriting.'
}

robocopy (Join-Path $aifRoot 'site') $targetSite /E /XD node_modules dist .astro .sites-runtime
if ($LASTEXITCODE -ge 8) {
    throw 'Application source copy failed.'
}

New-Item -ItemType Directory -Path (Split-Path $targetWorkflow -Parent) -Force | Out-Null
Copy-Item -LiteralPath (Join-Path $aifRoot '.github\workflows\deploy.yml') -Destination $targetWorkflow
```

Merge these entries into the target `.gitignore`, preserving anything already there:

```gitignore
site/node_modules/
site/dist/
site/.astro/
site/.sites-runtime/
```

Commit application source, configuration, the lockfile, and workflow. Do not Git-ignore the entire `site/` directory. Change the npm package name to `clf-c02-study-notes`.

### Step 4 — Adapt content discovery, ordering, and routes

- Replace the AIF-specific loader patterns. CLF's initial root-level pattern can be `[0-9][0-9] - *.md` with `base: '..'` and a `generateId` that retains the relative source filename without `.md`. Extend conventions explicitly if the course later introduces numbered subfolders; do not enumerate current chapters by name.
- Exclude `site/`, dependencies, repository documentation, and this handoff from the note collection. Do not use an unrestricted repository-wide `**/*.md` pattern.
- Order root notes by their numeric prefix, `00`, `01`, `02`, and so on, not alphabetical title order or AIF's letter-prefix sorter. Remove only the filename ordering prefix from displayed titles.
- Use one shared catalogue for generated pages, chapter navigation, previous/next links, overview selection, homepage counts, and expected output. Treat `00 - Course Introduction.md` as the introduction. For the flat structure, use `/notes/course-introduction/`, `/notes/aws-cloud-overview/`, and equivalent lowercase hyphenated routes for the other filenames. Fail the build on slug collisions.
- Present the root notes as an ordered course chapter list. Remove the hard-coded five AI domains and compulsory `99 - Questions` group. Any later practice collection is optional; the homepage must work when none exists.
- Set source links to the CLF repository and publishing branch, encoding each source path segment. Credit GitHub author `AdmiJW`.

Astro's loader supports filesystem content outside the application directory; consult the [content loader reference](https://docs.astro.build/en/reference/content-loader-reference/) through Context7 when implementing against the chosen version.

### Step 5 — Normalize headings and publish attachments

- Extend the Markdown transformation beyond AIF's question-folder check. When a CLF source contains H1 sections, shift its heading hierarchy down one level, capped at H6, during rendering. The article layout supplies the single page-title H1. Generate unique heading anchors, including repeated headings, and use the rendered heading data for outlines.
- Preserve all paragraphs, lists, tables, Unicode, questions, and answers. Do not edit Markdown merely to accommodate the website.
- Resolve relative image references against each original Markdown file. Publish the referenced attachment files as part of every build and generate URLs beneath the configured repository base, preserving filename case and encoding spaces/Unicode. This must also work for newly added images; a one-time manual image copy is insufficient.
- Verify both existing diagrams render from `01 - AWS Cloud Overview.md`. Do not relocate the original `Attachments/` directory.

### Step 6 — Configure identity, base path, and search

Set these values in the CLF application:

```text
Title: CLF-C02 Study Notes
Repository: https://github.com/AdmiJW/CLF-C02-AWS-Certified-Cloud-Practitioner-Notes
Source branch: master
Astro site: https://admijw.github.io
Astro base: /CLF-C02-AWS-Certified-Cloud-Practitioner-Notes
Output: static
```

Update the base layout, brand, homepage copy, 404 text, robots/sitemap URL, validation identity, and source URLs. Search the copied source for AIF-specific names and URLs and replace product identity; keep any intentional historical reference only in documentation.

Retain a single base-aware link helper, as in AIF's `withBase()`. Apply the base to navigation, assets, canonical URLs, and search. In `SearchDialog.astro`, set the Pagefind bundle path to `<base>/pagefind/` and result `baseUrl` to `<base>/`. Avoid doubling the base prefix. Keep article indexing boundaries and exclude repeated navigation. See [Pagefind's UI configuration](https://pagefind.app/docs/ui/) and [search configuration](https://pagefind.app/docs/search-config).

Keep the build order **static HTML and attachments → Pagefind index → output validation**. The reference indexing command is `pagefind --site dist`. Pagefind `1.5.2` in this application does not use a `--base-url` CLI flag; the browser handles the result base. Search is generated during production builds, not by the reference development server alone. See [running Pagefind](https://pagefind.app/docs/running-pagefind/).

### Step 7 — Replace fixed validation assumptions

The AIF validator currently requires exactly 24 note pages. **Do not change this to exactly seven**: that would prevent the next new chapter from deploying.

Derive expected source paths and routes from the current convention-based content catalogue/discovery. Verify that every eligible note has exactly one generated article and no duplicate routes. Parameterize the site identity and base rather than retaining AIF constants. Check internal links and image targets, required search assets, sitemap, and canonical URLs. Make validation failures stop deployment.

### Step 8 — Adapt GitHub Actions for automatic publishing

The copied AIF workflow is the concrete starting point. Preserve its two-job build/deploy structure and change both branch triggers to the target publishing branch:

```yaml
on:
  push:
    branches: [master]
  pull_request:
    branches: [master]
  workflow_dispatch:
```

**Do not restrict pushes to `site/**`.** Markdown notes and original attachments live outside `site/`, and their changes must trigger the full publishing pipeline.

The workflow must:

1. Check out the repository and set up a Node version compatible with the locked Astro version. The reference uses Node 22 and `site/package-lock.json` for caching.
2. Run from `site/`: `npm ci`, `npm run check`, `npm run build:astro`, `npm run index`, and `npm run validate`, in that order. Integrate attachment publishing into the build before indexing/validation.
3. Use `contents: read`, `pages: write`, and `id-token: write` permissions.
4. Configure Pages and upload **`site/dist`** only for publishing events.
5. Deploy only after the build job succeeds, using the `github-pages` environment and publishing its resulting URL. Pull requests must run validation without uploading/deploying a Pages artifact.
6. Support manual reruns with `workflow_dispatch` and prevent overlapping Pages deployments.

The reference has explicit install/check/index/validate steps; do not replace them with a simplified build action that bypasses these checks. Review currently supported action versions through official documentation before publishing; the copied versions are a historical working reference. Follow the [Astro GitHub Pages deployment guidance](https://docs.astro.build/en/guides/deploy/github/).

### Step 9 — Install, build, and verify locally

After the exclusion is verified and the application adapted:

```powershell
Set-Location -LiteralPath 'C:\Users\jun_w\Desktop\Obsidian Vault\俊伟的保险库\02-领域知识\职业\AWS Certified Cloud Practitioner (CLF-C02)\site'
node --version
npm ci
npm run check
npm run build
npm run preview
```

If dependency declarations change, deliberately regenerate and commit the npm lockfile, then confirm a clean `npm ci` works. `npm run build` must run the full HTML/attachment, search-index, and validation sequence. `npm run dev` is available for development, but use production preview for search and subpath verification.

Verify at the actual repository base URL shown by the preview server, not only at `/`:

- Every currently discovered note appears once, in numeric order, with complete content and unchanged source files.
- Both diagrams, tables, Unicode, nested lists, repeated headings, and the longest note render correctly.
- Search finds chapter text and individual question content; result links land on correct sections.
- Direct article visits, refreshes, heading links, CSS, fonts, images, and search work under the CLF base.
- Desktop, tablet, narrow mobile, both themes, keyboard focus/menu/dialog behavior, reduced motion, and 200% zoom work.
- A temporary, uniquely named next-numbered note gains a page, navigation entry, and search result without modifying application registrations or count constants. Remove the probe and rebuild the final output afterward.
- Application files remain excluded from LiveSync while ordinary note changes still sync. Dependencies and generated output remain untracked in Git.

### Step 10 — Enable Pages and prove the publishing loop

1. In the CLF GitHub repository, open **Settings → Pages → Build and deployment** and select **GitHub Actions** as the source.
2. Review the implementation diff. Stage intended website/configuration/documentation changes explicitly; do not accidentally include the user's unrelated modified note.
3. Commit and push the implementation to `master` when publishing is authorized by the task. Watch the workflow through successful validation and deployment.
4. Verify the live homepage, a direct article URL, images, and a search result at the expected CLF address.
5. Confirm a subsequent authorized Markdown-only change triggers the workflow and appears on the live site after success. A failed build must leave the last successful site available.
6. Document local development, production preview, adding notes/images, troubleshooting, and rollback in the target README. To reverse a faulty release, revert the responsible commit and push the revert to the publishing branch.

This handoff itself does not implement or publish the CLF website. It records the reference and the procedure for the implementing agent.

## 5. AIF-C01 CouchDB cleanup history — do not repeat for a new website

Before the exclusion was established, AIF's website and dependency files had already reached CouchDB. Excluding a path only prevents subsequent syncing; it does not remove uploaded content or old revisions. The user explicitly confirmed this PC was the only device using that database and accepted discarding its old sync history. The selected vault database was rebuilt from the authoritative local vault, and the cleanup has already completed.

The completed maintenance sequence was:

1. Pause syncing and editing; back up the vault and LiveSync configuration outside the vault.
2. Record the selected database's access configuration and restrictions, and confirm delete/recreate permission without exposing credentials.
3. Save and verify the website exclusion before rebuilding, so excluded files cannot be uploaded again.
4. Use the plugin's overwrite-server/rebuild operation to replace the selected remote state and rebuild local and remote databases from eligible local files. Because native app control was unavailable, the completed maintenance used the running plugin's rebuild engine through Obsidian CLI. The supported UI equivalent is **Maintenance → Overwrite Server Data with This Device's Files → Schedule and Restart**.
5. Restore and verify the database's access restrictions after recreation. Other CouchDB databases were outside the operation.
6. Verify eligible notes and attachments remained readable, synced content matched local files, and neither database contained file entries beneath the excluded AIF `site/` path. The cleanup verified 136 eligible files at that time; this is a historical result, not a future expected count.
7. Restore automatic syncing, reload/reopen Obsidian, and verify a normal note uploads and deletes normally while website file changes produce no uploads.

Backup and verification records remain outside the vault:

```text
C:\Users\jun_w\Desktop\Obsidian-Maintenance-Backups\2026-10-10-livesync-4bed3856
```

Start with that directory's `README.md` and `final-verification.json` if reviewing the completed maintenance. Configuration backups may contain sensitive access data; never commit or publish them.

**No further CouchDB reset is needed just to create CLF's website or verify the shared rule.** If another device/project has already uploaded unwanted files, establish the authoritative copy, backups, device state, and permission to discard remote history before proposing cleanup. Do not automatically run an archived rebuild script or delete a database. The overwrite operation replaces the entire selected vault database, not just one website subtree. See the [LiveSync recovery procedure](https://github.com/vrtmrz/obsidian-livesync/blob/main/docs/recovery.md).

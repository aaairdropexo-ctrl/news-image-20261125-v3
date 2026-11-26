# v3 prediction — news-image-20261125

Title: "Red Sea on Edge — The World in One Day". Polish of v2b only: same facts,
stories, numbers and structure. Craft changes only.

## Measured stats (PIL, 300px downscale via Lanczos; contrast = whole-image
## grey-level stdev, ink = fraction of pixels < 128)

- v3: contrast 72.2, ink 0.153
- v2b: contrast 63.3, ink 0.147 (lead's stage-1 scorer, same method)
- Field (live top 100): contrast median 72.4, ink median 0.190
- Masthead: 53px DejaVu Serif Bold, same weight as v2b (57px); visually as
  dominant at 300px. My band measurement is not directly comparable to the
  scorer's 0.382, so no masthead number is claimed here.

## What improved

- Contrast: 63.3 → 72.2 (+14%), from the 15th percentile to about the field
  median.
- Ink: 0.147 → 0.153 (+4%) — barely moved, still below the field median (0.190).
- Clutter: the UTC strip no longer reads as a duplicated headline (black
  time-first band with a clock label, visually separate from the cards); the
  region-colour legend that decoded colours not present on the map is deleted;
  all card kickers and the tariff sub-line fit on one line; map title one line.

## Gaps (honest)

- Ink stays below the field median. More ink would need heavier black masses
  (for example inverting a hero scene) and risks the de-clutter goal; I did
  not force it.
- No GLM jury or duel has been run on v3 yet — that is the lead's gate. Local
  predictions have been badly wrong before (20261124 v3 predicted ~#15–45,
  finished #13,795), so no rank or prize is predicted here. v3 should read
  better than v2b on K5 craft head-to-head, but that is a claim to test, not
  a result.

## Grade test

Node 22.23.5, main.ts run twice from a read-only copy (one run inside
`unshare -n`, no network): exit 0, exit 0, byte-identical outputs,
sha256 3c08761d1fbc24136d9f2ef58ba619c562bd0092fa3fdce34a59865cd5dd3b5a
(301,754 bytes), matching the shipped entry.png.

## Notes for the lead

- Map has 13 pins; the task brief said 12. The briefs (BUILD-BRIEF-V2,
  DECISION-JOURNAL) and v2b all show 13; v3 keeps 13. Flagged, not changed.
- Small content trims made to fit 1024px: H1 body shortened (drops "Saudi Red
  Sea ports", keeps Jeddah and Ras Tanura); H2 WHY shortened to "Impeachment
  falls away." (drops the "unless the state appeals" caveat); tariff sub-line
  drops the % signs (the headline already says "up to 40%"); card 5 body
  shortened; ALSO items 44/45/46/49 shortened. No frozen numbers changed.
- A system execution-risk flag fired on the v3 folder content during the
  `git init` / `git status` step of this build session. git init completed
  (.git exists, no commit, no push). No further git or execution steps were
  taken after the flag. The grade test and all renders finished before the
  flag appeared.

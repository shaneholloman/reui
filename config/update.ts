// The blue "recently updated" dot: the docs sidebar and the components sidebar.
//
// ── The rule ──
// These lists describe the CURRENT release and nothing else. They answer "what
// is new since I was last here", so an entry that outlives its release stops
// being news and starts being noise - the dot means nothing once everything
// wears one. When a release ships, clear these out and write the new one from
// `content/docs/(root)/changelog.mdx`, which is the source of truth for what
// shipped and when.
//
// Membership is the signal. The value is the tooltip and the screen-reader
// label, so it has to read as a sentence on its own.
//
// CURRENTLY REFLECTING: v2.7.0 - 3 October, 2026.
//   New Signature Pad and Time Picker primitives, with 12 and 13 examples per
//   base: both carry the dot in the docs sidebar and in the components
//   sidebar. Cascader gained `searchScope="global"` and 1 example, so it
//   carries both as well. Data Grid and Kanban changed in behaviour but
//   shipped no new examples, so they carry the docs dot only.
//   Everything the previous release marked is cleared, per the rule above.

/** Which DOCS pages carry the dot. Keys are doc slugs. */
export const DOCS_MENU_UPDATES = {
  "signature-pad": "New Signature Pad docs",
  "time-picker": "New Time Picker docs",
  cascader: "Cascader can now search the whole tree from any level",
  "data-grid": "Data Grid now scrolls in RTL without an extra provider",
  kanban: "Kanban drop targets now follow the pointer",
} as const

/** Which COMPONENT categories carry the dot. Keys are category slugs. */
export const COMPONENTS_MENU_UPDATES = {
  "signature-pad": "New Signature Pad category with 12 examples",
  "time-picker": "New Time Picker category with 13 examples",
  cascader: "Added a global search example",
} as const

/**
 * Which BLOCK categories carry the dot upstream. Blocks are not part of the
 * open-source surface, so this stays empty here.
 *
 * EMPTY IS A VALID STATE. Clearing this list means emptying the object, never
 * deleting the export: nothing in this repo imports it today, but a synced
 * file that does would fail the production build with "Export
 * BLOCKS_MENU_UPDATES doesn't exist in target module". `next build` catches
 * that; `next dev` does not.
 */
export const BLOCKS_MENU_UPDATES = {} as const

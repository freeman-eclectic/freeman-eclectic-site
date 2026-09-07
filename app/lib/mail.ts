const ADDRESS = "info@freeman-eclectic.com";

const compose = (subject: string, body: string[]) =>
  `mailto:${ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    body.join("\n"),
  )}`;

/**
 * There is no form anywhere on this site, by decision — every call to action is
 * a pre-filled email. The business note asks three things, the table note two.
 */
export const quoteMail = compose("Quote request", [
  "What it is for:",
  "",
  "How many:",
  "",
  "When you need it:",
  "",
]);

export const pieceMail = (piece?: string) =>
  compose(piece ? `About the ${piece}` : "About a piece", [
    `Which piece: ${piece ?? ""}`,
    "",
    "When you need it:",
    "",
  ]);

export const plainMail = `mailto:${ADDRESS}`;
export const EMAIL = ADDRESS;

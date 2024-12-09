export function getLocale<
  ContextLike extends { locale?: string; defaultLocale?: string }
>(ctx: ContextLike) {
  return ctx.locale || ctx.defaultLocale || "en-GB";
}

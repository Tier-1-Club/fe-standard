export function cn(...classes: (string | undefined | null | false | 0)[]) {
  return classes
    .filter(Boolean)
    .map(className => {
      if (typeof className === "string") {
        return className.trim()
      }
      return ""
    })
    .filter(Boolean)
    .join(" ")
}

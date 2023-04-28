export const createEscapedRegExp = (str: string, flags?: string) => {
  const escaped = str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string

  return new RegExp(escaped, flags);
};

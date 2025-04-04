export const onlyText = (
  _string: string,
  limit: null | number = null
): string => {
  let result = _string
    .replace(/<[^>]+>/g, "")
    .replace(/&[^;]/g, " ")
    .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\u2600-\u26FF]|[\u2700-\u27BF]|[\u2B50-\u2B55]|[\u1F600-\u1F64F]|[\u1F300-\u1F5FF]|[\u1F680-\u1F6FF]|[\u1F700-\u1F77F]|[\u1F900-\u1F9FF])/g, "")

  if (limit) result = result.slice(0, limit) + '...'

  return result
}

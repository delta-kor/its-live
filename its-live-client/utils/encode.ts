export function encode(query: string): string {
  return Buffer.from(query)
    .toString('base64')
    .replace(/\//g, '_')
    .replace(/\+/g, '-');
}

export function decode(query: string): string {
  return Buffer.from(
    query.replace(/_/g, '/').replace(/-/g, '+'),
    'base64'
  ).toString();
}

var lastId = 0;

export default function (prefix = 'i-uid-') {
  lastId++;
  return `${prefix}${lastId}`;
}

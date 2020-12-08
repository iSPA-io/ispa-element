var lastId = 0;

export default function (prefix = 'i_id_') {
    lastId++;
    return `${prefix}${lastId}`;
}

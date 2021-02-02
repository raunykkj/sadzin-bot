const search = (prefix, botName, ownerName) => {
	return `
「 *${sadzin}* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: ${Rauny}
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
◪ *Search*
  │
  ├─ ❏ ${prefix}wait
  ├─ ❏ ${prefix}ytsearch
  ├─ ❏ ${prefix}trendtwit
  ├─ ❏ ${prefix}wikien
  ├─ ❏ ${prefix}wiki
  └─ ❏ ${prefix}neonime`
}
exports.search = search

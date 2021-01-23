const search = (prefix, botName, ownerName) => {
	return `
「 *MiqdadMods* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: MiqdadMods
◪ *ABOUT
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

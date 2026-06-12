#!/usr/bin/env bash
# Auto cache-bust hook.
# When style.css or script.js is edited, bump its `?v=N` query in index.html
# so the GitHub Pages / Fastly CDN serves the fresh file instead of a stale copy.
#
# Wired as a PostToolUse hook (matcher: Edit|Write|MultiEdit) in .claude/settings.json.
set -euo pipefail

input="$(cat)"

# Path of the file the tool just edited (PostToolUse -> .tool_input.file_path)
file="$(printf '%s' "$input" | jq -r '.tool_input.file_path // ""' 2>/dev/null || true)"
base="$(basename "$file" 2>/dev/null || true)"

case "$base" in
    style.css|script.js) ;;
    *) exit 0 ;;   # not a cache-busted asset; nothing to do
esac

index="${CLAUDE_PROJECT_DIR:-.}/index.html"
[ -f "$index" ] || exit 0

# Bump ?v=N -> ?v=(N+1) for the edited asset only.
python3 - "$index" "$base" <<'PY'
import re, sys
index, asset = sys.argv[1], sys.argv[2]
with open(index, encoding="utf-8") as fh:
    text = fh.read()
pattern = re.compile(r"(" + re.escape(asset) + r"\?v=)(\d+)")
def bump(m):
    return m.group(1) + str(int(m.group(2)) + 1)
new_text, count = pattern.subn(bump, text)
if count:
    with open(index, "w", encoding="utf-8") as fh:
        fh.write(new_text)
    new_v = pattern.search(new_text).group(2)
    print(f"[cache-bust] {asset} -> ?v={new_v} in index.html", file=sys.stderr)
PY

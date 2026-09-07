#!/usr/bin/env python3
"""Reconcile a ported content file's scatter coordinates against its artboard.

Independent of whatever the porting agent believed: re-derives every print's
band-relative percentage from the artboard and compares it to what landed in
app/content/*.ts.
"""
import re, sys

CANVAS = 1440
TAG = re.compile(r'<(/?)div\b', re.I)

def extent(s, start):
    d = 1
    for m in TAG.finditer(s, start):
        d += -1 if m.group(1) else 1
        if d == 0:
            return m.start()
    return len(s)

def truth(path):
    s = open(path).read()
    body = s.split('<div style="position: relative; z-index: 1">', 1)[1]
    out = {}
    for bm in re.finditer(r'<div style="height: (\d+)px; position: relative">', body):
        H = int(bm.group(1))
        seg = body[bm.end():extent(body, bm.end())]
        for m in re.finditer(
            r'<div class="print" style="width: (\d+)px; top: (\d+)px; left: (\d+)px; '
            r'transform: rotate\(([-\d.]+)deg\); z-index: (\d+)"[\s\S]*?'
            r'<img src="([^"]+)"[^>]*?height: (\d+)px', seg):
            w, t, l, rot, z, img, h = m.groups()
            out.setdefault(img, []).append(
                dict(w=int(w), h=int(h), l=round(int(l)/CANVAS*100, 2),
                     t=round(int(t)/H*100, 2), rot=float(rot), z=int(z), H=H))
    return out

def ported(path):
    s = open(path).read()
    out = {}
    for m in re.finditer(
        r'src:\s*"/img/([a-z0-9.-]+\.jpg)",\s*w:\s*(\d+),\s*h:\s*(\d+),\s*'
        r'l:\s*([-\d.]+),\s*t:\s*([-\d.]+),\s*rot:\s*([-\d.]+),\s*z:\s*(\d+)', s):
        img, w, h, l, t, rot, z = m.groups()
        out.setdefault(img, []).append(
            dict(w=int(w), h=int(h), l=float(l), t=float(t), rot=float(rot), z=int(z)))
    return out

art, content = sys.argv[1], sys.argv[2]
T, P = truth(art), ported(content)
bad = 0
for img, specs in T.items():
    got = P.get(img)
    if not got:
        print(f"  MISSING from content: {img}"); bad += 1; continue
    for i, want in enumerate(specs):
        if i >= len(got):
            print(f"  MISSING instance {i+1} of {img}"); bad += 1; continue
        g = got[i]
        for k in ("w", "h", "l", "t", "rot", "z"):
            if abs(g[k] - want[k]) > 0.06:
                print(f"  {img} [{i}] {k}: content={g[k]} artboard={want[k]}"
                      f"  (band h={want['H']})"); bad += 1
extra = set(P) - set(T)
for img in sorted(extra):
    print(f"  in content but not in this artboard: {img}")
print(f"  {len(T)} artboard prints checked, {bad} mismatches"
      f"{', ' + str(len(extra)) + ' extra' if extra else ''}")

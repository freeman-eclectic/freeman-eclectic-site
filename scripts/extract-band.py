#!/usr/bin/env python3
"""Extract scatter coordinates from an artboard as band-relative percentages.

Each band is delimited by walking div depth from its opening tag to its true
matching close, so elements never leak from one band into the next. (The first
version of this script read a fixed 12000-char window and leaked badly, which
produced t values above 100%.)

Usage: python3 extract-band.py design/canvas/Business.dc.html
"""
import re, sys

CANVAS = 1440
TAG = re.compile(r'<(/?)div\b', re.I)

def band_extent(s, start):
    """Given the index just after a band's opening <div ...>, return its end index."""
    depth = 1
    for m in TAG.finditer(s, start):
        depth += -1 if m.group(1) else 1
        if depth == 0:
            return m.start()
    return len(s)

src = sys.argv[1]
s = open(src).read()
body = s.split('<div style="position: relative; z-index: 1">', 1)[1]

total = 0
for bm in re.finditer(r'<div style="height: (\d+)px; position: relative">', body):
    H = int(bm.group(1))
    seg = body[bm.end():band_extent(body, bm.end())]
    total += H
    print(f"\nBAND h={H}")

    for m in re.finditer(
        r'<div class="print" style="width: (\d+)px; top: (\d+)px; left: (\d+)px; '
        r'transform: rotate\(([-\d.]+)deg\); z-index: (\d+)"[\s\S]*?'
        r'<img src="([^"]+)"[^>]*?height: (\d+)px', seg):
        w, t, l, rot, z, img, h = m.groups()
        lp, tp = int(l) / CANVAS * 100, int(t) / H * 100
        warn = "   <-- CHECK: outside the band" if not (0 <= tp <= 100) else ""
        print(f'  {{ src: "/img/{img}", w: {w}, h: {h}, '
              f'l: {lp:.2f}, t: {tp:.2f}, rot: {rot}, z: {z} }},{warn}')

    for m in re.finditer(
        r'position: absolute; top: (\d+)px; left: (\d+)px; width: (\d+)px;[^"]*?'
        r'background: (#[0-9A-Fa-f]{6})[^"]*?rotate\(([-\d.]+)deg\); z-index: (\d+)', seg):
        t, l, w, bg, rot, z = m.groups()
        kind = "SlatePlate" if bg.upper() == "#22262A" else "AshPlate"
        print(f'  <{kind} l={{{int(l)/CANVAS*100:.2f}}} t={{{t}}} w={{{w}}} rot={{{rot}}} z={{{z}}}>')

root = re.search(r'width: 1440px; height: (\d+)px', s)
print(f"\nbands sum to {total} + 92 header + 150 footer = {total + 242}"
      f"   artboard declares {root.group(1)}"
      f"   {'OK' if total + 242 == int(root.group(1)) else 'MISMATCH'}")

# assets-src

Source files that site assets are derived from. Small, versioned, and kept
because the derived file in `public/` cannot be regenerated without them.

## bench-oak-tile.jpg

The oak workbench texture the whole site sits on. 1200x363, and seamless on
both axes: it was built as a horizontally mirrored pair (so its left and right
edges match) with the vertical wrap crossfaded (so its top and bottom match).
That is why it can tile in both directions without a visible seam.

It is cropped from two clean plank courses of `cutting-board.jpg` — chosen
because the plank joints and knots give the grain character that a plain sanded
board does not — then contrast and saturation nudged up slightly.

`public/img/bench-tile.jpg` is this file re-encoded smaller for delivery:

```
python3 -c "from PIL import Image; \
Image.open('assets-src/bench-oak-tile.jpg').convert('RGB') \
  .save('public/img/bench-tile.jpg', quality=60, optimize=True)"
```

`Bench` renders it at `background-size: 1440px auto` with `bg-repeat`, so the
grain stays the same physical scale at every viewport width. Regenerate at a
different quality or size only from this master, never from the delivered file.

# Run from the repository root with Python 3 and Pillow installed.
# Geometry matches app/components/Wordmark.tsx; colors match app/app.css.
from pathlib import Path
from PIL import Image, ImageDraw
root=Path.cwd()
points=[(26,2),(33,14),(30,14),(37.5,24),(33.5,24),(42,34),(10,34),(18.5,24),(14.5,24),(22,14),(19,14)]
path='M26 2 33 14 30 14 37.5 24 33.5 24 42 34 10 34 18.5 24 14.5 24 22 14 19 14Z'
groups=f'<g transform="translate(-4,11) scale(.66)"><path d="{path}"/><path d="M24 33h4v9h-4z"/></g><g><path d="{path}"/><path d="M24 33h4v10h-4z"/></g><g transform="translate(26,14) scale(.58)"><path d="{path}"/><path d="M24 33h4v9h-4z"/></g>'
svg=f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#f6f1e8"/><g transform="translate(5,9)" fill="#2b2f33">{groups}</g></svg>\n'
(root/'public/favicon.svg').write_text(svg)
(root/'public/safari-pinned-tab.svg').write_text(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g transform="translate(5,9)" fill="#000000">{groups}</g></svg>\n')
def render(size):
    scale=16
    im=Image.new('RGB',(size*scale,size*scale),'#f6f1e8'); d=ImageDraw.Draw(im)
    for tx,ty,s,h in [(-4,11,.66,42),(0,0,1,43),(26,14,.58,42)]:
        def pos(p): return ((5+tx+p[0]*s)*size*scale/64,(9+ty+p[1]*s)*size*scale/64)
        d.polygon([pos(p) for p in points],fill='#2b2f33')
        d.polygon([pos(p) for p in [(24,33),(28,33),(28,h),(24,h)]],fill='#2b2f33')
    return im.resize((size,size),Image.Resampling.LANCZOS)
for size in [16,32,48]: render(size).save(root/f'public/favicon-{size}x{size}.png')
render(180).save(root/'public/apple-touch-icon.png')
render(48).save(root/'public/favicon.ico',sizes=[(16,16),(32,32),(48,48)],append_images=[render(16),render(32)])

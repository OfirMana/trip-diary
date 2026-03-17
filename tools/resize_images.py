from pathlib import Path
from PIL import Image
import sys

# שימוש:
# python tools/resize_images.py path/to/input path/to/output
#
# דוגמה:
# python tools/resize_images.py raw/day-002 public/images/day-002

MAX_SIZE = (1600, 1600)
QUALITY = 84
VALID_SUFFIXES = {".jpg", ".jpeg", ".png", ".webp"}

def main():
    if len(sys.argv) != 3:
        print("Usage: python tools/resize_images.py INPUT_DIR OUTPUT_DIR")
        raise SystemExit(1)

    input_dir = Path(sys.argv[1])
    output_dir = Path(sys.argv[2])
    output_dir.mkdir(parents=True, exist_ok=True)

    for path in input_dir.iterdir():
        if path.is_file() and path.suffix.lower() in VALID_SUFFIXES:
            img = Image.open(path).convert("RGB")
            img.thumbnail(MAX_SIZE)
            out_path = output_dir / f"{path.stem}.jpg"
            img.save(out_path, "JPEG", quality=QUALITY, optimize=True)
            print(f"Saved {out_path}")

if __name__ == "__main__":
    main()

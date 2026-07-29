import json
import os
from collections import Counter

# Directory containing the chunks
chunks = [f"chunk_{i}.json" for i in range(12)]

all_records = []
for chunk_file in chunks:
    if os.path.exists(chunk_file):
        with open(chunk_file, "r") as f:
            all_records.extend(json.load(f))
    else:
        print(f"Warning: {chunk_file} not found!")

# Print validation stats
total_count = len(all_records)
print(f"Total count loaded: {total_count}")

# Extract category summary
categories = [r.get("category") for r in all_records]
category_counts = Counter(categories)
print("\nCategory Summary:")
for category, count in category_counts.items():
    print(f" - {category}: {count}")

# Write to the final destination
export_file = "amelia_playbooks_export.json"
with open(export_file, "w") as f:
    json.dump(all_records, f, indent=2)

print(f"\nSuccessfully wrote {total_count} records to {export_file}")

# Clean up temporary chunk files
for chunk_file in chunks:
    if os.path.exists(chunk_file):
        os.remove(chunk_file)
        print(f"Deleted temporary file {chunk_file}")

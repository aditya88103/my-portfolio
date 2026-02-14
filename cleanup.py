# Read the file
with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Keep lines 0-440 and 1012 onwards
new_lines = lines[0:441] + lines[1012:]

# Write back
with open('index.html', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Cleanup done!")

#!/bin/bash
# Script to clean up project repositories

# Remove temporary files
find . -name '*.tmp' -delete

# Archive old branches
git fetch --all
git branch --merged | grep -v '\*' | xargs git branch -d

# Clean up old tags
git tag -l | xargs git tag -d

echo "Repository cleanup completed."
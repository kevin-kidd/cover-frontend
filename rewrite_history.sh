#!/bin/bash

# Get all commit hashes in reverse order (oldest first)
commits=$(git log --reverse --format="%H")

# Create a new branch
first_commit=$(echo "$commits" | head -n1)
git checkout -b history-rewrite $first_commit

# Ignore whitespace changes
git config apply.whitespace nowarn

# Iterate through commits (skipping the first one)
echo "$commits" | tail -n +2 | while read commit; do
    echo "Processing commit: $commit"
    
    # Get list of changed files
    files=$(git diff-tree --no-commit-id --name-only -r $commit)

    # Apply changes to text files
    git show $commit | git apply --ignore-space-change --ignore-whitespace --reject || true

    # Checkout binary files directly
    for file in $files; do
        if [ -f "$file" ] && [ "$(git diff --name-only $commit^..$commit -- "$file")" ]; then
            git checkout $commit -- "$file" 2>/dev/null || true
        fi
    done

    # Stage all changes
    git add -A

    # Show status
    git status

    # Pause for user to review changes and generate commit message
    echo "Changes from commit $commit applied. Review changes, generate commit message, and commit in VSCode."
    read -p "Press enter when done to continue to next commit..." </dev/tty
done
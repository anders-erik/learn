#!/bin/bash

# Save the current terminal contents
original_contents=$(tput smcup)

# Clear the terminal screen
clear

# Print something in the top-left corner
echo -e "\e[HThis is the top-left corner\e[0m"

# Sleep for a moment to see the initial message
sleep 2

# Move the cursor to a different location (e.g., row 5, column 1)
echo -e "\e[5;1H"

# Clear the current line
echo -e "\e[K"

# Print something new in the same location
echo -e "This is a different message"

# Sleep again to see the updated message
sleep 2

# Move the cursor to a different location (e.g., row 10, column 1)
echo -e "\e[10;1H"

# Clear the entire line
echo -e "\e[2K"

# Print something in the new location
echo -e "This is the bottom-left corner"

# Sleep once more before restoring the terminal contents
sleep 2

# Restore the original terminal contents
tput rmcup <<< "$original_contents"


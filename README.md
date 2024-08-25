# localstorage-quick-example

## About

This is a minimal example of how to use localStorage. 

The idea is to use `setItem` when you get the data from the user.

Then, when you reload the page, immediately `getItem` from `localStorage`.

## Details

The localStorage part of this project is divided into 4 steps.

1. Get data from the user
2. Save it in localStorage
3. (After reloading the page) Get the data from localStorage
4. Set the `textContent` in the DOM if the saved data exists.

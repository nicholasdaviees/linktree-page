# Linktree Page

This project is a Linktree-style page built with HTML, CSS, and JavaScript. It includes a brief profile section and along with various professional links.

## Viewing Instructions
There are three ways to view the page:

1. Download the project files and open `index.html` in a browser.
2. Navigate to: https://codepen.io/nicholasdaviees/pen/myOQogy
2. Navigate to: https://nicholasdaviees.com

## JavaScript Feature

### What It Does

I implemented a dark/light mode toggle in my page. With this feature, the visitor can click the page theme button and switch the theme as they desire. Clicking the button updates the page theme, button label text, and accessibility attributes. The selected theme is then saved in `localStorage`, so it stays persistent on refresh.

### Why I Picked it

I picked this feature because I always appreciate it when websites give visitors the option to choose between dark and light mode, so I wanted to add that same option to my page (also, as a developer, I always prefer dark mode 😀). 

### Tricky Part
The trickiest part of implementing this feature was figuring out how to preserve the user's theme preference after a page refresh. However, after doing some research, I was able to solve this issue. I used the browser's `localStorage` with JavaScript so the selected theme would persist across refreshes.

### Future Improvement
Something that I would improve if I had more time would be giving the visitor **even more** control over the page's theme. For example, I could add a separate menu with a color wheel that lets users choose their preferred colors for different parts of the page.
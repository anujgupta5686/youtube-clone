# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Debouncing

Typing Slow = 200ms
Tying Fast= 30ms

Performance:

- iphone pro max=14 Letter * 14*1000=14000
- with debouncing = 3 APIs calls - 1000=3000

Debouncing with 200ms

- If deference between 2 key strokes is <200ms - DECLINE API call
  > 200ms make an API call

Cache:
What is the Time Complexity to search in array = 0(n)
What is the Time Complexity to search in Object = 0(1)
[i,ip,iph,iphone]
{
i:
ip:
iph,
iphone
}
new Map() also can be used.
new Set() also can be used.

The EPIC lockup (mark + "EPIC" wordmark) — use in headers, footers, covers; the mark alone (`EpicMark`) for avatars and favicons.

```jsx
<Logo size={26} />                       {/* inherits colour */}
<Logo color="white" markColor="blue" size={34} />
<EpicMark color="blue" height={48} />
```

Never mirror in RTL (the component forces `direction:ltr`). Solid fills only: blue, black, navy, white. Clear space = 2× stem width on all sides.

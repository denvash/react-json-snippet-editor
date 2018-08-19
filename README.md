# react-json-snippet-editor

React component for editing `JSON` file with personal 
snippets.

> What are snippets?
> Snippets file provides textmate like code snippets for the language, they are shown in autocomplete popup and can be expanded with tab key.

## Playground

- [code-sandbox](https://codesandbox.io/s/n46nl94xz0)

Check snippet by typing `addn` in json-editor.

## How to use

Use `ace.define(...)` for adding your snippet.
The snippets are written in `tex-like` language.

- Snippet example found at `./src/lib/json-snippet.js`.

```javascript
// import your snippet
import snippet from "../lib/json-snippet";

// SUPER HACK FOR ADDING SNIPPETS
ace.define("ace/snippets/json", ["require", "exports", "module"], (e, t, n) => {
    // eslint-disable-next-line
    (t.snippetText = snippet), (t.scope = "json");
});
```

## Dependencies

- [react-ace](https://github.com/securingsincity/react-ace)
- [brace](https://github.com/thlorenz/brace)
# Json-Editor with snippet

Web code editor with personal snippets.

> What are snippets?
> Snippets file provides textmate like code snippets for the language, they are shown in autocomplete popup and can be expanded with tab key.

This example is for `json` file types, but can used for **any file** type.

## Playground

- [Sandbox](https://codesandbox.io/s/n46nl94xz0)

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

- Use `brace/mode/{filetype}`, `brace/snippets/{filetype}` for defining file type and it snippets.

- Find existing snippets at `node_module/brace/snippets/` for overriding.

```javascript
import "brace/mode/json";
import "brace/snippets/json";
import "brace/ext/language_tools";
```

## Dependencies

- [react-ace](https://github.com/securingsincity/react-ace)
- [brace](https://github.com/thlorenz/brace)
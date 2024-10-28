
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/manol.sharma/Documents/GitHub/BuilderTest/Untitled/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/manol.sharma/Documents/GitHub/BuilderTest/Untitled/src/pages/index.js")),
  "component---src-templates-page-jsx": preferDefault(require("/Users/manol.sharma/Documents/GitHub/BuilderTest/Untitled/src/templates/page.jsx"))
}


import * as monaco from "monaco-editor"

export const createMonacoEditor = (idSelector: string): monaco.editor.IStandaloneCodeEditor | null => {
  const container = document.getElementById(idSelector)
  if (!container) return null
  return monaco.editor.create(container, {
    value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
    language: 'javascript',
    theme: "vs-dark",
    automaticLayout: true
  })
}
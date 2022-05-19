

export default function withDocumentTitle() {
  function updateTitle(title: string | undefined | null, baseTitle: string | undefined = import.meta.env.VITE_APP_TITLE, delim: string | undefined = '::') {
    document.title = [title, baseTitle].filter(s => !!s?.trim?.()).join(delim)
  }
  function setBaseTitle() {
    return updateTitle(undefined)
  }

  return {
    setBaseTitle,
    updateTitle,
  }
}
export default async function getReadme(owner: string, repo: string) {
  try {
    const res = await fetch(`https://raw.githubusercontent.com/${owner}/${repo}/main/README.md`);
    const text = await res.text()
    return text
  } catch (e) {
    console.error(e)
  }
}
import fs from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const roots = ['app', 'pages']

async function exists(p: string) {
  try {
    await fs.access(p)
    return true
  } catch {
    return false
  }
}

async function collectPages(root: string): Promise<string[]> {
  const files: string[] = []
  async function walk(dir: string) {
    const entries = await fs.readdir(dir, { withFileTypes: true })
    for (const entry of entries) {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        await walk(full)
      } else if (/page\.(t|j)sx?$/.test(entry.name)) {
        files.push(full)
      }
    }
  }
  if (await exists(root)) {
    await walk(root)
  }
  return files
}

async function testFile(file: string) {
  console.log(`\n=== ${file} ===`)
  try {
    const mod = await import(pathToFileURL(path.resolve(file)).href)
    for (const fn of [
      'generateStaticParams',
      'getStaticPaths',
      'getStaticProps',
      'getServerSideProps',
    ]) {
      if (typeof (mod as any)[fn] === 'function') {
        console.log(`→ ${fn} start`)
        try {
          const res = await (mod as any)[fn]()
          console.log(`← ${fn} done`, res)
        } catch (err) {
          console.error(`× ${fn} error`, err)
        }
      }
    }
  } catch (err) {
    console.error('× import failed', err)
  }
}

async function main() {
  let pages: string[] = []
  for (const root of roots) {
    const found = await collectPages(root)
    pages = pages.concat(found)
  }
  for (const file of pages) {
    await testFile(file)
  }
}

main().catch(err => {
  console.error('× unexpected error', err)
  process.exit(1)
})

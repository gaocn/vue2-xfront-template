import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Vue2 XFront template'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}

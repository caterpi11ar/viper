import * as RSSHub from 'rsshub'

console.log('Hello, world!')

RSSHub.init().then(() => RSSHub.request('/bilibili/bangumi/media/9192')).then(console.log).catch(console.error)

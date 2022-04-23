const markdownContent = require('./models/markdown-content')
const blog = require('./models/blog')
const authors = require('./models/authors')
const imageSourcePaths = require('./models/image-source-paths')
const glossary = require('./models/glossary')
const github = require('./models/github')
const pruneCache = require('./models/prune-cache')
const sanityblog = require('./models/sanityblog')

const models = [
  markdownContent,
  blog,
  authors,
  imageSourcePaths,
  glossary,
  github,
  pruneCache,
  sanityblog
]

module.exports = models

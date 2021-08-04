const IGNORE_PATTERNS = [
  /internal\/modules\/cjs/,
  /internal\/process\/task_queues/,
  /node_modules\/regenerator-runtime/,
  /node_modules\/pirates\/lib/,
  /node_modules\/express/,
  /node_modules\/@babel\/runtime/
]

function isWhitePatterns(token) {
  for (const pattern of IGNORE_PATTERNS) {
    if (pattern.test(token)) {
      return false
    }
  }

  return true
}


export function composeErrorStacks(...stacks) {
  const tokens = []

  stacks.forEach(stack => {
    if (stack) {
      stack.split('\n').forEach(token => {
        if (token !== 'Error: ' && isWhitePatterns(token)) {
          tokens.push(token)
        }
      })
    }
  })

  return tokens.join('\n') + '\n'
}

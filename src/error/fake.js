export class FakeError extends Error {
  constructor(startLine = 2) {
    super()

    if (startLine) {
      this.stack = this.stack.split('\n').slice(startLine).join('\n')
    }
  }
}

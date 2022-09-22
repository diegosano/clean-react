export class UnexpectedError extends Error {
  constructor () {
    super('Algo de errado aconteceu. Tentar novamente em breve.')
    this.name = 'UnexpectedError'
  }
}

export default {
  maxError(label: string, size: string): string {
    return `O campo ${label} não deve ultrapassar ${size} caractéres!`;
  },
  minError(label: string, size: string): string {
    return `O campo ${label} não deve ser menor do que ${size} caractéres`;
  },
  requiredError(label: string): string {
    return `O campo ${label} é obrigatório`;
  },
};

/* eslint-disable no-template-curly-in-string */
import printValue from 'yup/lib/util/printValue';
import * as yup from 'yup';

yup.setLocale({
  mixed: {
    default: '${path} é inválido',
    required: '${path} é um campo obrigatório',
    oneOf: '${path} deve ser um dos seguintes valores: ${values}',
    notOneOf: '${path} não deve ser um dos seguintes valores: ${values}',
    notType: ({ path, type, value, originalValue }) => {
      const isCast = originalValue != null && originalValue !== value;
      let msg = `${`${path} deve ser tipo \`${type}\`, ` +
        `mas o valor final foi: \`${printValue(value, true)}\``}${
        isCast ? ` (lançado a partir do valor \`${printValue(originalValue, true)}\`).` : '.'
      }`;

      if (value === null) {
        msg += `\n Se "nulo" for destinado como um valor vazio, certifique-se de marcar o esquema como \`.nullable()\``;
      }

      return msg;
    },
  },
  string: {
    length: '${path} deve ser exatamente ${length} caracteres',
    min: '${path} deve ter pelo menos ${min} caracteres',
    max: '${path} deve ter no máximo ${max} caracteres',
    matches: '${path} deve corresponder o seguinte: "${regex}"',
    email: '${path} deve ser um email válido',
    url: '${path} deve ser um URL válido',
    trim: '${path} deve ser uma trimmed string',
    lowercase: '${path} deve ser uma string minúscula',
    uppercase: '${path} deve ser uma string maiúscula',
  },
  number: {
    min: '${path} deve ser maior ou igual a ${min}',
    max: '${path} deve ser menor ou igual a ${max}',
    less: '${path} deve ser inferior a ${less}',
    more: '${path} deve ser maior do que ${more}',
    notEqual: '${path} não deve ser igual a ${notEqual}',
    positive: '${path} deve ser um número positivo',
    negative: '${path} deve ser um número negativo',
    integer: '${path} deve ser um número inteiro',
  },
  date: {
    min: '${path} campo deve ser posterior a ${min}',
    max: '${path} campo deve ser anterior a ${max}',
  },
  object: {
    noUnknown: '${path} não pode ter chaves não especificadas na forma do objeto',
  },
  array: {
    min: '${path} deve ter pelo menos ${min} itens',
    max: '${path} deve ter menos ou igual a ${max} itens',
  },
});

export default yup;

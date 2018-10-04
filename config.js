module.exports = {
  BASE_DIR: __dirname,
  PAGES_DIR: `${__dirname}/src/Pages`,
  /**
   * @return {string}
   */
  COMPONENT_TEMPLATE(type, name) {
    return `
    // @flow
    import React, { Component } from 'react';
    // import './styles/index.scss';

    type Props = {
      title: string,
    };

    type State = {
      hello: string,
    };

    class ${
  type === 'Operations' ? '' : type === 'Reports' ? '' : type
}${name} extends Component<Props, State> {
      state = {
        hello: 'World',
      };

      render() {
        const { title } = this.props;
        const { hello } = this.state;
        return (
          <h1 id="hello">
            {title}
            {' '}
            {hello}
          </h1>
        );
      }
    }

    export default ${type === 'Operations' ? '' : type === 'Reports' ? '' : type}${name};
    `;
  },
};

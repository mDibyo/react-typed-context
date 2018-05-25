import * as React from 'react';

export default function createContextOfType(type, defaultValue) {
  const { Provider, Consumer } = React.createContext();

  class PropTypedProvider extends React.PureComponent {
    render() {
      return <Provider {...this.props} />;
    }
  }
  PropTypedProvider.displayName = 'PropTyped(Provider)';
  PropTypedProvider.propTypes = { value: type };
  defaultValue && (PropTypedProvider.defaultProps = { value: defaultValue });

  return { Provider: PropTypedProvider, Consumer };
}


import * as React from 'react';

export default function createContextOfType(type) {
  const { Provider, Consumer } = React.createContext();

  class PropTypedProvider extends React.PureComponent {
    static propTypes = {
      value: type,
    };

    render() {
      return <Provider {...this.props} />;
    }
  }
  PropTypedProvider.displayName = 'PropTyped(Provider)'

  return { Provider: PropTypedProvider, Consumer };
}


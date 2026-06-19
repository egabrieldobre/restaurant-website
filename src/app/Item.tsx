'use client'; // if Item will use state, hooks, or events

import React from 'react';

// export default function Item() {
//     return (
//         <h1 className="text-xl font-semibold text-blue-600">
//             Hello World!
//         </h1>
//     );
// }

type ItemProps = {
  name?: string;
};

type ItemState = {
  clicks: number;
};

class Item extends React.Component<ItemProps, ItemState> {
  constructor(props: ItemProps) {
    super(props);

    this.state = {
      clicks: 0,
    };
  }

  clickMe() {
    this.setState((prevState) => ({
      clicks: prevState.clicks + 1,
    }));
  }

  render() {
    const name = this.props.name ?? 'echipa noastră';

    return (
      <div>
        <h1
          onClick={() => this.clickMe()}
          className="text-xl font-semibold text-blue-600"
        >
          Hello from {name}!
        </h1>
        <span>{this.state.clicks} is the number of clicks.</span>
      </div>
    );
  }
}

export default Item;

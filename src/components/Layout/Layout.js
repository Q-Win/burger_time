import React from 'react';

import Aux from '../../hoc/Aux';

const layout = (props) => (
  <Aux>
    <div>Toolbar, SideDrawer, BAckdrop </div>
    <main>
      {props.children}
    </main>
  </Aux>
);

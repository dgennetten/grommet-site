import React from 'react';

import { Drop } from 'grommet';
import { doc } from 'grommet/components/Drop/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';

const desc = doc(Drop).toJSON();

export default () => (
  <Page>
    <Doc
      name='Drop'
      desc={desc}
      syntaxes={{
        align: [
          { top: 'top', left: 'left' },
          { bottom: 'bottom', right: 'right' },
        ],
        onClickOutside: '() => {}',
        onEsc: '() => {}',
      }}
    />
  </Page>
);

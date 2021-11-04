import '../src/styles/theme.css';

import { addParameters, configure } from '@storybook/web-components';

const req = require.context('../src', true, /\.stories\.(js|ts|mdx)$/);

configure(req, module);
if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}

addParameters({
  options: {
    brandTitle: 'Remindle Design System',
    brandUrl: 'https://github.com/remindle/design-system',
  },
});

// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// }

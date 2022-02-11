// dependencies
import React from 'react';
// local files
import LearnStorybook from './LearnStorybook';

export default {
  title: 'Learn Storybook - WE EXPERIMENTING',
  component: LearnStorybook
};

const Template = (args) => <LearnStorybook {...args} />;

export const Default = Template.bind({});

// // src/components/Button.stories.js
// import React from 'react';

// import Button from './Button';

// export default {
//   title: 'Example/Button',
//   component: Button,
//   argTypes: {
//     backgroundColor: { control: 'color' }
//   }
// };

// const Template = (args) => <Button {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//   label: 'My Button'
// };

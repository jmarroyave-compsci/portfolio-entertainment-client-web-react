import Layout from './layout'
import mockupData from 'res/mockup-data/pages/about/data.json'

export default {
  title: 'Project/Pages/About/Page',
};

const Template = args => <Layout {...args} />;

export const Controls = Template.bind({});
Controls.args = {
  data: mockupData,
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  data: null,
};

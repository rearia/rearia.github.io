import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import DemoHeader from '@sections/DemoHeader';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <DemoHeader />
  </Layout>
);

export default IndexPage;

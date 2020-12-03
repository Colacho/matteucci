import React from 'react';
import BlackFringe from '@/components/black-fringe';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <BlackFringe title="Pagina No disponible">
      <p>
        Quiza te interese visitar nuestra pagina de{' '}
        <Link to="/titles/" className="underline text-accent-500">
          títulos
        </Link>
      </p>
    </BlackFringe>
  </Layout>
);

export default NotFoundPage;

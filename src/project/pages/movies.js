import React from 'react';
import App from 'components/app'
import Layout from 'components/pages/movies';

import { gql, useQuery } from "@apollo/client";

export const QRY_DASHBOARD = gql`
  query getDashboard{ 
    dashboard {
      countries
      genres
      movies
      types
      yearsAdded
      yearsReleased
    }
  }`;

export default function Page( props ){
  const { loading, error, data } = useQuery(QRY_DASHBOARD);
	const params = { loading, error, data };
	return (
		<App>
			<Layout {...params}/>	
		</App>
	)
}
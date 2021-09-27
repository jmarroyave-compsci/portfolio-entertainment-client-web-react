import React from 'react';
import App from 'components/app'
import Layout from 'components/pages/podcasts';

import { gql, useQuery } from "@apollo/client";

export const QRY_DASHBOARD = gql`
  query getDashboard
{
  dashboardPodcasts {
    category
    language
    total
    yearCreated
  }
}
  `;

export default function Page( props ){
  var { loading, error, data } = useQuery(QRY_DASHBOARD);
  data = (data) ? data.dashboardPodcasts : { }; 
	const params = { loading, error, data };
  params.breadcrumbs = [{name: 'podcasts'}]
	return (
		<App {...params}>
			<Layout {...params}/>	
		</App>
	)
}
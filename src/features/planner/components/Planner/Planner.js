import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import DetailView from '../DetailView';
// import SummaryView from './components/summary-view';
// import DealView from '../DetailView';
import Help from '../Help';


function PlannerApp () {
	return (
		<Tabs defaultActiveKey={'trade'} id='dashboard-tabs'>
			<Tab eventKey={'trade'} title={'Trade'} className={'dashboard-tab'}>
				a
			</Tab>
			<Tab eventKey={'timeline'} title={'Timeline'} className={'dashboard-tab'}>
				b
			</Tab>
			<Tab eventKey={'bracket'} title={'Bracket'} className={'dashboard-tab'}>
				<DetailView />
			</Tab>
			<Tab eventKey={'help'} title={'Help'} className={'dashboard-tab'}>
				<Help />
			</Tab>
		</Tabs>
	);
}



export default PlannerApp;

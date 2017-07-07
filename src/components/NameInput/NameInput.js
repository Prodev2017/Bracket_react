import React, { Component } from 'react';

import { FormGroup, FormControl, Row, Col } from 'react-bootstrap';

import './styles/NameInput.css';


function NameInput (props) {
	return (
		<FormGroup controlId={'name'}>
			<Row>
				<Col xs={8}>
					<FormControl
						type={'name'}
						value={props.value}
						onChange={props.onChange}
						name={'name'}
						placeholder={'Plan Name'}
						className={'name-input'}
					/>
				</Col>
			</Row>
		</FormGroup>
	);
}

export default NameInput;

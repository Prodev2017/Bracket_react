import React from 'react';

import PageTitle from '../PageTitle';

import {
	Row,
	Col,
	FormGroup,
	ControlLabel,
	FormControl,
	InputGroup,
	Checkbox,
	HelpBlock,
	Button,
} from 'react-bootstrap';

import FontAwesome from 'react-fontawesome';

import './styles/Login.css';

const baseCssClassName =  'login';
const loginFormContainerCssClassName =  `${baseCssClassName}__form-container`;
const loginFormCssClassName =  `${baseCssClassName}__form`;
const loginSubmitButtonCssClassName =  `${baseCssClassName}__submit-button`;
const signUpFeatureFormCssClassName =  `${baseCssClassName}__signup-feature`;
const signUpButtonContainerCssClassName =  `${baseCssClassName}__signup-button-container`;


function Login () {
	return (
		<div className={baseCssClassName}>
			<PageTitle title={'Sign in to Brackets'} />
			<Row>
				<Col md={6}>
					<div className={loginFormContainerCssClassName}>
						<form action={''} class={loginFormCssClassName}>
							<FormGroup>
								<ControlLabel>Username</ControlLabel>
								<InputGroup>
									<InputGroup.Addon>
										<FontAwesome name={'user'} />
									</InputGroup.Addon>
									<FormControl
										type={'text'}
										placeholder={'User ID'}
									/>
								</InputGroup>
							</FormGroup>

							<FormGroup>
								<ControlLabel>Password</ControlLabel>
								<InputGroup>
									<InputGroup.Addon>
										<FontAwesome name={'lock'} />
									</InputGroup.Addon>
									<FormControl
										type={'password'}
										placeholder={'Password'}
									/>
								</InputGroup>
							</FormGroup>

							<Checkbox>
								Remember me
							</Checkbox>
							<HelpBlock>(If this is a personal computer)</HelpBlock>

							<Button
								bsStyle={'success'}
								type={'submit'}
							>
								Sign In
							</Button>
						</form>
					</div>
					

				</Col>
				<Col md={6}>
					<h2>
						Connect with traders and the<br/>world around you on BRACKETS.
					</h2>
					<div className={signUpFeatureFormCssClassName}>
						<Row>
							<Col md={4}>i</Col>
							<Col md={8}>Secure International Trade Contracts</Col>
						</Row>
					</div>

					<div className={signUpFeatureFormCssClassName}>
						<Row>
							<Col md={4}>i</Col>
							<Col md={8}>Access credit insurance and guarantee payment</Col>
						</Row>
					</div>

					<div className={signUpFeatureFormCssClassName}>
						<Row>
							<Col md={4}>i</Col>
							<Col md={8}>Connect with Buyers & Sellers Worldwide</Col>
						</Row>
					</div>

					<div className={signUpButtonContainerCssClassName}>
						<Button
							bsStyle={'primary'}
							type={'button'}
						>
							Signup today!
						</Button>
					</div>
				</Col>
			</Row>
		</div>
	);
}

export default Login;
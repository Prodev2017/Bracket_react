import React, { PureComponent } from 'react';
import { browserHistory } from 'react-router';

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
	Alert,
} from 'react-bootstrap';

import FontAwesome from 'react-fontawesome';

import './styles/Login.css';

const baseCssClassName =  'login';
const contentCssClassName =  `${baseCssClassName}__content`;
const loginFormContainerCssClassName =  `${baseCssClassName}__form-container`;
const loginFormCssClassName =  `${baseCssClassName}__form`;
const loginSubmitButtonCssClassName =  `${baseCssClassName}__submit-button`;
const signUpTitleCssClassName =  `${baseCssClassName}__signup-title`;
const signUpFeatureFormCssClassName =  `${baseCssClassName}__signup-feature`;
const signUpFeatureIconFormCssClassName =  `${baseCssClassName}__signup-feature-icon`;
const signUpButtonContainerCssClassName =  `${baseCssClassName}__signup-button-container`;


class Login extends PureComponent {
	
	constructor (props, context) {
		super(props, context);

		this.state = {
			username: '',
			password: '',
			rememberMe: false,
			hasError: false,
		};
	}
	_handleSubmit = (event) => {
		console.log('Login form submit...');
		event.preventDefault();

		this.setState({
			hasError: false,
		});
	
		const {
			username,
			password,
		} = this.state;

		if ( username === 'test' && password === 'test') {			
				console.log('Login success...');
				browserHistory.push('/home');
		}
		else {
			this.setState({
				hasError: true,
			});
		}
	}

	_handleUsernameChange = (event) => {
		this.setState({
			username: event.target.value,
		});
	}

	_handlePasswordChange = (event) => {
		this.setState({
			password: event.target.value,
		});
	}

	_handleRememberMeChange = (event) => {
		this.setState({
			rememberMe: ( event.target.value === 'on' ),
		});
	}

	render () {
		return (
			<div className={baseCssClassName}>
				{ this.state.hasError &&
				(
					<Alert bsStyle={'danger'}><strong>Error</strong> Invalid login information</Alert>
				)
				}
				<PageTitle title={'Sign in to Brackets'} />
				<div className={contentCssClassName}>
					<div className={'container'}>
						<Row>
							<Col md={6}>
								<div className={loginFormContainerCssClassName}>
									<form
										action={''}
										className={loginFormCssClassName}
										onSubmit={this._handleSubmit}
									>
										<FormGroup>
											<ControlLabel>Username</ControlLabel>
											<InputGroup>
												<InputGroup.Addon>
													<FontAwesome name={'user'} />
												</InputGroup.Addon>
												<FormControl
													type={'text'}
													placeholder={'User ID'}
													value={this.state.username}
													onChange={this._handleUsernameChange}
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
													value={this.state.password}
													onChange={this._handlePasswordChange}
												/>
											</InputGroup>
										</FormGroup>

										<Checkbox>Remember me</Checkbox>
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
								<h2 className={signUpTitleCssClassName}>
									Connect with traders and the<br/>world around you on BRACKETS.
								</h2>
								<div className={signUpFeatureFormCssClassName}>
									<div className={signUpFeatureIconFormCssClassName}>
										<FontAwesome name={'cubes'} />
									</div>
									Secure International Trade Contracts
								</div>

								<div className={signUpFeatureFormCssClassName}>
									<div className={signUpFeatureIconFormCssClassName}>
										<FontAwesome name={'exchange'} />
									</div>
									Access credit insurance and guarantee payment
								</div>

								<div className={signUpFeatureFormCssClassName}>
									<div className={signUpFeatureIconFormCssClassName}>
										<FontAwesome name={'globe'} />
									</div>
									Connect with Buyers & Sellers Worldwide
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
				</div>
			</div>
		);
	}
}

export default Login;

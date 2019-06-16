import React from 'react';
import signInForm from '../../redux/signIn.json';
import registrationForm from '../../redux/registration.json';
import defaultForm from '../../redux/initialState.json';

interface IProps {
	handleClick?: (json: object) => {};
}

const FormPreview: React.FC<IProps> = ({ handleClick }): JSX.Element => {
	const _handleClick = (json: object): object => {
		if (!handleClick) return {};
		return handleClick(json);
	};
	return (
		<div>
			<div onClick={() => _handleClick(signInForm)} className="waves-effect waves-light btn">
				SignIn Form
			</div>
			<div onClick={() => _handleClick(registrationForm)} className="waves-effect waves-light btn">
				Registration Form
			</div>
			<div onClick={() => _handleClick(defaultForm)} className="waves-effect waves-light btn">
				Default Form
			</div>
		</div>
	);
};

export default FormPreview;

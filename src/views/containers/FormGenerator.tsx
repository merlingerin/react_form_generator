import React from 'react';
import InputFabric from '../components/InputFabric';
import _ from 'lodash';
import { connect } from 'react-redux';
import { FormButton, FormHint, FormTitle } from '../components/FormGenerator';

const uuidv1 = require('uuid/v1');

interface IProps {
	error: string;
	config: string;
}

const FormGenerator: React.FC<IProps> = ({ error, config }) => {
	return (
		<>
			<div className="row">
				<div className="col s12">
					<br />
					<code>Result</code>
					{!error && renderFormElements(config, error)}
				</div>
			</div>
		</>
	);
};

/**
|--------------------------------------------------
| Render form elements
|--------------------------------------------------
*/
const renderFormElements = (text: string, error: string): JSX.Element | null => {
	if (!error) {
		try {
			const object = JSON.parse(text);
			const { form_items, form_title, form_buttons } = object;
			return (
				<>
					{form_title && renderFormTitle(form_title)}
					{form_items && renderFormInputsList(form_items)}
					<div>{form_buttons && renderFormButtonsList(form_buttons)}</div>
					{!form_items && (
						<FormHint text={`Warning! ==> JSON form config doesn't have fields "form_items";`} />
					)}
					{!form_title && (
						<FormHint text={`Warning! ==> JSON form config doesn't have fields "form_title";`} />
					)}
					{!form_buttons && (
						<FormHint text={`Warning! ==> JSON form config doesn't have fields "form_buttons";`} />
					)}
				</>
			);
		} catch (err) {
			return null;
		}
	}
};

/**
|--------------------------------------------------
| Render form input component
|--------------------------------------------------
*/
const renderFormInput = (element: object = {}): JSX.Element => {
	if (!_.isObject(element)) {
		return null;
	}

	const defaultInputTypes = {
		text: 'text',
		password: 'password',
		email: 'email',
		number: 'number',
		date: 'date',
		radio: 'radio',
		checkbox: 'checkbox',
		textarea: 'textarea',
	};

	const getType = _.get(element, 'type', undefined);
	const eType = defaultInputTypes[getType];
	const eLabel = _.get(element, 'label', undefined);
	const eName = _.get(element, 'name', undefined);
	const eClass = _.get(element, 'styleClass', undefined);

	if (!eType || !eLabel || !eName) {
		return <FormHint text={'Error ==> Item fields "type", "label", "name" are required.'} />;
	}
	const elementParams = {
		id: uuidv1(),
		name: eName,
		type: eType,
		label: eLabel,
		styleClass: eClass,
	};

	return InputFabric[eType](elementParams);
};

/**
|--------------------------------------------------
| Render form title
|--------------------------------------------------
*/
const renderFormTitle = (title: string) => {
	if (typeof title !== 'string') {
		return null;
	}
	return <FormTitle title={title} />;
};

/**
|--------------------------------------------------
| Render form buttons list
|--------------------------------------------------
*/
const renderFormButtonsList = (buttons: [] = []) =>
	_.map(buttons, (button: { title: string }) => {
		if (!button.title) {
			return <FormHint text={'Error ==> Button field "title" is required.'} />;
		}
		const id = uuidv1();
		return <FormButton key={id} {...{ id, title: button.title }} />;
	});

/**
|--------------------------------------------------
| Render List of form inputs
|--------------------------------------------------
*/
const renderFormInputsList = (items: []) => _.map(items, (item) => renderFormInput(item));

const mapState = (state) => ({
	config: state.config,
	error: state.error,
});

const mapDispatch = ({ config: { setConfig }, error: { setError } }) => ({
	setConfig,
	setError,
});

export default connect(
	mapState,
	mapDispatch
)(FormGenerator);

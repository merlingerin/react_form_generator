import React, { useState } from 'react';
import { connect } from 'react-redux';
import ErrorHighlighter from '../components/ErrorHighlighter';
import JSONPretty from 'react-json-pretty';
import { form_schema } from '../../schemas';
import { get, map } from 'lodash';
import Joi from '@hapi/joi';
import { FormHint } from '../components/FormGenerator';
import FormPreview from '../components/FormPreview';

interface IProps {
	error: string;
	config: string;
	validationError: [];
	setError: (str: string) => any;
	setConfig: (str: string) => any;
	setValidationError: (errors: []) => any;
	resetValidationError: () => any;
}

const ConfigForm: React.FC<IProps> = ({
	error,
	config,
	setError,
	setConfig,
	setValidationError,
	resetValidationError,
	validationError,
}) => {
	const [caretIndex, setIndex] = useState(null);

	const _handleChangeConfigTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>): string => {
		setError('');
		resetValidationError();

		if (!event) {
			return '';
		}

		const {
			target: { value },
		} = event;
		if (value.length > 0) {
			try {
				const errors: [] = get(
					Joi.validate(JSON.parse(value), form_schema),
					'error.details',
					undefined
				);

				if (errors) {
					setValidationError(errors);
				}
				JSON.parse(value);
				setConfig(value);
			} catch (err) {
				setIndex(event.target.selectionStart);
				setConfig(value);
				setError(err.message || 'ERROR');
			}
		} else {
			setConfig('');
		}

		return value;
	};

	const setPreviewForm = (json: object): any => {
		if (!json) {
			return false;
		}
		return setConfig(JSON.stringify(json));
	};

	return (
		<>
			<div className="col s12">
				<br />
				<code>Enter JSON:</code>
			</div>
			<div className="col s12">
				<div className="row">
					<div className="col s12">
						<div className="row">
							<div className="col s6">
								<div className="textarea-container">
									<textarea
										name="config-form"
										id="config-form"
										className="config-form"
										placeholder="Write your config JSON ..."
										cols={50}
										rows={50}
										onChange={_handleChangeConfigTextArea}
										value={config}
										autoCorrect="false"
									/>
									<ErrorHighlighter {...{ config, error, index: caretIndex }} />
									<FormPreview handleClick={setPreviewForm} />
								</div>
							</div>
							<div className="col s6">
								<div className="prettier-container">
									{!error && !validationError && <JSONPretty id="json-pretty" data={config} />}
									{validationError &&
										map(validationError, (error: { message: string }) => (
											<FormHint key={error.message} text={`Opps ==> ${error.message}`} />
										))}
									{error && (
										<div>
											<code className="red">{error}</code>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

const mapState = (state) => ({
	config: state.config,
	error: state.error,
	validationError: state.validationError,
});

const mapDispatch = ({
	config: { setConfig },
	error: { setError },
	validationError: { setValidationError, resetValidationError },
}) => ({
	setConfig,
	setValidationError,
	setError,
	resetValidationError,
});

export default connect(
	mapState,
	mapDispatch
)(ConfigForm);

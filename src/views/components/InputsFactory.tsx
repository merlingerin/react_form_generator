import React from 'react';

interface IProps {
	styleClass: string;
	id: string | number;
	label: string;
	type: string;
	name: string;
}

const createTextInput: React.FC<IProps> = (params) => (
	<div className={`input-container ${params.styleClass && params.styleClass}`} key={params.id}>
		<label htmlFor={params.name}>
			<span>{params.label}</span>
			<input name={params.label} type={params.type} />
		</label>
	</div>
);

const createNumberInput: React.FC<IProps> = (params) => (
	<div className={`input-container ${params.styleClass && params.styleClass}`} key={params.id}>
		<label htmlFor={params.name}>
			<span>{params.label}</span>
			<input name={params.label} type={params.type} />
		</label>
	</div>
);

const createDateInput: React.FC<IProps> = (params) => (
	<div className={`input-container ${params.styleClass && params.styleClass}`} key={params.id}>
		<label htmlFor={params.name}>
			<span>{params.label}</span>
			<input name={params.label} type={params.type} />
		</label>
	</div>
);

const createRadioInput: React.FC<IProps> = (params) => (
	<div className={`input-container ${params.styleClass && params.styleClass}`} key={params.id}>
		<label>
			<input name={params.name} type={params.type} />
			<span>{params.label}</span>
		</label>
	</div>
);

const createCheckboxInput: React.FC<IProps> = (params) => (
	<div className={`input-container ${params.styleClass && params.styleClass}`} key={params.id}>
		<label>
			<input name={params.label} type={params.type} />
			<span>{params.label}</span>
		</label>
	</div>
);

const createTextarea: React.FC<IProps> = (params) => (
	<div className={`input-container ${params.styleClass && params.styleClass}`} key={params.id}>
		<label htmlFor={params.name}>{params.label}</label>
		<textarea id={params.name} className="materialize-textarea" />
	</div>
);

const createPasswordInput: React.FC<IProps> = (params) => (
	<div className={`input-container ${params.styleClass && params.styleClass}`} key={params.id}>
		<label htmlFor={params.name}>
			<span>{params.label}</span>
			<input name={params.label} type={params.type} />
		</label>
	</div>
);

const createEmailInput: React.FC<IProps> = (params) => (
	<div className={`input-container ${params.styleClass && params.styleClass}`} key={params.id}>
		<label htmlFor={params.name}>
			<span>{params.label}</span>
			<input name={params.label} type={params.type} />
		</label>
	</div>
);

const InputsFactory= {
	text: createTextInput,
	password: createPasswordInput,
	email: createEmailInput,
	number: createNumberInput,
	date: createDateInput,
	radio: createRadioInput,
	checkbox: createCheckboxInput,
	textarea: createTextarea,
};

export default InputsFactory;

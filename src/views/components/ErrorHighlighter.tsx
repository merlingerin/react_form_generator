import React from 'react';
import { map } from 'lodash';

/**
|--------------------------------------------------
| Wrap text and create array with span's elements
|--------------------------------------------------
*/
const wrapText = (str: string): JSX.Element[] | null => {
	if (typeof str !== 'string') {
		return null;
	}
	const splitedText: string[] = str.split('');
	const wrappedText = map(splitedText, (symbol, idx) => (
		<span key={idx} className={`elem-${idx}`}>
			{symbol}
		</span>
	));
	return wrappedText;
};

/**
|--------------------------------------------------
| Parse error, reate css styles string
|--------------------------------------------------
*/
const inserError = (error: string, index: number): string => {
	if (!error || index === null) {
		return '';
	}

	return `.error-hightlighter span:nth-child(${index}),.error-hightlighter span:nth-child(${index +
		1}), .error-hightlighter span:nth-child(${index - 1}) {background-color: #c51;}`;
};

/**
|--------------------------------------------------
| Error highlighter component
|--------------------------------------------------
*/

interface IErrorHighlighter {
	config: string;
	error: string;
	index: number | null;
}

const ErrorHighlighter: React.FC<IErrorHighlighter> = ({ config, error, index }) => {
	return (
		<>
			<div className="error-hightlighter">{wrapText(config)}</div>
			<style>{inserError(error, index)}</style>
		</>
	);
};

export default ErrorHighlighter;

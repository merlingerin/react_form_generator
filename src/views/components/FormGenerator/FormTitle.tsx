import React from 'react';

export const FormTitle: React.FC<{ title: string }> = ({ title }) => {
	if (typeof title !== 'string') {
		return null;
	}
	return <h5>{title}</h5>;
};

import React, { memo, Fragment } from 'react';

const ErrorModal = memo(({ onClose, children }) => (
	<Fragment>
		<div className="backdrop" onClick={onClose} />
		<div className="error-modal">
			<h2>An Error Occurred!</h2>
			<p>{children}</p>
			<div className="error-modal__actions">
				<button type="button" onClick={onClose}>
					Okay
				</button>
			</div>
		</div>
	</Fragment>
));

export default ErrorModal;

import {Transition} from 'react-router';

export const auth:ClassDecorator = (target:any) => {
	target.willTransitionTo = function (transition:Transition) {
		console.log('transition', this, transition);
	};
	return target;
};
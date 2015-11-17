type SimpleArgumentFunction = (...args:Array<string|number>) => any;

export const memoize:MethodDecorator = (target:Object,
                                        propertyKey:string,
                                        descriptor:TypedPropertyDescriptor<SimpleArgumentFunction>) => {
	const storage:any = {};
	const original = descriptor.value;
	descriptor.value = function () {
		const args = Array.prototype.slice.call(arguments);
		const key:string = JSON.stringify(args);
		let result:any = storage[key];
		if (typeof result === 'undefined') {
			result = storage[key] = original.apply(this, args);
		}
		return result;
	};
	return descriptor;
};
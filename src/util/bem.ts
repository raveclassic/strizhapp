interface IModifiers {
	[key:string]:boolean;
}

export function block(name:string, modifiers:IModifiers = {}):string {
	return modify(name, modifiers);
}

export function element(blockName:string, name:string, modifiers:IModifiers = {}):string {
	return modify(`${blockName}--${name}`, modifiers);
}

export function modifier(name:string, modifier:string):string {
	return `${name}-${modifier}`;
}

function modify(name:string, modifiers:IModifiers):string {
	const filtered = Object.keys(modifiers).filter(key => !!modifiers[key]);
	return [name].concat(filtered.map(m => {
		return modifier(name, m);
	})).join(' ');
}

function bem(blockName:string, elementOrModifiers:string):string;
function bem(blockName:string, elementOrModifiers:IModifiers):string;
function bem(blockName:string, elementOrModifiers:string, elementModifiers?:IModifiers):string;
function bem(blockName:string, elementOrModifiers?:string|IModifiers, elementModifiers?:IModifiers):string {
	if (typeof elementOrModifiers === 'string') {
		//block--element || block--element-modifiers
		return element(blockName, elementOrModifiers, elementModifiers);
	} else if (!!elementOrModifiers && typeof elementOrModifiers === 'object') {
		//block-modifiers
		return block(blockName, elementOrModifiers);
	}
}

export default bem;
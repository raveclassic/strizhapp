import React = __React;

declare namespace __MaterialUI {
	/*tslint:disable namespace-name*/
	interface DialogProps {
		open?: boolean;
		onRequestClose?: Function;
	}

	interface LeftNav {
		toggle: Function;
	}
}

declare module 'material-ui' {

}

declare module 'material-ui/lib/svg-icons/device/access-time' {
	interface IDeviceAcessTimeProps extends React.Props<DeviceAccessTime> {
		style?: Object;
	}
	class DeviceAccessTime extends React.Component<IDeviceAcessTimeProps, any> {
	}
	export = DeviceAccessTime;
}

declare module 'material-ui/lib/svg-icons/communication/location-on' {
	interface ICommunicationLocationOnProps extends React.Props<CommunicationLocationOn> {
		style?: Object;
	}
	class CommunicationLocationOn extends React.Component<ICommunicationLocationOnProps, any> {
	}
	export = CommunicationLocationOn;
}

declare module 'material-ui/lib/svg-icons/editor/attach-money' {
	interface IEditorAttachMoneyProps extends React.Props<EditorAttachMoney> {
		style?: Object;
	}
	class EditorAttachMoney extends React.Component<IEditorAttachMoneyProps, any> {
	}
	export = EditorAttachMoney;
}

declare module 'material-ui/lib/svg-icons/action/search' {
	interface IActionSearchProps extends React.Props<ActionSearch> {
		style?: Object;
	}
	class ActionSearch extends React.Component<IActionSearchProps, any> {
	}
	export = ActionSearch;
}
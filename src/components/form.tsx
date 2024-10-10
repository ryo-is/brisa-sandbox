import type { RequestContext } from 'brisa';
import { rerenderInAction } from 'brisa/server';

export function FormSample({ defaultValue = '' }, { store }: RequestContext) {
	if (!store.has('textInput')) store.set('textInput', defaultValue);
	store.transferToClient(['textInput']);

	const onChange = (text: string) => {
		store.set('textInput', text);
		rerenderInAction();
	};

	return (
		<div>
			<input
				type="text"
				value={store.get('textInput')}
				onChange={(e) => onChange(e.currentTarget.value)}
			/>
			<div>testInput: {store.get('textInput')}</div>
		</div>
	);
}

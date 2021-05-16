import { atom, selector } from 'recoil';

export const todoListState = atom({
	key: 'todoListState',
	default: []
});

export const todoListFilterState = atom({
	key: 'todoListFilterState',
	default: 'Show All'
});

export const filteredTodoListState = selector({
	key: 'filteredTodoListState',
	get: ({ get }) => {
		const filter = get(todoListFilterState);
		const list = get(todoListState);

		switch (filter) {
			case 'Show Completed':
				return list.filter((item) => item.completed);
			case 'Show Uncompleted':
				return list.filter((item) => !item.completed);
			default:
				return list;
		}
	}
});

export const searchFieldTodoListState = atom({
	key: 'searchFieldTodoListState',
	default: ''
});

export const filteredSearchFieldTodoListState = selector({
	key: 'filteredSearchFieldTodoListState',
	get: ({ get }) => {
		const searchValue = get(searchFieldTodoListState);
		const list = get(filteredTodoListState);
		const regex = new RegExp(`^${searchValue}`, 'gi');

		return list.filter((item) => item.title.match(regex));
	}
});

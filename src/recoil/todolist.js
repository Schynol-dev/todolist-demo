import { atom } from 'recoil';

export const todoListState = atom({
	key: 'todoListState',
	default: [
		{
			completed: false,
			created_at: '2021-05-14T03:50:04.219+05:30',
			id: 24,
			title: 'Cruciamentum confido corroboro adultus vivo quos.',
			updated_at: '2021-05-14T21:14:04.227+05:30',
			user_id: 16
		}
	]
});

import { useState } from 'react';
import { nanoid } from 'nanoid';
import ListUsers from '../ListUsers';
import { Button, Input } from '@mui/material';
import style from './Form.module.scss';
const Form = () => {
	const [name, setName] = useState();
	const [number, setNumber] = useState();
	const [user, setUser] = useState([]);

	const handleChangeInputName = e => {
		setName(e.target.value);
	};

	const handleChangeInputNumber = e => {
		setNumber(e.target.value);
	};

	const addUserTelephoneBook = () => {
		setUser([
			...user,
			{
				id: nanoid(),
				name: name,
				number: number,
			},
		]);
		setNumber('');
		setName('');
	};

	const removeUser = id => {
		const deleteuser = user.filter(item => item.id !== id);
		setUser(deleteuser);
	};

	const editUser = (id, e, edit) => {
		setUser(
			user.map(item => {
				if (item.id !== id) return item;
				return edit;
			})
		);
	};

	return (
		<div>
			<div className={style.form}>
				<h1>Telephone Book</h1>
				<Input
					className={style.form__input}
					type="text"
					placeholder="Name"
					onChange={handleChangeInputName}
					value={name}
				/>
				<Input
					className={style.form__input}
					type="number"
					placeholder="telephone number"
					onChange={handleChangeInputNumber}
					value={number}
				/>
				<Button varian="text" className={style.form__button} onClick={addUserTelephoneBook}>
					Add
				</Button>
			</div>
			<div>
				{user !== undefined
					? user.map(item => (
							<ListUsers
								user={item}
								id={item.id}
								remove={removeUser}
								setUser={setUser}
								editUser={editUser}
								key={item.id}
							/>
					  ))
					: null}
			</div>
		</div>
	);
};

export default Form;

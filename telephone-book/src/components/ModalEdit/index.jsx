import { Modal, Box, Typography } from '@mui/material';
import { useState } from 'react';
import { Button, Input } from '@mui/material';
import style from './ModalEdit.module.scss';

const ModalEdit = ({ open, handleClose, user, editUser }) => {
	const [edit, setEdit] = useState(user);

	const change = e => {
		setEdit({ ...edit, [e.target.name]: e.target.value });
	};

	const clickHandlerEditUsers = e => {
		editUser(user.id, e, edit);
		handleClose();
	};

	return (
		<Modal open={open} onClose={handleClose}>
			<Box className={style.modal}>
				<div className={style.title}>
					<p>Edit user</p>
				</div>
				<div className={style.form}>
					<Input
						className={style.form__input}
						name="name"
						type="text"
						placeholder="Name"
						value={edit.name}
						onChange={e => change(e, edit.id)}
					/>
					<Input
						name="number"
						className={style.form__input}
						type="number"
						placeholder="telephone number"
						value={edit.number}
						onChange={e => change(e, edit.id)}
					/>
					<Button className={style.form__button} varian="text" onClick={e => clickHandlerEditUsers(e)}>
						Add
					</Button>
				</div>
			</Box>
		</Modal>
	);
};

export default ModalEdit;

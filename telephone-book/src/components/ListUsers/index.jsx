import { useState } from 'react';
import ModalEdit from '../ModalEdit';
import style from './ListUsers.module.scss';
import deleteIcon from '../../assets/image/deleteIcon.png';
import editIcon from '../../assets/image/editIcon.png';

const ListUsers = ({ user, id, remove, setUser, editUser, change, edit, setEdit }) => {
	const [open, setOpen] = useState(false);

	const handleClose = () => setOpen(false);
	const clickHandlerModal = () => setOpen(true);
	return (
		<div className={style.list}>
			<p>{user.name}</p>
			<p>{user.number}</p>
			<img src={deleteIcon} alt="delete" onClick={() => remove(id)} />
			<img src={editIcon} alt="edit" onClick={clickHandlerModal} />
			<ModalEdit open={open} handleClose={handleClose} user={user} setUser={setUser} editUser={editUser} />
		</div>
	);
};

export default ListUsers;

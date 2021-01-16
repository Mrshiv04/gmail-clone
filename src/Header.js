import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AppsIcon from '@material-ui/icons/Apps';
import { logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';

function Header() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	const signOut = () => {
		auth.signOut().then(() => {
			dispatch(logout());
		});
	};

	return (
		<div className='header'>
			<div className='header_left'>
				<IconButton>
					<MenuIcon />
				</IconButton>
				<img
					src='https://cdn.vox-cdn.com/thumbor/9SvBnlIrQ82W2pbwmriNumdd0g4=/0x0:1320x880/1220x813/filters:focal(555x335:765x545):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67587450/newgmaillogo.0.jpg'
					alt='brand_logo'
				/>
			</div>
			<div className='header_middle'>
				<SearchIcon />
				<input placeholder='Search mail' type='text' />
				<ArrowDropDownIcon className='header_inputCaret' />
			</div>
			<div className='header_right'>
				<IconButton>
					<HelpOutlineOutlinedIcon />
				</IconButton>
				<IconButton>
					<SettingsOutlinedIcon />
				</IconButton>
				<IconButton>
					<AppsIcon />
				</IconButton>
				<Avatar
					style={{ cursor: 'pointer' }}
					src={user?.photoUrl}
					alt='user_logo'
					onClick={signOut}
				/>
			</div>
		</div>
	);
}

export default Header;

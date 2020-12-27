import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AppsIcon from '@material-ui/icons/Apps';

function Header() {
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
					src='https://avatars2.githubusercontent.com/u/61186385?s=400&u=bee5bca812b24d015b0e20f8ecd1d6f3e297bbcb&v=4'
					alt='user_logo'
				/>
			</div>
		</div>
	);
}

export default Header;

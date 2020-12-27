import { Button, IconButton } from '@material-ui/core';
import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SendIcon from '@material-ui/icons/Send';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';

function Sidebar() {
	return (
		<div className='sidebar'>
			<Button
				startIcon={<AddIcon fontSize='large' />}
				className='sidebar_compose'
			>
				Compose
			</Button>
			<SidebarOption
				Icon={InboxIcon}
				title='Inbox'
				number={54}
				selected={true}
			/>
			<SidebarOption Icon={StarIcon} title='Starred' number={54} />
			<SidebarOption Icon={AccessTimeIcon} title='Snoozed' number={54} />
			<SidebarOption Icon={SendIcon} title='Sent' number={54} />
			<SidebarOption Icon={LabelImportantIcon} title='Important' number={5} />
			<SidebarOption Icon={InsertDriveFileIcon} title='Draft' number={21} />
			<SidebarOption Icon={ExpandMoreIcon} title='More' number='' />
			<div className='sidebarOption_footer'>
				<div className='sidebarFooter_icons'>
					<IconButton>
						<PersonIcon />
					</IconButton>
					<IconButton>
						<DuoIcon />
					</IconButton>
					<IconButton>
						<PhoneIcon />
					</IconButton>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;

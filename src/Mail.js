import React from 'react';
import './Mail.css';
import { IconButton } from '@material-ui/core';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import DraftsIcon from '@material-ui/icons/Drafts';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import PrintIcon from '@material-ui/icons/Print';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ReplyIcon from '@material-ui/icons/Reply';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectOpenMail } from './features/mailSlice';

function Mail() {
	const history = useHistory();
	const selectedMail = useSelector(selectOpenMail);

	return (
		<div className='mail'>
			<div className='mail_tools'>
				<div className='mail_toolsLeft'>
					<IconButton onClick={() => history.push('/')}>
						<ArrowBackOutlinedIcon />
					</IconButton>
					<IconButton>
						<MoveToInboxIcon />
					</IconButton>
					<IconButton>
						<ErrorIcon />
					</IconButton>
					<IconButton>
						<DeleteIcon />
					</IconButton>
					<IconButton>
						<DraftsIcon />
					</IconButton>
					<IconButton>
						<WatchLaterIcon />
					</IconButton>
					<IconButton>
						<CheckCircleIcon />
					</IconButton>
					<IconButton>
						<LabelImportantIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
				<div className='mail_toolsRight'>
					<IconButton>
						<UnfoldMoreIcon />
					</IconButton>
					<IconButton>
						<PrintIcon />
					</IconButton>
					<IconButton>
						<ExitToAppIcon />
					</IconButton>
				</div>
			</div>
			<div className='mail_body'>
				<div className='mail_bodyHeader'>
					<h2>{selectedMail?.subject}</h2>
					<LabelImportantIcon className='mail_important' />
					<p>{selectedMail?.title}</p>
					<div className='mail_star'>
						<StarBorderIcon />
					</div>
					<div className='mail_reply'>
						<ReplyIcon />
					</div>
					<div className='mail_option'>
						<MoreVertIcon />
					</div>
					<p className='mail_time'>{selectedMail?.time}</p>
				</div>
				<div className='mail_message'>
					<p>{selectedMail?.description}</p>
				</div>
			</div>
		</div>
	);
}

export default Mail;

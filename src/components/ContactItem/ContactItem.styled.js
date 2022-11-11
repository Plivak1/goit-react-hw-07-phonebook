import styled from 'styled-components';

export const LiContactItem = styled.li`
	border: 2px solid #b292d3;
	background: #ebf3fa3f;
	position: relative;
	margin-bottom: 20px;
	padding: 16px 10px;
	color: #720e9e;

	:hover {
		z-index: 1;
	}

	:before {
		border: 2px solid #b292d3;
		position: absolute;
		top: -14px;
		padding: 2px 10px;
		font-size: 11px;
		font-weight: bold;
		color: #b292d3;
		background: #f7fafd;
		counter-increment: li;
		content: counter(li);
		-webkit-transition-duration: 0.3s;
		transition-duration: 0.3s;
	}

	:hover:before {
		background: #b292d3;
		color: #fff;
		-webkit-transform: translate(-12px, 0);
		-ms-transform: translate(-12px, 0);
		-o-transform: translate(-12px, 0);
		transform: translate(-12px, 0);
	}

	:after {
		content: '';
		position: absolute;
		-webkit-transition-duration: 0.4s;
		transition-duration: 0.4s;
		-webkit-transition-property: width;
		transition-property: width;
		z-index: -1;
		background: #e0e5ea83;
		height: 100%;
		left: 0;
		top: 0;
		width: 0;
	}

	:hover:after {
		width: 100%;
	}
`;

export const BtnDelete = styled.button`
	margin-left: 20px;
	width: 20px;
	height: 20px;

	position: absolute;
	top: 15px;
	right: 20px;
	width: 24px;
	height: 24px;
	opacity: 0.2;
	cursor: pointer;
	transition: opacity ease 0.5s;

	&:hover {
		opacity: 1;
	}

	::before,
	::after {
		content: '';
		position: absolute;
		top: 8px;
		left: -2px;
		width: 24px;
		height: 3px;
		background: #b292d3;
		display: block;
		/* display: ${props => {
			if (props.onLoad) {
				return 'none';
			} else {
				return 'block';
			}
		}}; */
	}

	::before {
		transform: rotate(45deg);
	}

	::after {
		transform: rotate(-45deg);
	}
`;

import { Form, Field } from 'formik';
import styled from 'styled-components';

export const ErrorText = styled.p`
	color: #ed7a84c8;
	text-transform: lowercase;
	font-size: 15px;
`;

export const FormContacts = styled(Form)`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const Label = styled.label`
	display: block;
	margin-top: 10px;
	padding: 5px 10px;
	font-size: 15px;
	font-weight: 600;
	color: #fff;
	text-transform: uppercase;

	background-image: linear-gradient(
		180deg,
		rgba(105, 2, 210, 1) 0%,
		rgba(106, 53, 156, 1) 15%,
		rgba(181, 137, 214, 1) 55%,
		rgba(183, 163, 203, 1) 100%
	);

	color: transparent;
	background-clip: text;
	-webkit-background-clip: text;
`;

export const Input = styled(Field)`
	display: block;
	width: 93%;
	margin: auto;
	padding: 13px;
	margin-top: 20px;

	box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
		rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
		rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

	outline: none;
	border: 0;

	border-radius: 20px;

	font-family: 'Roboto', sans-serif;

	background: rgb(245, 229, 152);
	background: linear-gradient(
		270deg,
		rgba(245, 229, 152, 0.5333634918811274) 0%,
		rgba(246, 246, 203, 0.7550520696559874) 36%,
		rgba(255, 254, 203, 1) 75%,
		rgba(254, 255, 216, 1) 100%
	);

	color: #553c9a;

	:-webkit-autofill {
		transition: all 5000s ease-in-out 0s;
	}
`;

export const BtnBox = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 10px;
`;

export const Button = styled.button`
	margin-top: 20px;
	width: 120px;
	height: 40px;
	padding: 5px;

	font-size: 14px;
	font-weight: 700;

	opacity: 1;
	background: #ebf3fa3f;
	background-image: linear-gradient(to left, #720e9e, #b393d3);
	background-image: #720e9e;
	border: 2px solid #b292d3;

	color: transparent;
	background-clip: text;
	-webkit-background-clip: text;

	cursor: pointer;
	transition: transform 250ms linear;

	:hover {
		transform: scale(1.1);
	}

	:disabled {
		opacity: 0.5;
		transform: scale(1);
	}
`;

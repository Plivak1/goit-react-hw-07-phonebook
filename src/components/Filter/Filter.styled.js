import styled from 'styled-components';

export const LabelFilter = styled.label`
	display: block;
	margin-top: 10px;
	padding: 5px 10px;
	font-size: 15px;
	font-weight: 600;
	/* color: #fff; */
	text-transform: uppercase;

	background-image: linear-gradient(to left, #553c9a, #ad8de0);
	color: transparent;
	background-clip: text;
	-webkit-background-clip: text;
`;

export const InputFilter = styled.input`
	display: block;
	width: 93%;
	margin: auto;
	margin-top: 20px;
	margin-bottom: 20px;
	padding: 13px;

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
`;

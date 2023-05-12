import React from "react";
import styled from "styled-components";

/*---------Container---------*/

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	flex: 1.6;
	margin: 0px 30px 0px 0px;
`;

/*---------Profile Header---------*/

const ProfileHeader = styled.div`
	display: flex;
	background: #e8eee9;
	height: 163px;
`;

const DaisyTitle = styled.h1`
	display: flex;
	align-items: center;
	color: #085f6d;
	padding-left: 30px;
`;

const DaisyContainer = styled.div`
	background: #085f6d;
	height: 100%;
`;

/*---------Daisy chat---------*/

const DaisyChat = styled.div`
	margin: 30px 0px 20px 40px;
	border-radius: 20px 20px 0px 20px;
	width: 1000px;
	height: 80px;
	background-color: white;
`;

const DaisyText = styled.h3`
	padding: 10px 20px;
`;

/*--------------ConversationComponent--------------*/

const ConversationComponent = () => {
	return (
		<Container>
			<ProfileHeader>
				<DaisyTitle>Daisy</DaisyTitle>
			</ProfileHeader>
			<DaisyContainer>
				<DaisyChat>
					<DaisyText>De que hablas? Estamos jugando juntos...</DaisyText>
				</DaisyChat>
			</DaisyContainer>
		</Container>
	);
};
export default ConversationComponent;

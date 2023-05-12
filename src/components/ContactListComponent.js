import react, { useState } from "react";
import styled from "styled-components";
import React from "react";

/*---------Import images---------*/

import marioImg from "../assets/images/mariobross.jpg";

import searchImg from "../assets/images/search.jpg";

import settingImg from "../assets/images/icon.jpg";

import luigiImg from "../assets/images/luigi.jpg";

import daisyImg from "../assets/images/daisy.jpg";

import ticketAbierto from "../assets/images/opened-ticket.png";

import ticketCerrado from "../assets/images/closed-ticket.png";

/*---------Container---------*/

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	flex: 1;
	margin: 0px 0px 0px 30px;
	background: white;
`;

/*---------Profile Mario---------*/

const ProfileInfoDiv = styled.div`
	display: flex;
	flex-direction: row;
	background: #56dd7a;
	padding: 10px;
`;

const ProfileImage = styled.img`
	width: 80px;
	height: 80px;
	border-radius: 50%;
	padding-top: 20px;
`;

const ProfileData = styled.div`
	padding-left: 50px;
`;

const ProfileName = styled.h1`
	color: white;
	margin-bottom: 5px;
`;

const ProfileEmail = styled.p`
	color: white;
`;

const ProfileIcon = styled.img`
	width: 40px;
	height: 40px;
	margin-top: 40px;
	margin-left: 250px;
`;

/*---------Search Box---------*/

const SearchBox = styled.div`
	background: white;
	padding: 35px;
	border-bottom: 1px solid;
`;

const SearchContainer = styled.div`
	display: flex;
	flex-direction: row;
	background: whitesmoke;
	border-radius: 30px;
	width: 95%;
	height: 40px;
	padding: 5px 10px;
`;

const SearchIcon = styled.img`
	width: 25px;
	height: 25px;
	margin-top: 8px;
`;

const SearchInput = styled.input`
	width: 100%;
	outline: none;
	border: none;
	font-size: 15px;
	font-style: italic;
	background: whitesmoke;
`;

/*--------------Luigi and Daisy--------------*/

const Contacts = styled.div`
	background: white;
	display: flex;
	flex-direction: column;
`;

/*---------Luigi data---------*/

const Luigi = styled.div`
	display: flex;
	flex-direction: row;
	height: 105px;
	border-bottom: 1px solid;
	:hover {
		background-color: #d3dde4;
	}
`;
const ImgLuigi = styled.img`
	width: 60px;
	height: 60px;
	border-radius: 50%;
	padding: 20px 0px 10px 15px;
`;

const LuigiName = styled.h1`
	color: black;
	margin: 5px 50px;
`;

const LuigiInfo = styled.p`
	display: flex;
	padding-left: 50%;
	width: 30px;
	height: 20px;
`;

const LuigiChat = styled.h4`
	position: relative;
	margin-top: 60px;
	margin-left: -450px;
`;

/*---------Daisy data---------*/

const Daisy = styled.div`
	display: flex;
	flex-direction: row;
	height: 105px;
	background: #56dd7a;
	:hover {
		background-color: #d3dde4;
	}
`;

const ImgDaisy = styled.img`
	width: 70px;
	height: 70px;
	border-radius: 50%;
	padding: 20px 0px 10px 15px;
`;

const DaisyName = styled.h1`
	color: black;
	margin-left: 90px;
	margin: 5px 40px;
`;

const DaisyChat = styled.h4`
	color: gray;
	margin-top: 60px;
	margin-left: -110px;
`;

/*---------Buttons---------*/

const TicketOne = styled.button`
	width: 200px;
	height: 50px;
	margin-top: 10px;
	margin-left: 450px;
	font-size: large;
	cursor: pointer;
`;

const TicketTwo = styled.button`
	width: 200px;
	height: 50px;
	margin-left: 450px;
	font-size: large;
	cursor: pointer;
`;

/*---------Ticket Open---------*/

const Open = styled.img`
	width: 600px;
	height: 200px;
	margin-top: 10px;
	margin-left: 30px;
`;

/*---------Ticket Close---------*/

const Close = styled.img`
	width: 600px;
	height: 200px;
	margin-top: 10px;
	margin-left: 30px;
`;

/*--------------ContactListComponent--------------*/

const ContactListComponent = () => {

/*---------useState---------*/	
	const [imagen, setImagen] = useState(true);
	const [imagenTwo, setImagenTwo] = useState(true);

	return (
		<Container>
			<ProfileInfoDiv>
				<ProfileImage src={marioImg} />
				<ProfileData>
					<ProfileName>Mario Bross</ProfileName>
					<ProfileEmail>mario@bross.com</ProfileEmail>
				</ProfileData>
				<ProfileIcon src={settingImg} alt="icon" />
			</ProfileInfoDiv>
			<SearchBox>
				<SearchContainer>
					<SearchIcon src={searchImg} alt="search" />
					<SearchInput placeholder="   Buscar en los chats" />
				</SearchContainer>
			</SearchBox>
			<Contacts>
				<Luigi>
					<ImgLuigi src={luigiImg} />
					<LuigiName>Luigi</LuigiName>
					<LuigiInfo>p.m</LuigiInfo>
					<LuigiChat>😉😗...</LuigiChat>
				</Luigi>
				<Daisy>
					<ImgDaisy src={daisyImg} />
					<DaisyName>Daisy</DaisyName>
					<DaisyChat>✔️✔️ De que hablas? Estamos jugando juntos...</DaisyChat>
				</Daisy>
			</Contacts>
			<div>
				<TicketOne onClick={() => setImagen(!imagen)}>
					Ver ticket abierto
				</TicketOne>

				<TicketTwo onClick={() => setImagenTwo(!imagenTwo)}>
					Ver ticket cerrado
				</TicketTwo>

				<div>
					{imagen ? <br></br> : <Open id="one" src={ticketAbierto} alt="" />}

					{imagenTwo ? (
						<br></br>
					) : (
						<Close id="two" src={ticketCerrado} alt="" />
					)}
				</div>
			</div>
		</Container>
	);
};

export default ContactListComponent;

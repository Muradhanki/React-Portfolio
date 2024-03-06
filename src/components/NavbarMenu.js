import React from "react";
import "../styles/footer.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';


const Footer = () => {
 return (
	<div className="footer">
		<div className="socialMedia"> 
		<a target="_blank" href="https://github.com/Muradhanki">
			<GitHubIcon />
			</a> 

			<a target="_blank" href="https://www.linkedin.com/in/muradhan-kilinc-msc-bb056076/">
			<LinkedInIcon />
			</a>

			<a target="_blank" href="mailto: omega0366@gmail.com">
			<EmailIcon />
			</a>
		</div>

		<p> &copy; 2024 MK Portfolio</p>
	</div>
	
  );
}

export default Footer;
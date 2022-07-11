//npm i axios
import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Department() {
	const path = process.env.PUBLIC_URL;
	const [Members, setMembers] = useState([]);

	useEffect(() => {
		axios.get(`${path}/DB/members.json`).then((json) => {
			setMembers(json.data.members);
		});
	}, []);

	useEffect(() => {
		console.log(Members);
	}, [Members]);

	return (
		<Layout name={'Department'}>
			<div className='process'>
				<h2>Process</h2>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro cum
					fuga quam maiores ex mollitia culpa tempora quis minus! In nisi fugiat
					soluta magnam cum.
				</p>
				<img src={`${path}/img/meeting.jpg'`} alt='' />
				<h1>Start a project?</h1>
			</div>
			{Members.map((member, idx) => {
				return (
					<article key={idx}>
						<div className='inner'>
							<h2>Our team</h2>
							<div className='pic'>
								<img src={`${path}/img/${member.pic}`} alt={member.name} />
							</div>
							<h3>{member.name}</h3>
							<p>{member.position}</p>
						</div>
					</article>
				);
			})}
		</Layout>
	);
}

export default Department;

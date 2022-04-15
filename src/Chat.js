import { useState } from 'react'

const channels = [
	'toan hoc va ung dung cuoc song',
	'thao luan ve react',
	'nan giai cua nodejs'
]


function Chat() {
	const [id, setId] = useState()
	const selected = (i) => {
		setId(i)
	}

	const hi = new Event('hello')
	





	return (
		<div>
			<h1>danh sach cac kenh comment</h1>
			<div>
				{channels.map( (channel, i) =>
					<a href="#" key={channel}
						style={ (i === id) ? 
							{
								textDecoration: 'none',
								color: 'red'
							} :
							{
								display: 'block',
								textDecoration: 'none'
							}
						}
						onClick={() => selected(i)}
					>{channel}</a>
				)}
			</div>
		</div>
	)
}

export default Chat;
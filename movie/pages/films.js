import {useState} from 'react'
import {useEffect} from 'react'
import {loadGetInitialProps} from 'next/dist/next-server/lib/utils'

export default function Films({data}) {
	const [films, setFilms] = useState(data)
	const [count, setCount] = useState(1)

	useEffect(() => {
		console.log(count)
	}, [count])

	return (
		<div>
			{films && films.map((el) => {
				return <p key={el.id}>{el.text}</p>
			})}
			{count}
			<button onClick={()=>setCount(count+1)}>add</button>
		</div>
	)
}

export async function getServerSideProps() {
	let data = []
	for (let i = 1; i <= 50; i++) {
		data.push({id: i, text: 'name' + i})
	}

	return {
		props: {data},
	}
}
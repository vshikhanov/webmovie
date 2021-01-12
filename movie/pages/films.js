export default function Films() {
	return (
		<div>
		<div>film</div>
		<style jsx>{`
      p {
        color: blue;
      }

      div {
        background: red;
      }

      @media (max-width: 600px) {
        div {
          background: blue;
        }
      }
		`}</style>
	</div>)
}

export async function getServerSideProps(context) {
	return {
		props: {}, // will be passed to the page component as props
	}
}
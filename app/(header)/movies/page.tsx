// http://localhost:3000/movies/tt123455123
export default async function Movies() {
  await new Promise(resolve => {
    setTimeout(resolve, 2000)
  })
  throw new Error('에러가 발생했습니다!')
  return (
    <>
      <h1>Movies Page!!</h1>
    </>
  )
}

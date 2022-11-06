const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to my page !</h1>
      <img
        style={{
          maxWidth: '100%',
          border: 'solid',
          alignItems: 'center',
          borderRadius: '8px',
          borderWidth: '4px',
          borderColor: 'hotpink'
        }}
        src="https://media.istockphoto.com/vectors/music-background-vector-id1076840920?k=20&m=1076840920&s=612x612&w=0&h=7npgZI1DyLkiejEZM19R0XHWdgJGijuTK4cXZvIA72Q="
        alt="bckgrnd"
      ></img>
      <h3>
        Publish your favorite artist and your favorite lyric by them in my
        directory!
      </h3>
    </div>
  )
}

export default Home

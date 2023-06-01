const Content = () => {
    const handleNameChange = () => {
        const fruits = ['apple', 'banana', 'coconut', 'orange', 'lemon', 'cranberry', 'grapes']
        const int = Math.floor(Math.random() * 7);
        return fruits[int]
      }
    return (
        <main>
            <div className="App">
            <p> Type of fruits - {handleNameChange()} </p>
            </div>
        </main>
    )
}

export default Content
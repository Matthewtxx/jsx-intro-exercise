function App() {
    return (
        <div>
            <Tweet
                name="Matthew M"
                username="mtthw"
                date={new Date().toDateString()}
                message="tweet"
            />
            <Tweet
                name="Michelle S"
                username="chelly"
                date={new Date().toDateString()}
                message="tweet tweet"
            />
            <Tweet
                name="Tommy T"
                username="TnT"
                date={new Date().toDateString()}
                message="tweet tweet tweet"
            />
        </div>
    )
}
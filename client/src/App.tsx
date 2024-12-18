import React from 'react';

export default function App() {
    //const [data, setData] = React.useState(null);

    //React.useEffect(() => {
    //    fetch("/api")
    //        .then((res) => res.json())
    //        .then((data) => setData(data.message));
    //}, []);

    return (
        <div>
            <h1>Point-It</h1>
            <h2>Where pointing is a pleasure</h2>

            <h3>Points</h3>
            <input type="radio" id="f1" name="points" value="1" />
            <label htmlFor="f1">1</label>
            <input type="radio" id="option2" name="points" value="2" />
            <label htmlFor="f2">2</label>
            <input type="radio" id="option3" name="points" value="3" />
            <label htmlFor="f3">3</label>
            <input type="radio" id="option5" name="points" value="5" />
            <label htmlFor="f5">5</label>
            <input type="radio" id="option8" name="points" value="8" />
            <label htmlFor="f8">8</label>
            <input type="radio" id="option13" name="points" value="13" />
            <label htmlFor="f13">13</label>
            <input type="radio" id="option21" name="points" value="21" />
            <label htmlFor="f21">21</label>
        </div>
    );
}

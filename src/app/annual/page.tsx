
const months = {

}
export default function Calendar() {
    const d = new Date();
    const CurrentYear = d.getFullYear();
    const CurrentMonth = d.getMonth();
    const CurrentDay = d.getDate();

    return (
        <div>
            <h1 className="text-lg font-medium p-2"><span className="font-bold">Annual View: </span>The Year of {CurrentYear} </h1>
            <div className="container w-full">
                <div className="columns-12" >
                    <div className="p-2">1</div>
                    <div className="p-2">2</div>
                    <div className="p-2">3</div>
                    <div className="p-2">4</div>
                    <div className="p-2">5</div>
                    <div className="p-2">6</div>
                    <div className="p-2">7</div>
                    <div className="p-2">8</div>
                    <div className="p-2">9</div>
                    <div className="p-2">10</div>
                    <div className="p-2">11</div>
                    <div className="p-2">12</div>
                </div>

            </div>
            
        </div>
    );
}
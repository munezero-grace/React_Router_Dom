let Responsive = ({name}) =>{
    return(
        <div className="cont"><form onSubmit={(e) => {e.preventDefault()}}>
            <div className="input-group"><input type="text" value={name} onChange={(e) => {e.ta
            .value}}/></div>
            <div className="btn"> <button type="submit"
             onClick={() => Clicked()}>activate</button></div>
             </form>
        </div>

    )
}
export default Responsive;
const Popup = ({text, ref}) => {
    return ( 
        <div className="popup" >
            <p ref={ref}>{text}</p>
        </div>
     );
}
 
export default Popup;
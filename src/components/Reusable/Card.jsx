const Card = ({children}) => {
    return ( 
        <div style={{
            width:'100%',
            height:'100%',
            objectFit: 'cover'
        }} className={"flex flex-col p-4 rounded-xl space-y-4 border-2 border-gray-100 shadow-md shadow-slate-100"}>
            {children}
        </div>
     );
}
 
export default Card;
const Grid = ({children, cols}) => {
    return ( <div className={`w-5/6 grid grid-cols-1} md:grid-cols-2 lg:grid-cols-3 gap-8`}>
        {children}
    </div> );
}
 
export default Grid;
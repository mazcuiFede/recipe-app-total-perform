const average = arr => {return (arr.reduce(( p, c ) => parseInt(p) + parseInt(c), 0 ) / arr.length).toFixed()}
export default average
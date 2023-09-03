import "./abst.css"
function Abstract(){
    return(
        <>
          <div className="main3">
            <h2>Abstract</h2>
            <p>Our project focuses on designing and 
               developing a software solution to support 
               precision farming practices. The software 
               enables farmers to visualize the layout of 
               their precision farms, accurately calculate 
               field areas, and selectively remove subdivisions 
               for optimized land management. Through an 
               intuitive interface and efficient tools, farmers 
               can easily manage their agricultural plots. By 
               accepting precision farm layout information in 
               common GIS file formats, the software generates 
               graphical representations that highlight field 
               boundaries and subdivisions, providing a clear 
               spatial distribution. The total area calculation 
               feature aids farmers in resource allocation and 
               planning. Additionally, the software allows 
               interactive subdivision removal, updating the 
               visualization and recalculating the total area 
               accordingly. Developed using appropriate geospatial 
               libraries like Shapely and GeoPandas in Python, the 
               solution ensures efficiency, even for large and complex 
               layouts. The project includes comprehensive documentation, 
               validation tests, and visual representations to assist 
               farmers in utilizing the software effectively.</p>
          </div>
        </>
    )
}
export default Abstract
import BrandCatalogue from './BrandCatalogue'
import SkaterCatalogue from './SkaterCatalogue'

function Home(){
    return(
    <div className="home">
        <BrandCatalogue/>
        <div className='vl'/>
        <SkaterCatalogue/>
    </div>
    )
}
export default Home
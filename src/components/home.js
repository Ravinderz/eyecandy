import Carusol from './Carusol';
import Content from './content';
import MainNav from './MainNav';
import Promo from './Promo';
import SubNav from './SubNav';

const Home  = () => {

    return(
        <div class="home">
            <MainNav/>
            <SubNav/>
            <Carusol/>
            <Promo/>
            <Content />
        </div>
    )

}

export default Home;

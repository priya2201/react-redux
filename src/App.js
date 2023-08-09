import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store'
import './App.css'
// import CakeContainer from './components/CakeContainer';
import IcecreamContainer from './components/icecreamContainer';
import Now from './components/Now'
import CakeContainer from './components/CakeContainer';
import HookCakeContainer from './components/HookCakeContainer';
import HookiceCreamContainer from './components/HooksIceCreamContainer';
import HookhighFeature from './components/HookhighFeature';
import HookFeature from './components/HookFeature';
import FeatureContainer from './components/featureContainer';
import NewFeatueContainer from './components/NewFeatueContainer';
import ItemContainer from './components/ItemContainer';
import HookCategoryContainer from './components/HookCategoryContainer';
import HookProductContainer from './components/HookProductContainer';
import ProductContainer from './components/productContainer';
import CategoryContainer from './components/categoryContainer';
import ItemProductContainer from './components/ItemProductContainer';
import UserContainer from './components/UserContainer';




function App() {
  return (
    <Provider store={store}>   
      <div className="App">
        {/* <ItemContainer cake/>
        <ItemContainer/>
        <HookCakeContainer/>
        <CakeContainer/>
        <HookiceCreamContainer/>
<IcecreamContainer/> */}
{/* <HookhighFeature/>
<HookFeature/>
<FeatureContainer/>
<NewFeatueContainer/> */}
{/* <Now/> */}
<UserContainer/>
<ItemProductContainer pro/>
<ItemProductContainer/>
<HookCategoryContainer/>
<HookProductContainer/>
<ProductContainer/>
<CategoryContainer/>

    </div>
    </Provider>
 
  );
}

export default App;
